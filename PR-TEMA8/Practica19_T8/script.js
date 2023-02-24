function formularioJson() {
    // Capturo los elementos que voy a necesitar: formulario, párrafo para lanzar mensaje de error y botones de adelante y atrás.
    let formu = document.querySelector('form');
    let parrafo = document.querySelector('h3');
    let atras = document.getElementById('atras');
    let adelante = document.getElementById('adelante');

    function traerDatos(i) {
        // Con el método fetch extraigo la información del archivo que está en este mismo directorio.
        fetch('http://jsonplaceholder.typicode.com/posts/' + i)
            // Utilizo una promesa para operar con los datos. Si la conexión va bien, transforma el JSON en cadena de texto, después en objeto y después en array.
            .then((respuesta) => {
                if (respuesta.ok) {
                    //Nos aseguramos que no haya errores
                    return respuesta.json(); //Devuelve un objeto en formato JSON
                } else {
                    throw new Error('Los datos no llegaron bien');
                }
            })
            .then((miJSON) => {
                //Recoge nuestra respuesta JSON
                //Volcamos los datos
                formu.innerHTML =
                    '<div><label for="userId">UserID</label><input type="text" name="userId" value="' +
                    miJSON.userId +
                    '" /></div><div><label for="id">ID</label><input type="text" name="id" value="' +
                    miJSON.id +
                    '" /></div><div><label for="title">Título</label><input type="text" name="title" value="' +
                    miJSON.title +
                    '" /></div><div><label for="body">Cuerpo</label><textarea type="text" name="body">' +
                    miJSON.body +
                    '</textarea></div>';
            }) //Lo podemos hacer así porque miJSON es un objeto con sus propiedades
            .catch((error) => {
                parrafo.textContent = 'Error: ' + error;
            });
    }

    // ********************** Registro que se muestra al cargar la página
    let i = 1;
    traerDatos(i);

    // ********************** Recorrer los registros hacia adelante
    adelante.addEventListener('click', () => {
        i = i + 1;
        if (i == 101) i = 1;
        traerDatos(i);
    });

    // ********************** Recorrer los registros hacia atrás
    atras.addEventListener('click', () => {
        i = i - 1;
        if (i == 0) i = 100;
        traerDatos(i);
    });
}