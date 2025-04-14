// Crea un contatore automatico con setInterval
//      Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
/**
 * Create an automatic counter with a custom interval(ms)
 *
 * @param {number} interval - interval of time in milliseconds
 * @returns {function} start an automatic counter
 */
function creaContatoreAutomatico(interval) {
  let counter = 0;
  return setInterval(() => {
    counter++;
    console.log(counter);
  }, interval);
}

const intervalId = creaContatoreAutomatico(5000);

setTimeout(() => clearInterval(intervalId), 60000);
