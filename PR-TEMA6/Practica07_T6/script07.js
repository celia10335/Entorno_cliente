function temporizador() {
    let minutos = prompt("Introducir minutos");
    let segundos = prompt("Introduzca segundos");

    let texto = document.getElementsByTagName('p').item(0);

    let min = parseInt(minutos) + parseInt((segundos / 60) | 0);
    let seg = segundos % 60;

    console.log(min);

    texto.innerHTML = "Minutos: " + min + "<br> Segundos: " + seg;

    function timer() {

        if ((seg == 0) && (min > 0)) {
            seg = 60;
            min--;
        }

        seg--;

        texto.innerHTML = "Minutos: " + min + "<br> Segundos: " + seg;
        if ((seg == 0) && (min == 0)) {
            document.getElementById("gif").setAttribute("src", 'https://giphy.com/embed/IRFQYGCokErS0');
            texto.innerHTML = "";
            clearInterval(cuentaAtras);
        }
    }

    const cuentaAtras = setInterval(timer, 1000);

    // function detener() {
    //     clearInterval(cuentaAtras);
    //     document.getElementById("gif").setAttribute("src", 'https://giphy.com/embed/IRFQYGCokErS0');
    //     texto.innerHTML = "";
    // }

    // setTimeout(detener, tiempo * 1000);

}
