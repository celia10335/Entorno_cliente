// Recogemos por cuadro de diálogo los parámetros para construir el tablero
let filas = parseInt(prompt("¿cuántas filas?"));
while (filas > 20 || filas < 2) {
  filas = prompt(
    "Ese valor no es válido, introduce un número entero entre 2 y 20"
  );
}
let columnas = parseInt(prompt("¿cuántas columnas?"));
while (columnas > 20 || columnas < 2) {
  filas = prompt(
    "Ese valor no es válido, introduce un número entero entre 2 y 20"
  );
}
let minas = parseInt(prompt("Introduce número de minas"));
while (minas >= (filas * columnas) / 2 || minas < 2) {
  minas = prompt("Ese valor no es válido. Introduce otro");
}

// Generamos un array bidimensional que alojará las minas, con las filas y columnas como argumentos.
// Le damos a todas las casillas el valor 0, porque luego, al recorrer el array buscando minas, le iremos sumando 1 por cada mina que tenga cerca.
function genCasillas(filas, columnas) {
  let arrayCasillas = [];
  for (var i = 0; i < filas; i++) {
    arrayCasillas[i] = [];
    for (j = 0; j < columnas; j++) {
      arrayCasillas[i][j] = 0;
    }
  }

  return arrayCasillas;
}




// Mediante una función, generamos las posiciones de las minas de forma aleatoria. No debe repetirse ningún valor.
// Le pasaremos como argumentos un array bidimensional y el número de minas deseado.
function insertaMinas(arrayCasillas, minas) {
  for (var i = 0; i < minas; i++) {
    // Obtenemos X y Y para cada mina. Con un do while, comprobamos si esa casilla está ocupada para generar otro par de coordenadas. Así hasta que encuentre una casilla vacía.
    let X = 0;
    let Y = 0;
    do {
      X = parseInt(Math.random() * arrayCasillas.length);
      // Con "arrayCasillas.length" accedemos al número de filas del array
      Y = parseInt(parseInt(Math.random() * arrayCasillas[0].length));
      // Para referirnos a las columnas del array, tomamos un elemento cualquiera del array (preferiblemente el primero) y obtenemos su longitud
    } while (arrayCasillas[X][Y] == "\u{1F4A3}");

    // Con las coordenadas obtenidas, colocamos una mina en el array.
    arrayCasillas[X][Y] = "\u{1F4A3}";
  }
}





//Dar pista sobre ubicación de minas
function minasCerca(arrayCasillas, valorMina){
// por comodidad, esta vez almaceno el alcance de las filas y las columnas en un par de variables. La variable "valorMina" contiene el String almacenado en la casilla si hay una mina, ya sea una "x", la palabra "mina", el código de un icono de bomba "\u{1F4A3}", o cualquier otra cosa.
let filas = arrayCasillas.length;
let columnas = arrayCasillas[0].length;

for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {

    // Busca una casilla con mina
    if (arrayCasillas[i][j] == valorMina) {

      // Recorre los alrededores con un bucle doble, tomando los valores -1, 0, 1.
      for (let K = -1; K < 2; K++) {
        for (let L = -1; L < 2; L++) {

          // Condición para comprobar si existen casillas alrededor (caso de casillas en esquina o borde)
          // Condición de que no se sale del rango
          if (i + K >= 0 && j + L >= 0 && i + K < filas && j + L < columnas) {

            // Sin esta condición, sobreescribiría la casilla que lleva la mina
            if (arrayCasillas[i + K][j + L] != valorMina) {

              // Incrementa en 1 el valor almacenado en esa casilla
              arrayCasillas[i + K][j + L]++;
            }
          }
        }
      }
    }
  }
}

}





// Representar gráficamente el tablero, las minas y las pistas de las minas
function dibujaTablero(arrayCasillas){
  let filas = arrayCasillas.length;
  let columnas = arrayCasillas[0].length;


document.write("<table>");

for (let i = 0; i < filas; i++) {
  document.write("<tr>");

  for (let j = 0; j < columnas; j++) {
    document.write("<td>" + arrayCasillas[i][j] + "</td>");
  }

  document.write("</tr>");
}

document.write("</table>");

}






// Prueba de que todo funciona:
let arrayPrueba = genCasillas(filas, columnas);
insertaMinas(arrayPrueba, minas);
minasCerca(arrayPrueba, "\u{1F4A3}");
dibujaTablero(arrayPrueba);
