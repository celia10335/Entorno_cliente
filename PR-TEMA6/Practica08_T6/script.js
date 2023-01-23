function insertaFila() {
    let elemento = document.getElementsByTagName('tbody').item(0);
    let contenido = document.getElementById('texto').value;
    if (contenido == null) {
        contenido = "";
    }
    let filaNueva = document.createElement('tr');
    filaNueva.innerHTML = `<td>${contenido}</td>
    <td><button onclick="mayusc()">Mayúsculas</button></td>
    <td><button>Formato chachi</button></td>`;
    elemento.appendChild(filaNueva);
    document.getElementById('texto').value = "";
    document.getElementById('texto').focus();
}

function mayusc() {
    let celda = document.querySelectorAll('td');
    console.log(celda);
}