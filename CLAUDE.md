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

## Contraintes fixes (consignes)
- **Moteur : Unity** (imposé), sortie WebGL en 1920×1080, sur la borne Anatidae.
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
