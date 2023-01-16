function cuentaPalabras() {
  // Recogemos una colección con todos los párrafos para poder trabajar con ellos de forma separada
  let parrafos = document.getElementsByTagName('p');

  // Por cada párrafo, hacemos lo siguiente:
  // - Obtener su contenido en un objeto que sea una cadena de caracteres, esto se consigue con el método innerText.

  let contenido = parrafos[0].innerText;

  // - Eliminar espacios al principio y al final del párrafo, con el método trim().
  let sinEspacios = contenido.trim();

  // - Depurar los espacios, eliminando espacios múltiples si los hubiera; usamos, para ello, el método replace(a,b).
  let cadena = sinEspacios.replaceAll(/[\s]{2,}/, ' ');

  // - Contamos los espacios que hay en la cadena, con ayuda de un bucle for.
  let cuentaEspacios = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == ' ') {
      cuentaEspacios++;
    }
  }

  console.log(cuentaEspacios);
}
