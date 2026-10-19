# CLAUDE.md — Projet SAÉ WS501D (MMI Troyes, 2026)

Projet de groupe d'étudiants MMI : un **jeu d'arcade sous Unity** (web + borne MMI), avec un **site du jeu** (réglages à distance, scores, stats), un **site d'avancement façon Kickstarter** et une **vidéo attract mode de 20 s**. Réponds en **français**.

## À lire pour avoir le contexte
| Fichier | Contenu |
|---|---|
| `docs/CONSIGNES.md` | Consignes officielles de la SAÉ : livrables, plateformes, planning |
| `GAMEPLAY.md` | **Gameplay retenu** : reprise de SpeedRunners (mécaniques, objets, ordre de développement) |
| `docs/MOODBOARD.md` | Pistes de direction artistique, musique, sound design, juice |

## Décisions prises
- **Gameplay : on reprend SpeedRunners.** Course de 2 à 4 joueurs en écran partagé. La caméra suit le leader, celui qui sort de l'écran est éliminé, l'écran rétrécit. Grappin, glissade, boost, objets. Match en 3 manches gagnantes.
- **Moteur : Unity** (imposé), sortie WebGL + borne.

- **Univers graphique : la piste B (street / graffiti cel-shading, réf. Jet Set Radio et Hi-Fi RUSH) est la favorite**, mais elle n'est pas figée. L'équipe va en modifier des détails. Base-toi sur B sans présenter ses détails (palette, références) comme définitifs.

## Pas encore décidé
- **Les ajustements de la piste B.** Ne les décide pas à la place de l'équipe.
- La plateforme (tirage au sort en semaine 2). Le jeu convient à la borne classique à 2 joueurs ou à la télé du hall avec des téléphones (4 joueurs), pas à la table cocktail.
- Le nombre de boutons de la borne MMI.
- La stack du site (back-end, BDD, API jeu ↔ site).

## Liens
- Figma (moodboard) : https://www.figma.com/design/3rvjvBiZXKNO3VvmX1LoER/SpeedRunners
- GitHub : https://github.com/Rteix05/WS501D
- Consignes (connexion MMI requise) : https://docs.mmi-troyes.fr/books/ws501d-2026-alofme/page/seance-1-fme-1910-presentation

## Principes de travail
- **Périmètre réaliste** (environ 140 h par personne). D'abord une base jouable, puis les objets, puis le polish et le juice (50 % du temps).
- Prévoir dès le début l'**interface jeu ↔ site** : réglages lus par le jeu, scores et stats envoyés au site.
- Garder ces `.md` à jour quand une décision est prise, pour que tout le groupe (et leurs Claude) ait le même contexte.
