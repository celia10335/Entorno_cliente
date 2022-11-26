let filas;
let columnas;
let grafo = "MINA";


function recogeFilas(){
    return prompt("Introduce el número de filas");
}

function recogeColumnas(){
    return prompt("Introduce el número de columnas");
}

function representarMina(grafo){
    return grafo;
}

function recogeDatos(){
    filas = recogeFilas();
    columnas = recogeColumnas();
    valorMina = representarMina();
}


function Buscaminas(tablero, filas, columnas, minas, valorMina){

    this.tablero = tablero;
    this.filas = filas;
    this.columnas = columnas;
    this.minas = minas;
    this.valorMina = valorMina;

    
    function nMinasPos(posX, posY){

        if(this.tablero[posY][posX] == this.valorMina){
            return -1;
        }
        else{
            return this.tablero[posY][posX];
        }
    }


    function colocaRelleno(){
        
    }

}