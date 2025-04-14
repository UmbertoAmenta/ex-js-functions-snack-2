// Crea una arrow function che calcola il quadrato di un numero.

//      Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
//          -la seguente è una funziona anonima il cui valore e salvato in una variabile (non esattamente quanto richiesto, ma sta in una riga)
/**
 * Calculate the square of a number
 *
 * @param {number} a - the number
 * @returns {number} square of "a"
 */
const quadrato = (a) => a ** 2;

//          -così rispetto la richiesta ma in più di una riga
// function quadrato(a) {
//   return a ** 2;
// }

console.log(quadrato(3));
