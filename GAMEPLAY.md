# Gameplay — référence : SpeedRunners

> Décision : on reprend le gameplay de **SpeedRunners** (DoubleDutch Games / tinyBuild, 2013).
> L'univers graphique sera défini séparément (voir moodboard Figma).

## Principe
- De 2 à 4 joueurs courent **sur le même écran**, sur un circuit en boucle et en défilement horizontal.
- **La caméra suit le joueur en tête.** Celui qui sort de l'écran est **éliminé**.
- Le dernier en vie gagne la manche. Le match se joue en **3 manches gagnantes** (4 manches en équipes de 2).
- **L'écran rétrécit** après chaque élimination, ou au bout d'un certain temps si personne n'est éliminé. Les manches ne peuvent donc pas traîner.

## Déplacements
| Action | Détail |
|---|---|
| Course / saut | Saut contre les murs (d'après le jeu original, non confirmé par le wiki) |
| **Grappin** | S'accroche aux plafonds prévus pour. Le moment où on le lance, le balancement et le moment où on le lâche décident de la vitesse. C'est le geste le plus important du jeu |
| **Glissade** | Passe sous les obstacles et fait tomber un adversaire. Ralentit sur le plat mais **accélère beaucoup en descente** |
| **Boost** | Jauge limitée, remplie en ramassant les losanges bleus. Sert à rattraper le retard ou à pousser les autres hors de l'écran |

## Pièges du décor
- **Caisses** : ralentissent et étourdissent
- **Pics**
- Pentes à prendre en glissade

## Objets (boîtes rouges sur le parcours, 1 objet tenu à la fois)
| Objet | Effet | Parade |
|---|---|---|
| Grappin doré | Attrape l'adversaire devant soi et échange sa place avec lui | Glisser dessous, caisses, onde de choc |
| Missile à tête chercheuse | Poursuit un adversaire, l'étourdit et casse les caisses | Virages serrés, caisses, onde de choc |
| Caisses | Pose 1 ou 3 caisses derrière soi | Détruites par les autres objets |
| Bombe à retardement | On la pose puis on la déclenche : elle repousse les autres ou propulse son poseur | — |
| InvinciDrill | Vitesse et invincibilité temporaires, casse les caisses | — |
| Onde de choc | Repousse les adversaires, détruit les caisses, le grappin doré et les missiles | Traverser en boost |
| Rayon gel | Gèle les adversaires touchés quelques secondes | Dégel au bout de quelques secondes ou si on est touché par autre chose |
| Boule de feu | Rocher qui roule, renverse tout et casse les caisses | Détruit en touchant un mur, renvoyé par l'onde de choc |

## Interface
En haut de l'écran, un cadre par joueur : portrait, objet tenu, jauge de boost.

## Adaptation à la SAÉ
- **Plateforme idéale :** la borne classique à 2 joueurs, ou la télé du hall avec les téléphones comme manettes (jusqu'à 4 joueurs). La **table cocktail** ne convient pas : elle casse le défilement horizontal.
- **Commandes :** stick + 4 boutons (saut, grappin, glissade/boost, objet). Nombre de boutons de la borne à vérifier.
- **Score / stats pour le site :** victoires, distance parcourue, temps de manche, éliminations, objets utilisés.
- **Réglages à distance depuis le site :** vitesse du rétrécissement, nombre de manches, objets activés, circuit.
- **Juice :** traînées de vitesse, secousses d'écran, ralenti à l'élimination, particules au boost et au grappin, sons.

## Pistes d'ajout inspirées de Sunset Overdrive (NON décidées)
Idées de mobilité à tester une fois la base jouable, **sans remplacer le cœur SpeedRunners** :
- **Grind sur rails / câbles** : on glisse vite sur une ligne, avec une alternative ou un bonus au grappin.
- **Course sur les murs**, sur une courte distance.
- **Rebonds sur les objets du décor** (voitures, auvents) : trampolines intégrés au décor.
- **Jauge de style** : enchaîner les mouvements sans toucher le sol remplit le boost plus vite.

## Ordre de développement
1. **Base jouable :** Unity 2D, 1 circuit, 2 joueurs, course + saut + grappin + glissade + boost, caméra sur le leader, élimination, écran qui rétrécit, 3 manches gagnantes.
2. 3 ou 4 objets (par ex. missile, caisses, rayon gel, onde de choc), puis les autres si on a le temps.
3. Un 2e circuit, le polish et le juice (50 % du temps).
4. Liaison avec le site : réglages, scores, stats.

## Sources
- https://en.wikipedia.org/wiki/SpeedRunners
- https://speedrunners.wiki.gg/wiki/Pickups
- https://speedrunners.wiki.gg/wiki/Tips
- https://www.youtube.com/watch?v=p62AWFtRdDM
