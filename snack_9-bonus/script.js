// Creare una funzione che esegue una sequenza di operazioni con ritardi
//      Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
//          Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

/**
 * Performs a series of functions with a custom time interval
 *
 * @param {Array} operations - series of functions to be performed
 * @param {number} interval - time (in milliseconds) between 2 operations
 */
function sequenzaOperazioni(operations, interval) {
  for (let i = 0; i < operations.length; i++) {
    setTimeout(() => operations[i](), interval * i);
  }
}

sequenzaOperazioni(
  [
    () => console.log("Pronti?"),

    () => console.log("Partenza..."),

    () => console.log("VIA!"),
  ],
  1000
);
