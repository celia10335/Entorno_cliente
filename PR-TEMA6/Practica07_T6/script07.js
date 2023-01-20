function temporizador(minutos, segundos) {

    // Condiciones de ajuste para valores incorrectos. En el caso de que no se introduzca nada en los minutos, se inicializará a 0.
    while (isNaN(minutos) || (minutos < 0)) {
        minutos = prompt("Debe introducir un formato válido para los minutos");
    }
    if (minutos == "") minutos = 0;

    while (isNaN(segundos) || (segundos < 0)) {
        segundos = prompt("Debe introducir un formato válido para los segundos");
    }
    // En el caso de que no se introduzca nada en los segundos, se inicializa a 1.
    if (segundos == "") segundos = 1;

    // Fracciono los datos recogidos para transformarlos en minutos y segundos. Al mismo tiempo, tengo que transformar los valores en enteros sin decimales.
    let min = parseInt(minutos) + parseInt((segundos / 60) | 0);
    let seg = parseInt((segundos % 60) | 0);

    // Inicialmente, el elemento con el id 'tempo' mostrará los valores introducidos por el usuario.
    let texto = document.getElementById('tempo');
    texto.innerHTML = "Cuenta atrás<br> " + min + " : " + seg;

    function timer() {

        // Al llegar a 0 los segundos, si aún quedan minutos, el contador de segundos se inicializa en 59.
        if ((seg == 0) && (min > 0)) {
            seg = 60;
            min--;
        }

        // Cada segundo, disminuye en 1 el valor almacenado en "seg".
        seg--;

        // Lo que se muestra por pantalla se va actualizando cada segundo.
        texto.innerHTML = "Cuenta atrás<br> " + min + " : " + seg;

        // Si se llega al momento en que los segundos y los minutos valen 0, sucederá lo siguiente:
        if ((seg == 0) && (min == 0)) {
            // Aparece el GIF
            document.getElementById("gif").setAttribute("src", 'https://giphy.com/embed/IRFQYGCokErS0');
            // El texto cambia.
            texto.innerHTML = "¡FIN DE LA CUENTA ATRÁS!";
            // Finaliza la ejecución de la función con clearInterval.
            clearInterval(cuentaAtras);
        }
    }

    // Con un setInterval, se lanza la función antes definida en un intervalo de 1 segundo.
    // Para poder manejar la función setInterval, la recogemos en una variable que pasaremos como argumento a clearInterval.
    const cuentaAtras = setInterval(timer, 1000);
}
