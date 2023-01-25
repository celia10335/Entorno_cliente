function newFondo() {
    // Capturo el elemento "body" por su selector CSS
    let cuerpo = document.querySelector('body');

    // Añado un evento al documento, tal que al tener una tecla presionada (barra espaciadora) y pulsar la otra (tecla R) genere un número aleatorio. Este número se corresponde con el nombre de una imagen (fondo[numero].jpg).
    document.addEventListener("keydown", function (ev1) {
        document.addEventListener("keypress", function (ev2) {
            if ((ev2.code == "KeyR") && (ev1.code == "Space")) {
                let random = parseInt(Math.random() * 9);

                // Le asigno esa imagen como fondo del body, y ajusto el tamaño a "cover" para que ocupe el ancho de la pantalla.
                cuerpo.style.backgroundImage = `url('fondo${random}.jpg')`;
                cuerpo.style.backgroundSize = "cover";
            }

        })

    })

    // Esta es la combinación de teclas que pide el enunciado, pero sólo me lleva a la página una vez. Si quiero cambiar de fondo, debo recargar la página.
    document.addEventListener("keydown", function (ev) {
        if ((ev.code == "F12") && (ev.altKey)) {
            cuerpo.style.backgroundImage = "url('https://source.unsplash.com/random')";
            cuerpo.style.backgroundSize = "cover";
        }


    })

}
