function fibo_Recursivo(posicion){
    if (posicion == 0){
        return 0;
    }
    else if (posicion == 1 || posicion == 2){
        return 1;
    }
    else {
        return fibo_Recursivo(posicion-1)+fibo_Recursivo(posicion-2);
    }
}