// Le paso a la función dos parámetros; el primero será el elemento y el segundo es la expresión regular o texto que hay que localizar y sustituir.
function bloquearContenido(elemento, regex) {

    // Uso el método 'innerHTML' porque de esta manera obtengo en un solo paso todo el contenido del elemento (que será el body cuando llame a la función), incluyendo los nodos textos de todos los nodos etiqueta contenidos en ese elemento.
    // El elemento de la variable 'regex' se sustituye por una etiqueta span con el texto "CENSURADO"; de esta manera se le puede dar un formato llamativo fácilmente.
    elemento.innerHTML = elemento.innerHTML.replaceAll(regex, "<span>CENSURADO</span>");

}