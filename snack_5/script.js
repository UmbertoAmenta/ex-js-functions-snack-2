// Crea una funzione stampaOgniSecondo con setInterval.
//      Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.
//          Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
/**
 * Runs a custom message on the console every second
 *
 * @param {string} text - the custom message
 * @returns {number} the interval identifier, useful for stopping execution with clearInterval
 */
function stampaOgniSecondo(text) {
  const intervalId = setInterval(() => console.log(text), 1000);
  setTimeout(() => clearInterval(intervalId), 10000);
  return intervalId;
}

stampaOgniSecondo("tic-tac il tempo scorre!");
