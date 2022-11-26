function getN_filas(){
    do{
        filas = Number(prompt("¿cuántas filas?"));
    
        if (filas > 20 || filas < 2){
          alert("Ese valor no es válido, introduce un número entero entre 2 y 20");
        }
    
      } while (filas > 20 || filas < 2); 
      
      return filas;
}


function getN_columnas(){
    
  let columnas = Number(prompt("¿cuántas columnas?"));
  while (columnas > 20 || columnas < 2) {
    columnas = Number(prompt("Ese valor no es válido, introduce un número entero entre 2 y 20"));
  }
  return columnas;
}

function representarMina(grafo){
    return grafo;
}

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


function iniciaTablero(filas, columnas){
    let tablero = [];
    for (var i = 0; i < filas; i++) {
      tablero[i] = [];
      for (j = 0; j < columnas; j++) {
        tablero[i][j] = 0;
      }
    }
  
    return tablero;
}


// Defino la clase Buscaminas con todos sus atributos y métodos
function Buscaminas(tablero, filas, columnas, minas, valorMina){

    // Atributos para el constructor de objetos
    this.tablero = tablero;
    this.filas = filas;
    this.columnas = columnas;
    this.minas = minas;
    this.valorMina = valorMina;

    
    // Métodos
    this.nMinasPos = function (posX, posY){

        if(this.tablero[posY][posX] == this.valorMina){
            return -1;
        }
        else{
            return this.tablero[posY][posX];
        }
    }


    this.colocaRelleno = function (){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
          
              // Busca una casilla con mina
              if (this.tablero[i][j] == this.valorMina) {
          
                // Recorre los alrededores con un bucle doble, tomando los valores -1, 0, 1.
                for (let K = -1; K < 2; K++) {
                  for (let L = -1; L < 2; L++) {
          
                    // Condición para comprobar si existen casillas alrededor (caso de casillas en esquina o borde)
                    // Condición de que no se sale del rango
                    if (i + K >= 0 && j + L >= 0 && i + K < this.filas && j + L < this.columnas) {
          
                      // Sin esta condición, sobreescribiría la casilla que lleva la mina
                      if (this.tablero[i + K][j + L] != this.valorMina) {
          
                        // Incrementa en 1 el valor almacenado en esa casilla
                        this.tablero[i + K][j + L]++;
                      }
                    }
                  }
                }
              }
            }
          }
    }


    this.colocaMinas = function (){
        for (var i = 0; i < this.minas; i++) {
            // Obtenemos X y Y para cada mina. Con un do while, comprobamos si esa casilla está ocupada para generar otro par de coordenadas. Así hasta que encuentre una casilla vacía.
            let X = 0;
            let Y = 0;
            do {
              X = parseInt(Math.random() * this.tablero.length);
              // Con "tablero.length" accedemos al número de filas del array
              Y = parseInt(parseInt(Math.random() * this.tablero[0].length));
              // Para referirnos a las columnas del array, tomamos un elemento cualquiera del array (preferiblemente el primero) y obtenemos su longitud
            } while (this.tablero[X][Y] == this.valorMina);
        
            // Con las coordenadas obtenidas, colocamos una mina en el array.
            this.tablero[X][Y] = this.valorMina;
          }
    }


    this.dibujaTableroWeb = function (){
        
         document.write("<table>");

        for (let i = 0; i < this.filas; i++) {
            document.write("<tr>");

            for (let j = 0; j < this.columnas; j++) {
                document.write("<td>" + this.tablero[i][j] + "</td>");
            }

        document.write("</tr>");
        }

        document.write("</table>");
    }

}



// Función que pondrá todo en marcha. Es llamada desde el HTML.
function instanciaBuscaminas(){
    // rellenamos las variables con la información proporcionada por el usuario, usando para ello funciones (definidas al comienzo del archivo)
    filas = getN_filas();
    columnas = getN_columnas();
    valorMina = representarMina("mina");
    minas = getN_minas(filas, columnas);
    tablero = iniciaTablero(filas, columnas);
    let posX, posY;

    // Instancio un buscaminas
    let buscaminas = new Buscaminas(tablero, filas, columnas, minas, valorMina);

    // llamada a métodos
    buscaminas.colocaRelleno();
    buscaminas.colocaMinas();
    buscaminas.dibujaTableroWeb();

    do{
        posX = prompt("Vamos a ver cuántas minas hay alrededor de una casilla, introduzca coordenada X")-1;
        posY = prompt("...y coordenada Y")-1;
      
        if (posX>buscaminas.tablero[0].length || posY>buscaminas.tablero.length){
          alert("Te has salido del tablero, introduce un par de coordenadas válido");
        } else if (posX < 0 || posY < 0) {
          alert("Las coordenadas deben tener un valor superior a cero");
        }
      
      } while (posX>buscaminas.tablero[0].length || posY>buscaminas.tablero.length || posX < 0 || posY < 0);
      
        let cuentaMinas = buscaminas.nMinasPos(posX,posY);
        if (cuentaMinas < 0){
          alert("¡Has encontrado una mina!");
      
        }else {
          alert("Alrededor de la casilla " + Number(posX+1) + ", "+ Number(posY+1) + " hay " + cuentaMinas + " minas");
        }
}