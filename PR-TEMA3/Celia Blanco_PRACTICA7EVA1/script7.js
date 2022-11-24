function getLetra(dni) {
  var letra = dni.charAt(8);
  letra = letra.toUpperCase();
  return letra;
}

function getNumero(dni) {
  var numeroDni = dni.substr(0, 8);
  return numeroDni;
}

function checkDni(dni) {
  var numero = getNumero(dni);
  var letra = getLetra(dni);
  var resto = numero % 23;
  var cadenaLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
  var letraResto = cadenaLetras.charAt(resto);

  letra == letraResto
    ? alert("El DNI es correcto")
    : alert("La letra del DNI no es correcta");
}

let correcto = false;

do {
  var dni = prompt("Introduzca su DNI");

  if (dni == null || dni == 0) {
    alert("Se ha cancelado el programa");
    correcto = true;

  } else {
    if (dni.length != 9) {
      alert("No es correcto, el DNI debe tener exactamente 9 dígitos");

    } else if (isNaN(getNumero(dni))) {
      alert("No es un número");

    } else if (!isNaN(getLetra(dni))) {
      alert("El último dígito debe ser una letra");
      
    } else {
      correcto = true;
      checkDni(dni);
    }
  }
} while (correcto == false);
