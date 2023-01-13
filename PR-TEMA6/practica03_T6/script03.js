function insertaParrafo() {
  let posicion = prompt('Indique la posición del párrafo');

  while (posicion < 0 || posicion > 8) {
    posicion = prompt(
      'El número debe estar comprendido entre 0 y 8, incluidos; escriba otro'
    );
  }

  let texto = prompt('Escriba el texto');

  let padre = document.getElementById('padre');

  let coleccionParrafos = document.getElementsByTagName('li');

  let nuevoParrafo = document.createElement('li');
  nuevoParrafo.textContent = texto;
  padre.insertBefore(nuevoParrafo, coleccionParrafos.item(posicion));
}
