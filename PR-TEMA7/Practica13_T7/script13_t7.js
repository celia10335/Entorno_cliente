function drag_and_drop() {

    // Tengo dos div, uno con la clase "origen" y otro con clase "destino". Los capturo a ambos en sus respectivas variables, "arrastrable" y "destino", con el método "querySelector".
    // En el HTML he tenido que añadir el atributo "draggable" al elemento que se va a arrastrar.

    let arrastrable = document.getElementsByClassName('origen')[0];
    let destino = document.getElementsByClassName('destino')[0];


    // Asigno un escuchador para el evento "dragstart" al elemento que se va a arrastrar. El enunciado pide que el elemento arrastrable adquiera opacidad del 50%, esto lo consigo añadiéndole una clase en la que defino "opacity: 0.5;" (ver archivo CSS).
    arrastrable.addEventListener('dragstart', () => {
        arrastrable.classList.add('translucido');
    });

    // Otro de los requisitos es que, al colocar el elemento arrastrable dentro del área del elemento destino, éste cambie su color a rojo.
    // Lo consigo con el evento "dragover". Por defecto, los efectos asignados a este tipo de evento permanecen aunque deje de producirse el evento. Para poder añadirle más eventos (por ejemplo, que pase algo al soltar el elemento), es necesario eliminar el comportamiento por defecto (método "preventDefault").
    destino.addEventListener('dragover', (ev) => {
        ev.preventDefault();
        destino.style.backgroundColor = 'rgb(255,0,0)';
    });


    // Por último, el elemento destino, al recibir la caja arrastrable, debe cambiar de color a amarillo y el mensaje que lleva en su interior. Al mismo tiempo, hay que hacer que desaparezca el elemento origen.
    // Estos cambios sucederán cuando se produzca el evento "drop" (soltar), si previamente hemos desactivado el comportamiento por defecto de "dragover".
    // Este evento se tiene que asignar al elemento destino.
    // Los cambios los realizo simplemente cambiando el atributo style del div destino, y dentro de él, el atributo backgroundColor. Para que muestre otro texto, altero el contenido de la etiqueta con "innerHTML", y para que el elemento arrastrado desaparezca, le asigno una clase que tiene como propiedad opacidad cero. Otra forma de hacerlo es apartando el div "origen" del DOM con el método "removeChild", pero me parece más sencillo y versátil manipular las clases.
    destino.addEventListener('drop', () => {
        destino.style.backgroundColor = 'rgb(245,233,30)';
        destino.innerHTML = '<p>¡Lo has logrado!</p>';
        arrastrable.classList.add('opaco');
    })


}