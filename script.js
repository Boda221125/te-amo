// Función para el contador regresivo
var weddingDate = new Date("2025-11-22T15:00:00").getTime();

var countdown = setInterval(function() {
  var now = new Date().getTime();
  var timeLeft = weddingDate - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-timer").innerHTML = "¡Es el día de la boda!";
  }
}, 1000);

// Función para la música de fondo
var audio = document.getElementById("background-music");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
