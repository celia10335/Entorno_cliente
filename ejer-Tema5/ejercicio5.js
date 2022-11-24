function Cometa(diametro, temperatura, nombre){
    this.diametro = diametro;
    this.temperatura = temperatura;
    this.nombre = nombre;

    this.getNombre = function(){return this.nombre};
}

Cometa.prototype.def = function(){
    return "Un cometa es un cuerpo celeste del sistema solar de pequeñas dimensiones que, cuando se acerca al Sol, deja tras de sí una cola luminosa de miles de kilómetros.";
}

Cometa.prototype.getRadio = function(){
    return this.diametro/2;
}

Cometa.prototype.getTemp = function(){
    return this.temperatura*1.8 + 32;
}


function crearCometa() {
let unCometa = new Cometa(11, 190, "Halley");
let dosCometa = new Cometa(5, 230, "Neowise");
let tresCometa = new Cometa(4.2, 85, "Kohouotek");

document.getElementById("listado").innerHTML = dosCometa.def();

document.getElementById("textoBody").innerHTML += "<br>El radio del cometa "+unCometa.getNombre()+" es "+unCometa.getRadio()+" km.";
document.getElementById("textoBody").innerHTML += "<br>La temperatura del cometa "+unCometa.getNombre()+" en ºFarenheit es "+unCometa.getTemp()+"<br>";

document.getElementById("textoBody").innerHTML += "<br>El radio del cometa "+dosCometa.getNombre()+" es "+dosCometa.getRadio()+" km.";
document.getElementById("textoBody").innerHTML += "<br>La temperatura del cometa "+dosCometa.getNombre()+" en ºFarenheit es "+dosCometa.getTemp()+"<br>";

document.getElementById("textoBody").innerHTML += "<br>El radio del cometa "+tresCometa.getNombre()+" es "+tresCometa.getRadio()+" km.";
document.getElementById("textoBody").innerHTML += "<br>La temperatura del cometa "+tresCometa.getNombre()+" en ºFarenheit es "+tresCometa.getTemp()+"<br>";
}