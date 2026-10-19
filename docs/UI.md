# Maquettes d'interface — style B4 (comics 2D)

Figma : https://www.figma.com/design/3rvjvBiZXKNO3VvmX1LoER/SpeedRunners, page **« Maquettes UI — B4 »**

> **Statut :** premières maquettes du 19/10/2026, à itérer. Le titre du jeu (« NOM DU JEU ») et les persos (« Runner ») sont des **placeholders**.

## Bases visuelles
- **Palette B4 :** jaune `#FFE600` (fond), rouge `#E63946`, noir `#111111`, blanc `#F5F5F5`, bleu `#3A86FF`.
- **Couleurs joueurs :** P1 rouge `#E63946` · P2 bleu `#3A86FF` · P3 vert `#2BB673` · P4 violet `#9B5DE5`.
- **Typos :**
  - **Bangers** pour les titres et les onomatopées.
  - **Archivo Black / Archivo** pour les textes d'interface.
- **Rendu :**
  - Contours noirs épais.
  - Ombres portées noires nettes, sans flou (décalage de 8 à 14 px).
  - Trames de points (halftone) et rayons en fond.
  - Cases de BD légèrement inclinées.

## Écrans
| # | Écran | Contenu |
|---|---|---|
| 01 | Titre / attract mode | Titre, accroche « Cours · Accroche-toi · Éjecte-les », 4 persos, bouton INSERT COIN qui clignote, bandeau record + renvoi au site |
| 02 | Sélection des joueurs | 4 cases BD (une par joueur) : « PRÊT ! » ou « APPUIE SUR A », départ à partir de 2 joueurs |
| 03 | **Écran de jeu type** | HUD + niveau. Légende numérotée de 1 à 10 à côté de l'écran |
| 04 | Élimination | Case BD sur le joueur éliminé + « OUT! » + bandeau « JOUEUR 4 ÉLIMINÉ ». Juice : freeze frame 0,3 s → ralenti → zoom → l'écran rétrécit |
| 05 | Fin de match | Case vainqueur, classement avec stats (manches, éliminations, distance, objets), Rejouer / Changer de persos, QR code vers le site |

## HUD en jeu (écran 03)
1. **Carte joueur** en haut de l'écran : portrait à la couleur du joueur, nom, 3 pastilles de manches gagnées.
2. **Jauge de boost** graduée en 4 crans, à la couleur du joueur.
3. **Slot objet** : caisses, grappin doré ou bouclier. Vide quand l'objet est utilisé.
4. **Leader** : traînée à sa couleur + onomatopée (« WHOOSH! ») quand il boost.
5. **Plafonds accrochables** : bande noire dentelée de blanc. « CLAC! » à l'accroche.
6. **Bouclier actif** : bulle bleue en pointillés.
7. **Caisses posées** derrière le joueur.
8. **Boîte à objet** rouge « ? » sur le parcours.
9. **Danger** : vignette rouge + « ! » au bord de l'écran, carte du joueur cerclée de rouge + badge « DANGER ! ».
10. **Indicateur de manche** + compte à rebours avant le rétrécissement de l'écran.

## Composants Figma
`HUD/Carte joueur` a les propriétés Nom, Tag, Objet (swap) et Objet visible. Les autres composants : `Item/Caisses`, `Item/Grappin doré`, `Item/Bouclier`, `Décor/Boîte à objet`, `Perso/Runner` (placeholder ; le magenta est remplacé par la couleur du joueur).

## Points à valider
- Le nombre de boutons de la borne : la sélection affiche « APPUIE SUR A » pour l'instant.
- Le titre du jeu.
- Le design des persos.
- La lisibilité du HUD sur l'écran réel de la borne (distance de lecture).
