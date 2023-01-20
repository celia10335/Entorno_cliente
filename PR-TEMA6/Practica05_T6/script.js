function desglosarDom(elemento, info) {

    // Comenzamos por el elemento de nivel más alto, que será el que se le pase a la función. En este caso, el elemento será "document". Se recoge su información:
    console.log("Nombre de nodo: " + elemento.nodeName + "\nTipo: " + elemento.nodeType);
    info += "Nombre de nodo: " + elemento.nodeName + " - Tipo: " + elemento.nodeType

    // Si, además, ese elemento es tipo texto (nodeType = 3) y no es nulo, le pido que muestre el contenido del nodo:
    if ((elemento.nodeValue != null) && (elemento.nodeType == 3)) {
        console.log('\nContenido: ' + elemento.nodeValue);
        info += ' - Contenido: ' + elemento.nodeValue;
    }

    // Si, además, este elemento tiene atributos (método "hasAttributes"), le pido que los muestre en formato "Atributos -> nombre = valor":
    if (elemento.hasAttributes) {
        // El método "attributes" devuelve un listado de todos los atributos de ese elemento. Por eso, para acceder a ellos necesito un bucle.
        let arrayAtr = elemento.attributes;
        for (let a of arrayAtr) {
            console.log(`Atributos -> ${a.name} = ${a.value}\n`);
            info += `<br>Atributos -> ${a.name} = ${a.value}`;
        }
    }

    // Si el elemento tiene hijos (método "hasChildrenNodes"), se desglosan a continuación con dos bucles: el primero para mostrar un listado de hijos, y el segundo para entrar en el detalle de cada uno de ellos:
    if (elemento.hasChildNodes) {

        // El método "childrenNodes" devuelve un listado de todos los hijos de ese elemento del tipo que sean, a diferencia de "children", que devuelve sólo los de tipo etiqueta.
        let grupoHijos = elemento.childNodes;

        console.log("**** Hijos de " + elemento.nodeName + ":\n");
        info += "**** Hijos de " + elemento.nodeName + ":<br>";

        for (let hijo of grupoHijos) {
            console.log("   - " + hijo.nodeName + ":\n");
            info += "   - " + hijo.nodeName + ":<br>";
        }

        for (let hijo of grupoHijos) {
            info += desglosarDom(hijo, "");
        }
    }

    return info;
}