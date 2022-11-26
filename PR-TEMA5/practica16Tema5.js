// Creo una función general que irá haciendo todos los pasos para llegar a transformar una cadena JSON (String) en un mapa
function JSONtoMap(miJSON){

  // Esta función transforma la cadena JSON en un objeto
    let miObjetoJSON = JSON.parse(miJSON);
    
    // Con esta función, le pasamos el objeto y obtenemos un array asociativo
    const miArrayJSON = Object.entries(miObjetoJSON);
    
    // Por último, al array del paso anterior le damos estructura de mapa
    const miMapJSON = new Map(miArrayJSON);
    
    // El método .get es un método propio de los mapas, que va a obtener los valores almacenados en la clave, y los va a organizar en un array.
    // En este mapa hay dos claves, idPedido y pedidos. Por comodidad para operar con estos datos, los almaceno en una variable para cada una de las claves.
    let valorIDPedido = miMapJSON.get("idPedido");
    let valorPedidos = miMapJSON.get("pedidos");

    // Dibujar el encabezado de la tabla
    document.getElementById(
        "tabla"
      ).innerHTML += "<tr><th>Producto</th><th>Nombre</th><th>Destino Postal</th></tr>";
    
    // Recorrer el array con la información de los pedidos, y por cada uno de ellos dibujar el resto de celdas de la tabla.
    for (let i = 0; i < valorPedidos.length; i++) {
        document.getElementById(
          "tabla"
        ).innerHTML += `<tr><td>${valorPedidos[i].idProducto}</td><td>${valorPedidos[i].nombre}</td><td>${valorPedidos[i].destPostal}</td></tr>`;
      }
    }