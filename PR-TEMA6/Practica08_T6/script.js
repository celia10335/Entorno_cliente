let i = 1;

function insertaFila() {
    i++;
    let elemento = document.getElementsByTagName('tbody').item(0);
    let contenido = document.getElementById('texto').value;
    if (contenido == null) {
        contenido = "";
    }
    let filaNueva = document.createElement('tr');
    filaNueva.innerHTML = `<td id="fila${i}">${contenido}</td>
    <td><button onclick="mayusc('fila${i}')">Mayúsculas</button></td>
    <td><button onclick="formato('fila${i}')">Formato chachi</button></td>`;
    elemento.appendChild(filaNueva);
    document.getElementById('texto').value = "";
    document.getElementById('texto').focus();
}

function mayusc(id) {
    document.getElementById(id).classList.toggle('mayusculas');
}

function formato(id) {
    document.getElementById(id).classList.toggle('chachi');
}