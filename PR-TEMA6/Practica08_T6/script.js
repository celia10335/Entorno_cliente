// Para poder referenciar con el botón a la celda que está en su misma fila, se le asignará un número en el momento de su creación. Este número comienza en 1, por ser el id de la fila de ejemplo, y se irá incrementando en 1 unidad.
let i = 1;

function insertaFila() {
    // Se incrementa el valor del índice de fila
    i++;

    // Almaceno el elemento padre de las filas en la variable "elemento"
    let elemento = document.getElementsByTagName('tbody').item(0);

    // El contenido a insertar en la primera celda de la fila se obtiene con el método "value"
    let contenido = document.getElementById('texto').value;

    // Si no se introduce nada, creará una fila con una celda vacía
    if (contenido == null) {
        contenido = "";
    }

    // Con "createElement", creo el nuevo elemento.
    let filaNueva = document.createElement('tr');

    // Relleno este nuevo elemento con todo lo que contendrá el nodo, que será una primera celda con un id que va cambiando según su índice, y los dos botones de formato, que llevan una función a la que se le pasa por parámetro el id de la primera celda de la fila.
    filaNueva.innerHTML = `<td id="fila${i}">${contenido}</td>
    <td><button onclick="mayusc('fila${i}')">Mayúsculas</button></td>
    <td><button onclick="formato('fila${i}')">Formato chachi</button></td>`;

    // Añado este elemento creado al elemento padre, insertándose en la última posición gracias al método ".appendChild"
    elemento.appendChild(filaNueva);

    // Estas dos últimas instrucciones son para mejorar la usabilidad; la primera línea de código limpia el campo de texto y la segunda hace que siempre tenga el foco para no tener que hacer clic en su interior.
    document.getElementById('texto').value = "";
    document.getElementById('texto').focus();
}

// El método "classList.toggle" añade una clase al elemento o la elimina, según se pulse el botón. Con esta clase, es posible dar un formato concreto al texto, ya sea ponerlo todo en mayúsculas o cambiarle los colores, fuente, tamaño, etc.
// Estas dos funciones seleccionan el elemento por su id y le cambian el formato por medio de la clase.
function mayusc(id) {
    document.getElementById(id).classList.toggle('mayusculas');
}

function formato(id) {
    document.getElementById(id).classList.toggle('chachi');
}