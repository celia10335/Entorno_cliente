function soloLee(){
    let boton = document.querySelector("button");
    let entrada = document.querySelector("input");

    entrada.toggleAttribute("readonly");
    console.log(entrada.getAttribute("readonly"));
    

    if (entrada.getAttribute("readonly") == null) {
        boton.innerHTML = "Sólo lectura";
    }
    
    else{
        boton.innerHTML = "Lectura y escritura";
    }
}