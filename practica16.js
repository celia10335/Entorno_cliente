function JSONtoMap(miJSON){

let miObjetoJSON = JSON.parse(miJSON);

const miArrayJSON = Object.entries(miObjetoJSON);

const miMapJSON = new Map(miArrayJSON);


let valorIDPedido = miMapJSON.get("idPedido");
let valorPedidos = miMapJSON.get("pedidos");

for (let i=0; i<valorPedidos.length; i++){
    if (valorPedidos[i].idProducto == "info041")
    document.getElementById("muestra").innerHTML += `${valorPedidos[i].nombre}, ${valorPedidos[i].destPostal}`;
}


//console.log(valorPedidos[0].nombre);
//console.log(valorPedidos[0].destPostal);

// for([clave, valor] of miMapJSON)
// console.log(`Clave: ${clave}, valor: ${valor}`);
}