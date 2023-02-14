function prometiendo(t) {
  let p = document.getElementById('p');
  let boton = document.querySelector('button');

  let promesa = new Promise(function (resuelto, rechazado) {
    let cuentaAtras = setInterval(function () {
      t--;
      p.innerHTML = t;
      if (t == 0) {
        clearInterval(cuentaAtras);
        resuelto('Tiempo concluido');
      }
    }, 1000);

    boton.addEventListener('click', () => {
      clearInterval(cuentaAtras);
      rechazado('Se ha interrumpido la cuenta atrás');
    });
  });

  promesa
    .then((respuesta) => {
      p.innerHTML = respuesta;
    })
    .catch((mensajeError) => {
      p.innerHTML = mensajeError;
    });
}

/* let cuentaAtras = setInterval(function () {
  tiempo--;
  p.innerHTML = tiempo;
}, 1000);

function interrumpir() {
  clearInterval(cuentaAtras);
  p.innerHTML = 'Se ha pulsado el botón';
}*/
