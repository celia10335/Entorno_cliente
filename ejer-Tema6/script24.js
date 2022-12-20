function contarNodos() {
  let seccion = document.getElementById('s1');
  let arrayNodos = seccion.childNodes;
  console.log('Número de nodos: ' + arrayNodos.length);
}

function contarElementos() {
  let seccion = document.getElementById('s1');
  let arrayElementos = seccion.children;
  console.log('Número de elementos: ' + arrayElementos.length);
}

function primerElemento(id) {
  let padre = document.getElementById(id);
  let el1 = padre.firstElementChild;
  console.log(
    'El primer elemento hijo de ' + padre.nodeName + ' es ' + el1.nodeName
  );
}
function nombresElementosHijos(id) {
  let padre = document.getElementById(id);
  let arrayElementos = padre.children;
  console.log('Elementos hijos de ' + padre.nodeName + ':\n');
  for (let hijo of arrayElementos) {
    console.log(hijo.nodeName + '\n');
  }
}

function hermanoAdyacente(id_padre) {
  let padre = document.getElementById(id_padre);
  let el1 = padre.firstElementChild;
  let hermano = el1.nextElementSibling;
  console.log(
    'El hermano adyacente del primer hijo de ' +
      padre.nodeName +
      ' es ' +
      hermano.nodeName
  );
}
