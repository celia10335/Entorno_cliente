function insertar() {
  let nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = 'Soy EL NUEVO';
  let parrafoPosterior = document.querySelectorAll('#principal')[1];
  let capa = parrafoPosterior.parentNode;
  capa.insertBefore(nuevoParrafo, parrafoPosterior);
}
