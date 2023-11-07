/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min() n'existe pas,
   déclarez la fonction calcMin pour qu'elle retourne
   le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
   - le minimum entre 4.5 et 5
   - le minimum entre 19 et 9
   - le minimum entre 1 et 1
N.B. Faites deux versions :
   - en utilisant la syntaxe classique
   - en utilisant une arrow function
*/

// Syntaxe classique

function calcMin (nombre1, nombre2){
    return Math.min (nombre1, nombre2);
}

console.log(calcMin(4.5, 5))
console.log(calcMin(19, 9))
console.log(calcMin(1, 1))


// Utilisation de la fonction calcMin pour calculer le minimum


// Version avec une arrow function

const calcMinn= (n1, n2) => Math.min(n1, n2);
console.log(calcMin(4.5, 5))
console.log(calcMin(19, 9))
console.log(calcMin(1, 1))

// Utilisation de la fonction calcMinArrow pour calculer le minimum


// Version encore plus concise avec une arrow function
const calcMinConcise = (a, b) => (a < b) ? a : b;



// Utilisation de la fonction calcMinConcise pour calculer le minimum

