function cambiaEstilo() {
  let parrafos = document.getElementsByTagName('p');
  for (let e of parrafos) {
    e.classList.add('fondoVioleta');
    e.classList.add('letraGrande');
  }
}

function resetea() {
  let parrafos = document.getElementsByTagName('p');
  for (let e of parrafos) {
    e.classList.remove('fondoVioleta', 'letraGrande');
  }
}
