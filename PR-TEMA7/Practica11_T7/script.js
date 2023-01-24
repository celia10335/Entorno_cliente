function cambiaColor() {
    let capa = document.getElementById("capa");
    capa.addEventListener("mouseenter", () => {
        capa.style.backgroundColor = "rgb(96,159,86)";
    });

    capa.addEventListener("mouseleave", () => {
        capa.style.backgroundColor = "transparent";
    })

    capa.addEventListener("mousedown", () => {
        capa.style.backgroundColor = "red";
    }, false)

    capa.addEventListener("mouseup", () => {
        capa.style.backgroundColor = "rgb(96,159,86)";
    })

    capa.addEventListener("contextmenu", (ev) => {
        capa.style.backgroundColor = "blue";
        ev.preventDefault();
    })
}