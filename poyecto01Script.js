// Función para establecer el número de filas
function getN_filas(){
let filas;
  do{
    filas = Number(prompt("¿cuántas filas?"));

    if (filas > 20 || filas < 2){
      alert("Ese valor no es válido, introduce un número entero entre 2 y 20");
    }

  } while (filas > 20 || filas < 2); 
  
  return filas;
}



// Función que establece el número de columnas
function getN_columnas(){

  let columnas = Number(prompt("¿cuántas columnas?"));
  while (columnas > 20 || columnas < 2) {
    columnas = Number(prompt("Ese valor no es válido, introduce un número entero entre 2 y 20"));
  }
  return columnas;
}



// Función que determina el número de minas, dentro de unos valores límite
function getN_minas(filas, columnas){

  let minas = 0;

  do {
    minas = parseInt(prompt("Introduce número de minas"));

    if (minas > 2*(filas*columnas)/3 || minas <= (filas*columnas)/3){
      alert("Ese valor no es válido, debe haber un número de minas superior a un tercio de las casillas pero no mayor a dos tercios.");
    }

  } while (minas > 2*(filas*columnas)/3 || minas <= (filas*columnas)/3);

  return minas;
}



// Función que crea un tablero vacío, con todas las casillas igual a cero. Será la base para colocar las minas más adelante
function iniciaTablero(filas, columnas) {

  let tablero = [];
  for (var i = 0; i < filas; i++) {
    tablero[i] = [];
    for (j = 0; j < columnas; j++) {
      tablero[i][j] = 0;
    }
  }

  return tablero;
}




// Función que coloca las minas de forma aleatoria. No debe repetirse ningún valor, para que no haya más de una mina en una casilla.
function colocaMinas(tablero, minas) {
  for (var i = 0; i < minas; i++) {
    // Obtenemos X y Y para cada mina. Con un do while, comprobamos si esa casilla está ocupada para generar otro par de coordenadas. Así hasta que encuentre una casilla vacía.
    let X = 0;
    let Y = 0;
    do {
      X = parseInt(Math.random() * tablero.length);
      // Con "tablero.length" accedemos al número de filas del array
      Y = parseInt(parseInt(Math.random() * tablero[0].length));
      // Para referirnos a las columnas del array, tomamos un elemento cualquiera del array (preferiblemente el primero) y obtenemos su longitud
    } while (tablero[X][Y] == "\u{1F4A3}");

    // Con las coordenadas obtenidas, colocamos una mina en el array.
    tablero[X][Y] = "\u{1F4A3}";
  }
}





// Función que hace un recuento de las minas que hay alrededor de cada casilla, y lo escribe en esa casilla.
// La variable "valorMina" contiene el String almacenado en la casilla si hay una mina, ya sea una "x", la palabra "mina", el código de un icono de bomba "\u{1F4A3}", o cualquier otra cosa.
function colocaRelleno(tablero, valorMina){

let filas = tablero.length;
let columnas = tablero[0].length;

for (let i = 0; i < filas; i++) {
  for (let j = 0; j < columnas; j++) {

    // Busca una casilla con mina
    if (tablero[i][j] == valorMina) {

      // Recorre los alrededores con un bucle doble, tomando los valores -1, 0, 1.
      for (let K = -1; K < 2; K++) {
        for (let L = -1; L < 2; L++) {

          // Condición para comprobar si existen casillas alrededor (caso de casillas en esquina o borde)
          // Condición de que no se sale del rango
          if (i + K >= 0 && j + L >= 0 && i + K < filas && j + L < columnas) {

            // Sin esta condición, sobreescribiría la casilla que lleva la mina
            if (tablero[i + K][j + L] != valorMina) {

              // Incrementa en 1 el valor almacenado en esa casilla
              tablero[i + K][j + L]++;
            }
          }
        }
      }
    }
  }
}

}




// Función que informa de cuántas minas rodean una casilla dada. Si en esa casilla hay una mina, devolverá un valor negativo.
function cuantasMinasHay(tablero, posX, posY, valorMina){

  if (tablero[posY][posX] == valorMina){
    return -1;

  } else {
    return tablero[posY][posX];
  }
}





// Función que dibuja en el tablero toda la información necesaria para el juego: las minas y el recuento de minas alrededor de una casilla
function dibujaTablero(tablero){
  let filas = tablero.length;
  let columnas = tablero[0].length;

  document.write("<table>");

  for (let i = 0; i < filas; i++) {
   document.write("<tr>");

      for (let j = 0; j < columnas; j++) {
        document.write("<td>" + tablero[i][j] + "</td>");
      }

    document.write("</tr>");
  }

document.write("</table>");

}






// Función que llama a todas las anteriores en el orden correcto para generar el juego
function buscaminas(){

  let filas = getN_filas();
  let columnas = getN_columnas();
  let minas = getN_minas(filas, columnas);
  //grafoMina hace referencia a cómo se verá representada una mina en el tablero
  let grafoMina = "\u{1F4A3}";
  let tablero = iniciaTablero(filas, columnas);

  colocaMinas(tablero, minas);
  colocaRelleno(tablero, grafoMina);
  dibujaTablero(tablero);

// Las coordenadas que introduce el usuario se entienden referidas a un sistema de referencia que empieza en 1,1
do{
  posX = prompt("Vamos a ver cuántas minas hay alrededor de una casilla, introduzca coordenada X")-1;
  posY = prompt("...y coordenada Y")-1;

  if (posX>tablero[0].length || posY>tablero.length){
    alert("Te has salido del tablero, introduce un par de coordenadas válido");
  } else if (posX < 0 || posY < 0) {
    alert("Las coordenadas deben tener un valor superior a cero");
  }

} while (posX>tablero[0].length || posY>tablero.length || posX < 0 || posY < 0);

  let cuentaMinas = cuantasMinasHay(tablero, posX, posY, grafoMina);
  if (cuentaMinas < 0){
    alert("¡Has encontrado una mina!");

  }else {
    alert("Alrededor de la casilla " + Number(posX+1) + ", "+ Number(posY+1) + " hay " + cuentaMinas + " minas");
  }

}


