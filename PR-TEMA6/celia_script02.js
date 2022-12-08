// En una sola función, la función "irAlFinal", inserto todas las instrucciones a ejecutar

function irAlFinal(){

    // Con la función callback setTimeout, establezco un tiempo a partir del cual se realizará la acción deseada (en este caso, un scroll). Primero se le pasa como argumento la función que va a llamar, "scrollSuave", y después le indico el tiempo a transcurrir en milisegundos.
    setTimeout(scrollSuave,5000);

    // Esta función va a establecer la posición hacia la que se va a hacer el scroll, y también su comportamiento ("smooth", que se desplace de manera suave).
    // Por medio de la propiedad document.body.scrollHeight, que he ejecutado en consola del navegador, he obtenido el tamaño del scroll en dimensión vertical. La idea es ir hacia abajo del todo del documento. El resultado ha dado 20067.
    function scrollSuave(){

        window.scrollTo({
            top: 20067,
            behavior: 'smooth'
        })
    }

}