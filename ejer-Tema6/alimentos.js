function cuentaLegumbres() {
  let legumbres = document.getElementsByClassName('legumbre');
  console.log(legumbres[1].innerHTML);
}

// Ejercicio 13: muestra por consola el texto "Lentejas" con una sola línea de código
function muestraAlimento(tipo) {
  console.log(document.getElementsByClassName(tipo)[1].innerHTML);
}

// Ejercicio 14: obtener el conjunto de elementos "li" y recorrerlo de manera que imprima cada elemento en formato "clase-->valor"
function obtenerAtributos() {
  let lista = document.querySelectorAll('li');
  for (li of lista) {
    console.log(li.getAttribute('class') + ' --> ' + li.innerHTML);
  }
}

// Ejercicio 15: cambia el valor de todos los atributos class cuyo valor sea "verdura" a "hortaliza"
function alterarAtributo() {
  let lista = document.querySelectorAll('li');
  for (li of lista) {
    if (li.getAttribute('class') == 'verdura')
      li.setAttribute('class', 'hortaliza');
  }
}

// Elercicio 16: elimina todos los atributos class con el valor "carne"
function eliminarAtributo() {
  let lista = document.getElementsByTagName('li');
  for (li of lista) {
    if (li.getAttribute('class') == 'carne') li.removeAttribute('class');
  }
}

// Ejercicio 21: cambiar el color de los elementos según su clase o su contenido
function cambiaColorTexto() {
  let lista = document.getElementsByTagName('li');
  for (li of lista) {
    if (li.getAttribute('class') == 'carne') {
      li.setAttribute('style', 'color:red');
    } else if (li.getAttribute('class') == 'verdura') {
      li.style.color = 'green';
    } else if (li.getAttribute('class') == 'legumbre') {
      li.style.color = 'darkorange';
    }

    if (li.innerHTML == 'Remolacha' || li.innerHTML == 'Tomates') {
      li.style.fontWeight = 800;
    }
  }
}
