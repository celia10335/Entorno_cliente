function desglosarDom(elemento) {
    let info = '';
    let listaPadres = document.getElementsByTagName(elemento);

    let i = 0;

    do {

        for (let hijo of listaPadres[i].childNodes) {

            info += "<br>&#10043 Nombre de nodo: " + hijo.nodeName + "<br>Tipo: " + hijo.nodeType;
            if (hijo.nodeValue != null) {
                info += '<br>Contenido: ' + hijo.nodeValue;
            }

            if (hijo.nodeType == 1 && hijo.hasAttributes) {
                info += "<br>Atributos: ";

                for (let attr of hijo.attributes) {
                    info += `${attr.name} -> ${attr.value}\n`;
                }

                info += "<hr>";
            }

            else {
                info += "<hr>";
            }

            if (hijo.nodeType == 1 && hijo.hasChildNodes) {
                info += desglosarDom(hijo.nodeName);
            }
        }
        i++;

    } while (i < listaPadres.length);



    return info;
}