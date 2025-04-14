// Crea un generatore di funzioni creaTimer
//      Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
/**
 * Creates a timer that runs a callback function after a specified amount of time.
 *
 * @param {number} time - time in milliseconds
 * @returns {function} a callback that runs on console at the end of the timer
 */
function creaTimer(time) {
  return setTimeout(() => console.log("Tempo scaduto!"), time);
}

console.log(creaTimer(2000));
