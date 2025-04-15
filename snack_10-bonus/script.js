// Creare un throttler per limitare l’esecuzione di una funzione
//      Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
//          Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
/**
 * Create a HOF that accepts a function and a minimum time to wait before it can be restarted
 *
 * @param {function} operation - function to run
 * @param {number} time - the minimum delay in milliseconds between two executions
 * @returns {function} run custom "operation"
 */
function creaThrottler(operation, time) {
  let lastExecution = 0;
  return function () {
    const now = new Date().getTime();
    const elapsed = now - lastExecution;

    if (elapsed >= time) {
      operation();
      lastExecution = now;
    } else {
      console.log("Too soon, you have to wait");
    }
  };
}

const spam = creaThrottler(() => console.log("Richiesta eseguita"), 1000);
spam();
spam();
setTimeout(() => spam(), 1500);
