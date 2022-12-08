document.getElementById("info").innerHTML = "Agente: " + navigator.userAgent + "<br>";

document.getElementById("info").innerHTML += "¿Está habilitado Java? -> " + navigator.javaEnabled+ "<br>";

document.getElementById("info").innerHTML += "Browser code name is : " + navigator.appCodeName+ "<br>";

function verInfo(){
    document.getElementById("ej3").innerHTML += "Anchura disponible: " + screen.availWidth + "<br>";
    
    document.getElementById("ej3").innerHTML += "Altura disponible: " + screen.availHeight + " px<br>";

    document.getElementById("ej3").innerHTML += "Primera coordenada superior: " + screen.availTop + "<br>";

    document.getElementById("ej3").innerHTML += "Primera coordenada izquierda: " + screen.availLeft + " px<br>";

    document.getElementById("ej3").innerHTML += "Altura completa de pantalla: " + screen.height + " px<br>";

    document.getElementById("ej3").innerHTML += "Anchura completa de pantalla: " + screen.width + " px<br>";

    document.getElementById("ej3").innerHTML += "Orientación de la pantalla: " + screen.orientation.type + "<br>";

    document.getElementById("ej3").innerHTML += "Profundidad de color: " + Math.pow(2, screen.colorDepth) + " bits<br>";
}


function irAGoogle(){
    location.href = "https://www.google.com";
}

function irAMdn(){
    location.assign("https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction");
}