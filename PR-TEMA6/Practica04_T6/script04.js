// ------ PRIMERO DEFINO UNA FUNCIÓN QUE CUENTA LAS PALABRAS DE UN SOLO PÁRRAFO, PASÁNDOSELO COMO PARÁMETRO ------------
function cuentaPorParrafo(parrafo) {
  // - Obtener el contenido del párrafo en forma de cadena de caracteres, esto se consigue con el método innerText.
  let contenido = parrafo.innerText;

  // - Eliminar espacios al principio y al final del párrafo, con el método trim().
  let sinEspacios = contenido.trim();

  // - Depurar los espacios, eliminando espacios múltiples si los hubiera; usamos, para ello, el método replaceAll(a,b) y una expresión regular global.
  const reg = /\s{2,}/g;
  let cadena = sinEspacios.replaceAll(reg, ' ');

  // - Contamos los espacios que hay en la cadena, con ayuda de un bucle for.
  let cuentaEspacios = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == ' ') {
      cuentaEspacios++;
    }
  }

  // El número de palabras es igual al número de espacios más uno.
  let palabras = cuentaEspacios + 1;
  return palabras;
}



// ------ DEFINO AHORA LA FUNCIÓN QUE CONTARÁ LAS PALABRAS DE TODO EL TEXTO, APLICANDO LA FUNCIÓN ANTERIOR A CADA PÁRRAFO --------
function cuentaPalabras() {
  // Recogemos una colección con todos los párrafos.
  let parrafos = document.getElementsByTagName('p');

  // Por cada párrafo, contamos las palabras que contiene y se almacenan en la variable "totalPalabras".
  let totalPalab = 0;
  for (let p of parrafos) {
    totalPalab += cuentaPorParrafo(p);
  }

  // Como queremos que esta información se muestre al comienzo de la página, le añado un elemento 'p', usando el método '.insertBefore'.
  let padre = parrafos[0].parentNode;
  let info = document.createElement('p');
  info.innerHTML =
    '<h4><strong>Hay ' +
    totalPalab +
    ' palabras en todo el texto</strong></h4>';
  padre.insertBefore(info, parrafos[0]);
}
