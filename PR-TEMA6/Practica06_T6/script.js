function inspeccionar() {
    let padre = document.getElementsByTagName('body').item(0);

    let info = "";

    let listHijos = padre.childNodes;


    function buscaHijos(padre) {
        let listHijos = padre.childNodes;
        for (let h of listHijos) {
            info += "\n" + h.nodeName;
        }
    }

    for (let h of listHijos) {
        if (h.hasChildNodes) {
            buscaHijos(h);
        }
        else {
            info += "\n" + h.nodeName;
        }
    }

    console.log(info);
}