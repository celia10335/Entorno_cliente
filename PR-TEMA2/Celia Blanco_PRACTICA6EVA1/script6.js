let numObtenido;
let intento;
let numIntentos;
let jugar_otra;

do {
  numObtenido = parseInt(Math.random() * 1000);
  intento = prompt("Adivina qué número estoy pensando");
  numIntentos = 1;


  // Bucle al que entra el programa cuando el número no es el buscado
  do {
    if (isNaN(intento) || intento > 1000 || intento < 0) {
      intento = prompt(
        "El valor introducido no es correcto. Introduce un número del 1 al 1000"
      );
    } else if (intento > numObtenido) {
      intento = prompt("¡Fallaste! El número secreto es menor");
      numIntentos++;
    } else if (intento < numObtenido) {
      intento = prompt("¡Fallaste! El número secreto es mayor");
      numIntentos++;
    }
  } while ((intento != numObtenido) && (intento != null));



  // Condición de pulsar "Aceptar" o "Cancelar" para interrumpir el juego
  if (intento == null) {
    alert("Se ha cancelado el juego");

  } else {
    alert("¡HAS ACERTADO! El número era el " + numObtenido + ". Has usado " + numIntentos + " intentos");
    jugar_otra = confirm("¿Jugamos de nuevo?");
  }

} while ((jugar_otra == true) && (intento != null));
