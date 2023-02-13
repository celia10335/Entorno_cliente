function prometiendo(t) {

  let tiempo = t;
  let p = document.getElementById('p');

  let cuentaAtras = setInterval(function () {
    tiempo--;
    p.innerHTML = tiempo;
  }, 1000);


  function interrumpir() {
    clearInterval(cuentaAtras);
    p.innerHTML = "Se ha pulsado el botón";
  }
  let promesa = new Promise(function (resuelto, rechazado) {
    if (tiempo == 0) {
      resuelto("Tiempo concluido");
    }
    else {
      rechazado("Tiempo interrumpido");
    }
  }
  );

  promesa.then((respuesta) => {
    p.innerHTML = respuesta;
  }).catch((mensajeError) => {
    p.innerHTML = mensajeError;
  });
}


