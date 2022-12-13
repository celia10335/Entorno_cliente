function cuentaLegumbres(){
    let legumbres = document.getElementsByClassName("legumbre");
console.log(legumbres[1].innerHTML);
}

function obtenerAtributos(){
    let lista = document.querySelectorAll("li");
    for(li of lista){
        console.log(li.getAttribute("class")+ " --> "+li.innerHTML);
    }
}

function alterarAtributo(){
    let lista = document.querySelectorAll("li");
    for(li of lista){
        if (li.getAttribute("class") == "verdura") li.setAttribute("class", "hortaliza");
    }
}

function eliminarAtributo(){
    let lista = document.getElementsByTagName("li");
    for(li of lista){
        if (li.getAttribute("class") == "carne") li.removeAttribute("class");
    }
}

function carneARojo(){
    let lista = document.querySelectorAll("li");
    for(li of lista){
        if (li.getAttribute("class") == null) li.setAttribute("style", "color:red");
    }
}
