# Cahier des charges de la borne d'arcade MMI (Anatidae)

> Résumé de la page « Séance 2 (FME 19/10) : Cahier des charges borne d'arcade MMI ».
> Source (connexion requise) : https://docs.mmi-troyes.fr/books/ws501d-2026-alofme/page/seance-2-fme-1910-cahier-des-charges-borne-darcade-mmi

La borne fait tourner **Anatidae**, une interface qui lance des jeux WebGL. Notre jeu doit respecter ses contraintes.
- Serveur : https://github.com/XariusExcl/anatidae-arcade
- Projet Unity de base : https://github.com/XariusExcl/anatidae-toolkit

## Contraintes obligatoires
- **Résolution 1920×1080**, jeu qui tourne **dans le navigateur** (export WebGL).
- **Bouton blanc** : retour au menu Anatidae, tout de suite ou après un appui long de 1,5 s maximum.
- **Inactivité** : retour automatique au menu après **60 s** sans toucher un bouton ou un joystick.
- **Fichiers du build** dans `public/<nom-du-jeu>/` :
  - `index.html` ;
  - `thumbnail.png` : image carrée, 1920×1920 max ;
  - `info.json` ;
  - `attract.mp4` (facultatif) : 20 s max, sans son.
- **Dead zone** sur les joysticks : au repos, ils renvoient environ `-0.0039`, donc on ignore les petites valeurs.
- **Score** : en fin de partie, le joueur enregistre son score sur la borne avec un **nom de 3 lettres ou chiffres**.
- **Scores renvoyés vers le site du jeu** (pas vers le site d'avancement). Le site doit agir sur le jeu, au minimum avec un **back-office qui règle la difficulté**.
- ⚠️ **Le jeu se joue seul ou à deux, avec 1 à 3 boutons maximum.**

## Matériel
- La borne a **2 postes**. Chacun a 1 joystick 2 axes et 7 boutons. Le bouton blanc Start est le bouton 8 de la manette 1.
- Le PC de la borne est un i5-7200U avec 8 Go de RAM et **sans carte graphique dédiée**, sous Firefox ESR. La 3D ne passe que si elle est simple ou bien optimisée.

## `info.json`
```json
{
  "name": "Mon jeu",
  "description": "Description courte.",
  "creator": "Noms",
  "year": 2026,
  "type": "Plateforme",
  "players": "1-2",
  "catchphrase": "Accroche",
  "config": { "scoreType": "score", "scoreUnit": "", "scoreSort": "desc" }
}
```
`scoreType` prend la valeur `"score"`, `"time"` ou `"distance"`. `scoreSort` prend `"asc"` ou `"desc"`.

## Anatidae Toolkit (Unity)
- **Version Unity du groupe : 6000.0.40f1**, la même que le Toolkit, avec le module WebGL. Installation : `unityhub://6000.0.40f1/157d81624ddf`. Ne pas ouvrir le projet dans une autre version : Unity le convertit sans retour possible.
- Il utilise l'**ancien Input Manager** :
  - axes `P1_Horizontal`, `P1_Vertical`, `P2_Horizontal`, `P2_Vertical` ;
  - boutons `P1_Start`, `P1_B1` à `P1_B6`, `P2_Start`, `P2_B1` à `P2_B6`, `Coin` ;
  - par exemple `Input.GetButtonDown("P1_B1")`.
- Le prefab **`AnatidaeInterface`** doit être dans chaque scène. Il gère la saisie du nom et l'affichage des highscores.
- **`HighscoreManager`** :
  - `GAME_NAME` doit être identique au nom du dossier du build, sans espaces ni accents ;
  - `IsHighscore(score)`, `ShowHighscoreInput()` et `SetHighscore(name, score)` (coroutine) gèrent l'enregistrement ;
  - `PlayerName` garde le dernier nom saisi.
- Le **retour au menu** passe par `Assets/Plugin/BackToMenu.jslib`, qui renvoie vers `http://localhost:3000`.
- Les scènes fournies sont `Assets/Scenes/InputTester.unity` et `Assets/Anatidae/Anatidae Welcome.unity`.

## API du serveur (`?game=<nom-du-dossier>`)
| Méthode | Route | Rôle |
|---|---|---|
| GET / POST | `/api/?game=` | Lire les highscores / en envoyer un `{ name, score }` |
| GET / POST | `/api/extradata/?game=` | Données clé-valeur `{ key, value }` |
| GET | `/api/playcount/?game=` | Nombre de parties lancées |
| POST | `/api/nameValid` | Vérifier qu'un nom est autorisé `{ name }` |

## Exercices de la séance
1. **Installer le serveur de borne en local** :
   ```
   git clone https://github.com/XariusExcl/anatidae-arcade
   cd anatidae-arcade
   npm install
   node server.js
   ```
   La borne s'ouvre ensuite sur http://localhost:3000. Il faut Node 18 ou plus.
2. **Anatidae Toolkit** :
   1. Ouvrir la scène `InputTester` et vérifier qu'elle marche en mode Play.
   2. Configurer l'export WebGL dans Unity Hub (module WebGL) puis dans l'éditeur (File > Build Profiles).
   3. Faire Build and Run de `InputTester` pour la tester dans le navigateur.
   4. Copier le build dans `public/` du serveur local et le lancer depuis Anatidae. On peut remapper les touches, en particulier si le clavier n'a pas de pavé numérique pour le joueur 2.
   5. Faire un **mini-jeu** : déplacer un cube, puis 2 cubes pour 2 joueurs, et tester la sortie avec le bouton blanc (`Esc`).
   6. Faire un **squelette de jeu**, dans une nouvelle scène, qui simule la vie du jeu :
      - plein écran 1920×1080 ;
      - attract mode au lancement (une image fixe suffit pour l'instant) ;
      - retour tout seul au menu Anatidae au bout de **30 s** ;
      - sortie aussi après un appui de 3 s sur le bouton blanc.

      Le tester sur Anatidae en local, puis sur la borne de développement de la salle H205.
