function scrollHastaAbajo() {
    // Capturo el body de la página, ya que lo voy a necesitar para añadirle "hijos" (el botón, por ejemplo).
    let capa = document.getElementsByTagName('body')[0];
    // Creo un botón que aparecerá cuando haga scroll hasta abajo, lo llamo "postizo".
    let postizo = document.createElement('button');
    postizo.innerHTML = 'Cerrar';
    // De manera opcional, voy a crear otro elemento, un pequeño texto, que va a aparecer al hacer clic en el botón, y que informa de que los elementos desaparecerán pasados unos segundos.
    let caption = document.createElement('p');
    caption.textContent = "Este botón desaparecerá en 2 segundos";

    //El elemento protagonista es un div al que llamo "ventanita", y que es el que va a disparar los eventos.
    let ventanita = document.getElementById('cajaTexto');

    // El "listener" scroll hace aparecer los eventos según se avanza en el documento con el scroll. Al llegar a una posición "scrollTop" superior a 700, respecto a la primera línea del div, aparecerá el botón (se lo cuelgo como hijo al "body" con "appendChild").
    // Previamente, he medido el scroll con "console.log(ventanita.scrollTop + 'px')" y he obtenido 700px.
    ventanita.addEventListener("scroll", () => {
        if (ventanita.scrollTop > 700) {
            capa.appendChild(postizo);
        }

    })

    // Al hacer clic sobre el botón, los distintos elementos pasan su clase a "oculto", que tiene la propiedad "disply: none", haciendo que dejen de mostrarse en pantalla.
    postizo.addEventListener("click", () => {
        ventanita.classList.add("oculto");
        capa.appendChild(caption);
        setTimeout(function () {
            postizo.classList.add("oculto");
            caption.classList.add('oculto');
        }, 2000)
    })

}