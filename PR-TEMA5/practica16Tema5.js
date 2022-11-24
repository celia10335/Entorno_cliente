let miJSON = `{"idPedido":"faa-8444","pedidos":
    [
        {"idProducto":"info005","nombre":"Placa_Arduino_one","destPostal":"abarcable"},
        {"idProducto":"info041","nombre":"Placa_Raspberry_3","destPostal":"No abarcable"},
        {"idProducto":"gadget024","nombre":"usb_Multi_5puertos","destPostal":"abarcable"}
    ]}`;

let miObjetoJSON = JSON.parse(miJSON);

const miArrayJSON = Object.entries(miObjetoJSON);

const miMapJSON = new Map(miArrayJSON);


let valorIDPedido = miMapJSON.get("idPedido");
let valorPedidos = miMapJSON.get("pedidos");

for (let i=0; i<valorPedidos.legth; i++){
    if (valorPedidos[i].idProducto == "info041")
    document.getElementById("muestra").innerHTML += `${userPedidos[i].nombre}, ${userPedidos[i].destPostal}`;
}


//console.log(valorPedidos[0].nombre);
//console.log(valorPedidos[0].destPostal);

// for([clave, valor] of miMapJSON)
// console.log(`Clave: ${clave}, valor: ${valor}`);



