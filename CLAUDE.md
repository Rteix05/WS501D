# CLAUDE.md — Projet SAÉ WS501D (MMI Troyes, 2026)

Projet de groupe d'étudiants MMI : un **jeu d'arcade sous Unity** (web + borne MMI), avec un **site du jeu** (réglages à distance, scores, stats), un **site d'avancement façon Kickstarter** et une **vidéo attract mode de 20 s**. Réponds en **français**.

## À lire pour avoir le contexte
| Fichier | Contenu |
|---|---|
| `docs/CONSIGNES.md` | Consignes officielles de la SAÉ : livrables, plateformes, planning |
| `docs/BORNE.md` | **Cahier des charges de la borne Anatidae** : contraintes, Toolkit Unity, API, exercices |
| `GAMEPLAY.md` | *(exploration en pause)* reprise de SpeedRunners |
| `docs/MOODBOARD.md` | *(exploration en pause)* pistes de DA, musique, sound design, juice |
| `docs/UI.md` | *(exploration en pause)* maquettes d'interface B4 |

## État actuel (19/10/2026)
- **Le thème et la DA ne sont PAS choisis.** Le gameplay SpeedRunners, le nom « OUT! », le moodboard et les maquettes B4 sont une **exploration mise en pause**. Ne t'en sers pas comme décisions.
- **Pour l'instant, on suit le cours imposé** : installer la borne Anatidae en local, prendre en main l'Anatidae Toolkit, faire un mini-jeu de cube puis un squelette de jeu. Voir `docs/BORNE.md`.
- L'équipe donnera plus tard son thème et sa DA. Mets alors ces fichiers à jour.
- **Prototype « OUT! lite » (20/10/2026)** fait pour la fin de l'exercice 2 (squelette), à la demande de l'utilisateur.
  - Il reprend `GAMEPLAY.md` et la maquette B4.
  - Il se joue de 1 à 4 joueurs, avec la borne, le clavier ou un téléphone.
  - Le code est dans le projet Unity local `anatidae-toolkit/Assets/OUT/`, qui n'est pas encore dans ce dépôt. Le serveur des manettes téléphone est dans `serveur-manettes/`.
  - Commandes (3 boutons, comme l'impose la borne) :
    - B1 : saut ;
    - B2 : grappin ;
    - B3 : boost ou objet ;
    - bas : glissade.
  - Touches clavier : J1 = ZQSD + F G H, J2 = flèches + pavé 1 2 3, Échap = bouton blanc.
  - **Circuit (carte V4 « Le Circuit Fluide », 21/10/2026)** : maquette « Map V4 » sur la page Map du Figma, d'après la proposition de refonte de l'équipe.
    - Parcours : départ en haut à droite et pente prononcée, puis la rue du toit vers la gauche (dash avec petits trous qui font tomber dans la voie du dessous). Ensuite, un toboggan à 45° garni de boosts et un tremplin vers une zone de grappin.
    - Au milieu, deux options : A = raccourci risqué fermé par une porte, avec un levier suspendu qu'il faut attraper en sautant ; B = chemin long avec boîtes « ? » et losanges.
    - En bas : saut obligatoire au-dessus d'un vide juste avant le damier, puis un tube de propulsion remonte au départ.
    - La ligne de départ (dans le tube) ferme le tour. Le contre-la-montre s'arrête au damier.
    - Mécanismes (`Assets/OUT/Scripts/OutMechanisms.cs`) : lanceurs et tremplin, anneaux du tube, boosts au sol (aussi en pente), portes rayées jaune et noir ouvertes quelques secondes par un levier.
    - La carte est décrite par `Assets/OUT/Editor/gen_map4.py.txt`, convertie par `build_map.py.txt`. Les cartes V1 et V3 sont gardées dans `Assets/OUT/MapV1/` et `MapV3/`.
    - L'avancée de chaque joueur est mesurée le long du circuit. La caméra suit le leader, et on est OUT si on sort de l'écran par n'importe quel bord.
  - **Skins (personnages)** : Jordan (homme en costume de canard), Jamal (rappeur tout en noir, inspiré de la tenue d'une photo de référence, sans copier le visage d'une vraie personne), Mamie Turbo, Nitro (mannequin de crash-test).
    - On change de perso avec gauche/droite dans la sélection.
    - Chaque joueur garde sa couleur grâce au foulard et à l'écharpe.

## Contraintes fixes (consignes)
- **Moteur : Unity 6000.0.40f1** (imposé, c'est la version de l'Anatidae Toolkit ; tout le groupe doit avoir la même), avec le module WebGL. Sortie WebGL en 1920×1080, sur la borne Anatidae.
- **Le jeu se joue seul ou à deux, avec 1 à 3 boutons maximum.** C'est incompatible avec l'exploration SpeedRunners (4 joueurs, 4 boutons), qu'il faudra adapter si on la reprend.
- Score enregistré sur la borne avec un nom de 3 caractères, puis envoyé au site du jeu. Le site a un back-office pour régler la difficulté.
- Retour au menu avec le bouton blanc, et au bout de 60 s d'inactivité. Dead zone sur les joysticks.

## Pas encore décidé
- **Le thème, la DA et le gameplay.**
- La plateforme (tirage au sort en semaine 2).
- La stack du site (back-end, BDD, API jeu ↔ site).

## Liens
- Figma (moodboard) : https://www.figma.com/design/3rvjvBiZXKNO3VvmX1LoER/SpeedRunners
- GitHub : https://github.com/Rteix05/WS501D
- Consignes (connexion MMI requise) : https://docs.mmi-troyes.fr/books/ws501d-2026-alofme/page/seance-1-fme-1910-presentation

## Principes de travail
- **Périmètre réaliste** (environ 140 h par personne). D'abord une base jouable, puis les objets, puis le polish et le juice (50 % du temps).
- Prévoir dès le début l'**interface jeu ↔ site** : réglages lus par le jeu, scores et stats envoyés au site.
- Garder ces `.md` à jour quand une décision est prise, pour que tout le groupe (et leurs Claude) ait le même contexte.
