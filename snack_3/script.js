// Crea una funzione eseguiOperazione
//      Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.
const somma = (a, b) => a + b;
const sottrazione = (a, b) => a - b;
const moltiplicazione = (a, b) => a * b;
const divisione = (a, b) => a / b;

/**
 * Performs a mathematical operation on two numbers
 *
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @param {function} operazione - the mathematical operation to be performed
 * @returns {number} the result of the mathematical operation
 */
function eseguiOperazione(a, b, operazione) {
  return operazione(a, b);
}

console.log(eseguiOperazione(5, 3, somma));
console.log(eseguiOperazione(5, 3, sottrazione));
