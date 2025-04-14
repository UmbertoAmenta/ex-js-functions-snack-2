// Crea una funzione che ferma un timer dopo un certo tempo
//      Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
/**
 * Create a timer that display a custom message with a custom interval(ms) that ends after a custom interval of time(ms)
 *
 * @param {string} text - custom message to display
 * @param {number} interval - time interval in milliseconds between messages
 * @param {number} stop - time in milliseconds to stop the timer
 */
function eseguiEferma(text, interval, stop) {
  const timerId = setInterval(() => {
    console.log(text);
  }, interval);
  setTimeout(() => clearInterval(timerId), stop);
}

eseguiEferma("ciao", 1000, 5000);
