// Crea una funzione che somma due numeri.

//      Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// function somma(a, b) {
//   return a + b;
// }

//      Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// const somma = function (a, b) {
//   return a + b;
// };

//      Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
/**
 * Calculate the sum of 2 numbers
 *
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} sum of "a" and "b"
 */
const somma = (a, b) => a + b;

console.log(somma(2, 3));
