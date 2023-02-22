function contarVisitas() {
  //Capturo los elementos con los que va a interactuar el usuario: botones de aceptar, cerrar sesión y cancelar. También capturo el cuadro de información, que se mostrará sólo al principio.
  let botonAceptar = document.getElementById('aceptar');
  let botonCancelar = document.getElementById('cancelar');
  let botonCerrar = document.getElementById('cerrar');
  let cuadro = document.getElementById('cuadro');
  // Capturo el elemento #info que mostrará el mensaje correspondiente cuando el usuario pulse los botones.
  let info = document.getElementById('info');

  // Al pulsar el botón "Aceptar", se crea una cookie que almacena el valor de "visitas". Al mismo tiempo, este valor se incrementa en 1 cada vez que se pulse el botón.
  botonAceptar.addEventListener('click', () => {
    document.cookie = 'visitas=' + 2;
    cuadro.innerHTML = '';

    info.textContent = 'Ya nos has visitado 1 vez';

    // Sólo al pulsar el botón "Aceptar", aparece el botón "Cerrar sesión". Lo muestro con el método "innerHTML".
    botonCerrar.innerHTML = '<button>Cerrar sesión</button>';
  });

  // Con el método split, extraigo el valor almacenado en la cookie, ya que lo necesito para mostrar el mensaje de información.
  let [nombre, valor] = document.cookie.split('=');

  console.log(valor);

  if (valor >= 1) {
    info.textContent = `Ya nos has visitado ${valor} veces`;
    botonCerrar.innerHTML = '<button>Cerrar sesión</button>';
  }

  valor++;
  document.cookie = `visitas=${valor}`;

  // Al pulsar el botón "Cerrar", las visitas se inicializan a cero. El botón desaparece y el mensaje de información también.
  botonCerrar.addEventListener('click', () => {
    document.cookie = 'visitas = ' + 0;
    info.textContent = '';
    botonCerrar.innerHTML = '';
  });

  // Al pulsar el botón "Cancelar", se elimina la cookie, forzando su caducidad en una fecha del pasado.
  // El botón "Cerrar", si estuviera visible, desaparece. Las visitas se inicializan a cero. Se muestra el mensaje de información correspondiente.
  botonCancelar.addEventListener('click', () => {
    info.textContent = 'Lamentándolo mucho, la página no puede funcionar.';
    botonCerrar.innerHTML = '';
    document.cookie =
      'visitas=' + 0 + '; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  });
}
