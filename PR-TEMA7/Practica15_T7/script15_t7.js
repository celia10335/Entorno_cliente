function prometiendo(t) {
  // Capturo el párrafo que va a mostrar el mensaje
  let p = document.getElementById('p');

  // Capturo el botón con el que se va a interrumpir la cuenta atrás (utilizo querySelector porque es lo más rápido cuando sólo se tiene un elemento de ese tipo)
  let boton = document.querySelector('button');

  // Declaro la promesa. La función "resuelto" se activa cuando el temporizador llega a cero; en caso contrario, la función "rechazado".
  let promesa = new Promise(function (resuelto, rechazado) {
    // Declaro un setInterval que comienza a descontar el tiempo introducido por el usuario cada 1000 ms.
    let cuentaAtras = setInterval(function () {
      // En "p" muestro el valor de "t", simulando una cuenta atrás.
      p.innerHTML = t;
      t--;

      // Cuando "t" es igual a cero se anula la función "setInterval" y se llama a "resuelto", que va a pasar el mensaje a mostrar.
      if (t == 0) {
        clearInterval(cuentaAtras);
        resuelto('Tiempo concluido');
      }
    }, 1000);

    // En caso de que se pulse el botón, con un "event listener" que captura el clic, se anula la función "setInterval" y se activa la función "rechazado", que va a llevar como parámetro el mensaje correspondiente.
    boton.addEventListener('click', () => {
      clearInterval(cuentaAtras);
      rechazado('Se ha interrumpido la cuenta atrás');
    });
  });

  // La promesa llama a "resuelto" con el método "then", o a "rechazado" con el método "catch", lanzando un mensaje de error.
  promesa
    .then((respuesta) => {
      p.innerHTML = respuesta;
    })
    .catch((mensajeError) => {
      p.innerHTML = mensajeError;
    });
}
