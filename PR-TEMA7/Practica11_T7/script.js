function cambiaColor() {
    // Capturo el elemento sobre el que se aplican los eventos, en este caso, un div con id "capa"
    let capa = document.getElementById("capa");

    // Los dos siguientes eventos hacen que el elemento capa cambie de color al entrar el cursor en su espacio, y vuelva a su estado original al abandonarlo
    capa.addEventListener("mouseenter", () => {
        capa.style.backgroundColor = "rgb(96,159,86)";
    });

    capa.addEventListener("mouseleave", () => {
        capa.style.backgroundColor = "transparent";
    })

    // Los siguientes eventos cambian el color del elemento al hacer clic. El evento mousedown se refiere a "hacer clic", y tiene un atributo "button" para detectar si el evento está asociado al botón principal del ratón (button = 0) o al botón secundario (button = 2), entre otros.
    capa.addEventListener("mousedown", (e) => {
        if (e.button == 2) {
            capa.style.backgroundColor = "blue";
        }
        else if (e.button == 0) {
            capa.style.backgroundColor = "red";
        }
    })

    // Al levantar el clic del ratón, vuelve a su color anterior (color sin clic)
    capa.addEventListener("mouseup", (e) => {
        if ((e.button == 0) || (e.button == 2)) {
            capa.style.backgroundColor = "rgb(96,159,86)";
        }
    })

    // Este bloque de código desactiva la aparición del menú secundario cuando se hace clic con el botón derecho del ratón.
    capa.addEventListener("contextmenu", (ev) => {
        capa.style.backgroundColor = "blue";
        ev.preventDefault();
    })
}