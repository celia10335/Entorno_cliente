function fibonaci(posicion){
    if (posicion == 0){
        return 0;
    }

    if (posicion == 1 || posicion == 2){
        return 1;
    }
    else if (posicion > 2){
        let valor;
        let n1 = 1;
        let n2 = 1;

        for (let i=3; i<=posicion; i++){
            valor = n1+n2;
            n1 = valor - n1;
            n2 = valor;
        }
        return valor;
    }
    else {
        return 0;
    }

}


//Prueba de la función
let resultado = fibonaci(10);
document.write(resultado);