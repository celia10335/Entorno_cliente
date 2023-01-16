function insertaParrafo() {
  // Recogemos la posición especificada por el usuario
  let posicion = prompt('Indique la posición del párrafo');

  if (posicion != null) {
    // Comprobamos que esa posición existe, es decir, está comprendida entre 0 y 8 (9 elementos)
    while (posicion < 0 || posicion > 8) {
      posicion = prompt(
        'El número debe estar comprendido entre 0 y 8, incluidos; escriba otro'
      );
    }

    // Recogemos el texto que quiere insertar el usuario
    let texto = prompt('Escriba el texto');

    if (texto != null) {
      // Creo una colección con todos los elementos de la lista (o sea, los que llevan etiqueta <li>)
      let coleccionParrafos = document.getElementsByTagName('li');

      // Designamos el nodo padre a partir del primer elemento de la colección; para ello, usamos el método 'parentNode'
      let padre = coleccionParrafos.item(0).parentNode;

      // Creamos el elemento que se insertará, y lo rellenamos con el texto introducido antes
      let nuevoParrafo = document.createElement('li');
      nuevoParrafo.innerHTML = '<strong>' + texto + '</strong>';

      // Usando el método 'insertBefore', el nuevo párrafo se insertará justo antes del elemento que ocupa la posición escogida por el usuario
      padre.insertBefore(nuevoParrafo, coleccionParrafos.item(posicion));

      console.log(padre);
    }
  }
}
