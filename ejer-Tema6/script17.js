function deshabilitarse(){
    let botonInutil = document.querySelector("button");
    botonInutil.toggleAttribute("disabled");
}

function activaDesactiva(){
    let botones = document.querySelectorAll("button");

    if (botones[0].toggleAttribute("disabled")) {
        botones[0].toggleAttribute("enabled")
    }
    else if (botones[0].toggleAttribute("enabled")) {
        botones[0].toggleAttribute("disabled");
    }
    
}