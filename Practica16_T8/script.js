function contarVisitas() {
  let botonAceptar = document.getElementById('aceptar');
  let botonCancelar = document.getElementById('cancelar');
  let botonCerrar = document.getElementById('cerrar');
  let info = document.getElementById('info');

  let visitas = 0;

  botonAceptar.addEventListener('click', () => {
    visitas++;
    document.cookie = `visitas=${visitas}`;

    let [nombre, valor] = document.cookie.split('=');
    info.textContent = `Ya nos has visitado ${valor} veces`;

    botonCerrar.innerHTML = '<button>Cerrar sesión</button>';
  });

  botonCerrar.addEventListener('click', () => {
    visitas = 0;
    info.textContent = '';
  });

  botonCancelar.addEventListener('click', () => {
    info.textContent = 'Lamentándolo mucho, la página no puede funcionar.';
  });
}
