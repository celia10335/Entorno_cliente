function fibonaci(numero){
    if (numero == 0 || numero == 1 || numero == 2){
        return 1;
    }
    else if (numero == 3){
        return 2;
    }
    else if (numero > 3){
        let valor;
        let n1 = 1;
        let n2 = 2;
        for (let i=4; i<numero; numero++){
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