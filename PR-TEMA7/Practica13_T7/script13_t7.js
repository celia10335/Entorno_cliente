function drag_and_drop() {
    let arrastrable = document.getElementsByClassName('origen')[0];
    let destino = document.getElementsByClassName('destino')[0];

    arrastrable.addEventListener('dragstart', () => {
        // arrastrable.style.height = '300px';
        arrastrable.classList.add('translucido');
    });

    arrastrable.addEventListener('dragstop', () => {
        arrastrable.classList.add('opaco');
    });

}