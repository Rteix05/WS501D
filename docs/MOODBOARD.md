# Moodboard — direction artistique, musique, juice

Figma : https://www.figma.com/design/3rvjvBiZXKNO3VvmX1LoER/SpeedRunners (page « Moodboard »)

> **Statut (19/10/2026) : la piste B (street / graffiti cel-shading) est la favorite de l'équipe.** Elle n'est pas figée : des détails vont encore changer. Les pistes A et C restent comme références.

## Contraintes, quel que soit le style
- Rester lisible à haute vitesse.
- Distinguer 4 personnages par leur couleur.
- Bien détacher les persos du décor.
- Pouvoir décliner le style sur la vidéo attract mode et le site Kickstarter.

## Pistes graphiques
| Piste | Style | Références | Palette |
|---|---|---|---|
| A | Néon nocturne / synthwave | Katana ZERO, Hotline Miami | `#0B0628` `#7B2FF7` `#FF2E88` `#00E5FF` `#FFD23F` |
| B | Street / graffiti cel-shading | Jet Set Radio, Hi-Fi RUSH | `#111111` `#FFE600` `#FF3B3B` `#1E90FF` `#F5F5F5` |
| C | Cartoon dessiné à la main | Cuphead, Rayman Legends | `#F2E3C6` `#2E2E2E` `#D7263D` `#F4A259` `#3C91E6` |


(La piste D, pixel art, a été abandonnée le 19/10/2026.)

## Déclinaisons de la piste B (favorite)

> **Statut (19/10/2026) : B4 « Comics 2D — aplats et trames » est la variante favorite de l'équipe.** C'est elle qui sert de base à la suite de la DA, mais les détails restent à affiner.
Ce qui ne change pas : contours épais, aplats saturés, tags et onomatopées, personnages à la silhouette forte. Le jeu étant en **2D vue de côté**, **Lethal League Blaze** sert de référence pour passer ce style en 2D arcade.

| Variante | Ambiance | Références | Palette |
|---|---|---|---|
| B1 | **Jour saturé — Tokyo-to** : plein soleil, ville vivante, le plus fidèle à Jet Set Radio | Jet Set Radio, Bomb Rush Cyberfunk | `#FFE600` `#7ED957` `#1E90FF` `#FF3B3B` `#111111` |
| B2 | **Punk festif — fin du monde fun** : orange et turquoise, chaos joyeux, le parcours devient un terrain de jeu | Sunset Overdrive | `#FF6B1A` `#00C2B8` `#FF2E88` `#FFE14D` `#2B1B3D` |
| B3 | **Nuit néon** : mélange des pistes B et A, tags fluo sur fond sombre, les traînées de vitesse ressortent bien | Bomb Rush Cyberfunk, Lethal League Blaze | `#120C2E` `#7B2FF7` `#FF2E88` `#00E5FF` `#FFE600` |
| B4 | **Comics 2D — aplats et trames** : 2 ou 3 couleurs par écran, cases de BD sur les éliminations, le moins coûteux à produire | Lethal League Blaze, Spider-Verse, Hi-Fi RUSH | `#FFE600` `#E63946` `#111111` `#F5F5F5` `#3A86FF` |

## Inspiration transversale : Sunset Overdrive
Pour l'univers (punk, ultra coloré, chaos joyeux) **et** pour le déplacement : grind sur les rails, course sur les murs, rebonds sur les objets, on ne touche presque jamais le sol. Voir les idées de mécaniques dans `GAMEPLAY.md`.

## Musique (le genre suit la piste retenue)
- Musique rapide, **environ 140 à 175 BPM**, en boucles courtes. Elle **monte en intensité quand l'écran rétrécit** et à la balle de match.
- A : darksynth / synthwave · B : funk / J-electro / breakbeat · B2 : punk rock / ska-punk (Sunset Overdrive) · C : jazz big band / swing.

## Sound design à prévoir
- Annonceur : « 3, 2, 1… GO ! », « Éliminé ! », « Balle de match ! »
- Grappin : clac à l'accroche + whoosh
- Boost / glissade : souffle qui monte, friction
- Élimination : coupure de la musique + ralenti + impact grave
- Un son reconnaissable par objet
- Jingle « insert coin »

## Juice (50 % du temps de dev)
- Traînées de vitesse par joueur
- Screen shake
- Ralenti + zoom à l'élimination
- Squash & stretch
- Particules
- Hit stop + flash
- UI qui pulse
- Vignette rouge au bord de l'écran
