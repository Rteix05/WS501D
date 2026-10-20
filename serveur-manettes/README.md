# Serveur des manettes téléphone de OUT!

Ce serveur permet de jouer à OUT! jusqu'à 4 avec son téléphone comme manette, en scannant le QR code affiché par le jeu.

```
npm install
npm start          # port 8080 (ou PORT=xxxx npm start)
```

1. Lance le serveur sur le PC qui fait tourner le jeu.
2. La première fois, Windows demande d'autoriser Node sur le réseau : accepte pour le **réseau privé**.
3. Lance le jeu (Unity en mode Play, ou le build WebGL dans la borne locale). Il se connecte tout seul à `ws://localhost:8080` et affiche un **QR code** sur l'écran titre et dans les cases vides de la sélection.
4. Les joueurs scannent le QR code. Leur téléphone doit être sur le **même Wi-Fi** que le PC.
5. Chacun entre un pseudo de 3 lettres puis appuie sur un bouton pour rejoindre.

## La manette
- **À gauche :** un joystick qui apparaît là où on pose le pouce. Bas = glissade.
- **À droite :** SAUT (B1), GRAPPIN (B2, à maintenir), BOOST / OBJET (B3).
- Le téléphone vibre quand on rejoint, quand on prend un coup, quand on est éliminé (« OUT! ») et quand on gagne.

## Fonctionnement
- `server.js` sert la page `public/index.html` et le QR code (`/qr.png?r=CODE`).
- Il relaie en WebSocket (`/ws`) les commandes des téléphones vers le jeu, et les messages du jeu vers les téléphones.
- Chaque jeu connecté ouvre une **salle** avec un code de 4 lettres, si bien que plusieurs jeux peuvent partager le même serveur.

| Sens | Message |
|---|---|
| serveur → jeu | `{t:"room", code, url}`, `{t:"join", id, name}`, `{t:"in", id, x, y, b}`, `{t:"leave", id}` |
| jeu → téléphone (via le serveur) | `{t:"slot", id, player, color, text}`, `{t:"buzz", id, ms, text}` |

- `b` est un masque de bits : 1 = B1, 2 = B2, 4 = B3. `x` et `y` vont de -1 à 1 (haut = positif), avec une zone morte de 20 %.
- `PUBLIC_URL=https://…` force l'adresse mise dans le QR code, par exemple quand le serveur tournera sur le site du jeu.

Côté Unity, le code se trouve dans `Assets/OUT/Scripts/OutPhones.cs` et `Assets/Plugin/OutPhones.jslib`.

> Rappel du cahier des charges : sur la **borne MMI**, le jeu doit se jouer à 1 ou 2. Les manettes téléphone servent pour la **télé du hall**.
