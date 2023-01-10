function soloLee() {
  let boton = document.querySelector('button');
  let entrada = document.querySelector('input');

  entrada.toggleAttribute('readonly');
  console.log(entrada.getAttribute('readonly'));

  if (entrada.getAttribute('readonly') == null) {
    boton.innerHTML = 'Sólo lectura';
  } else {
    boton.innerHTML = 'Lectura y escritura';
  }
}

// Ejercicio 20: obtén todos los atributos del elemento input con el formato "El atributo: type tiene como valor: number".
function getInput() {
  let atributosArray = document.getElementsByTagName('input')[0].attributes;
  for (let e of atributosArray) {
    console.log(
      'El atributo: ' + e.name + ' tiene como valor: ' + e.value + '\n'
    );
  }
}
