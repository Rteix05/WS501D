// Serveur des manettes téléphone de OUT!
// - sert la page manette (public/index.html) aux téléphones ;
// - relaie en WebSocket les commandes des téléphones vers le jeu (Unity WebGL), et les vibrations du jeu vers les téléphones ;
// - génère le QR code qui ouvre la manette.
//
// Lancer : npm install puis npm start (port 8080, ou PORT=xxxx).
// Les téléphones doivent être sur le même réseau Wi-Fi que ce PC.
// PUBLIC_URL=http://mon-site.fr force l'adresse mise dans le QR code (sinon : IP locale du PC).

import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WebSocketServer } from 'ws';
import QRCode from 'qrcode';

const PORT = Number(process.env.PORT) || 8080;
const DIR = path.dirname(fileURLToPath(import.meta.url));

function lanAddress() {
  const candidates = [];
  for (const list of Object.values(os.networkInterfaces()))
    for (const a of list || [])
      if (a.family === 'IPv4' && !a.internal) candidates.push(a.address);
  // on préfère les réseaux locaux classiques (Wi-Fi / box)
  return candidates.find(ip => ip.startsWith('192.168.')) || candidates.find(ip => ip.startsWith('10.')) || candidates[0] || 'localhost';
}
const PUBLIC_URL = process.env.PUBLIC_URL || `http://${lanAddress()}:${PORT}`;

// ---------- Salles : 1 jeu (host) + ses téléphones ----------
const rooms = new Map();   // code -> { host, phones: Map<id, ws> }
let nextId = 1;

function newCode() {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  let code;
  do { code = Array.from({ length: 4 }, () => letters[Math.floor(Math.random() * letters.length)]).join(''); }
  while (rooms.has(code));
  return code;
}

const send = (ws, msg) => { if (ws && ws.readyState === 1) ws.send(JSON.stringify(msg)); };
const controllerUrl = code => `${PUBLIC_URL}/?r=${code}`;

// ---------- HTTP : page manette + QR code ----------
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x');
  res.setHeader('Access-Control-Allow-Origin', '*');   // le jeu WebGL charge le QR depuis une autre origine

  if (url.pathname === '/qr.png') {
    const code = (url.searchParams.get('r') || '').toUpperCase();
    const png = await QRCode.toBuffer(controllerUrl(code), { margin: 1, width: 512, color: { dark: '#111111', light: '#FFFFFF' } });
    res.writeHead(200, { 'Content-Type': 'image/png', 'Cache-Control': 'no-store' });
    return res.end(png);
  }
  if (url.pathname === '/' || url.pathname === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return fs.createReadStream(path.join(DIR, 'public', 'index.html')).pipe(res);
  }
  res.writeHead(404); res.end('404');
});

// ---------- WebSocket ----------
const wss = new WebSocketServer({ server, path: '/ws' });

wss.on('connection', (ws, req) => {
  const url = new URL(req.url, 'http://x');
  const role = url.searchParams.get('role');

  if (role === 'host') {
    const code = newCode();
    rooms.set(code, { host: ws, phones: new Map() });
    send(ws, { t: 'room', code, url: controllerUrl(code) });
    console.log(`[jeu] salle ${code} ouverte → ${controllerUrl(code)}`);

    ws.on('message', data => {
      let msg; try { msg = JSON.parse(data); } catch { return; }
      const room = rooms.get(code);
      // le jeu parle à un téléphone (slot, buzz, full…)
      if (room && msg.id) send(room.phones.get(msg.id), msg);
    });
    ws.on('close', () => {
      const room = rooms.get(code);
      if (room) for (const p of room.phones.values()) { send(p, { t: 'error', msg: 'La partie est fermée.' }); p.close(); }
      rooms.delete(code);
      console.log(`[jeu] salle ${code} fermée`);
    });
    return;
  }

  // Téléphone
  const code = (url.searchParams.get('r') || '').toUpperCase();
  const name = (url.searchParams.get('name') || '???').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 3) || '???';
  const room = rooms.get(code);
  if (!room) { send(ws, { t: 'error', msg: `Partie ${code || '?'} introuvable. Rescanne le QR code.` }); ws.close(); return; }

  const id = nextId++;
  room.phones.set(id, ws);
  send(ws, { t: 'hello', id });
  send(room.host, { t: 'join', id, name });
  console.log(`[tél] ${name} (#${id}) a rejoint ${code}`);

  ws.on('message', data => {
    let msg; try { msg = JSON.parse(data); } catch { return; }
    if (msg.t === 'in') send(room.host, { t: 'in', id, x: +msg.x || 0, y: +msg.y || 0, b: msg.b | 0 });
  });
  ws.on('close', () => {
    room.phones.delete(id);
    send(room.host, { t: 'leave', id });
    console.log(`[tél] #${id} parti`);
  });
});

server.listen(PORT, () => {
  console.log(`Serveur manettes OUT! : http://localhost:${PORT}`);
  console.log(`Adresse pour les téléphones : ${PUBLIC_URL}`);
});
