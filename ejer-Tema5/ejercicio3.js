function Coche(marca, combustible, cantidad) {
    this.marca = marca;
    this.combustible = combustible;
    this.cantidad = cantidad;

    this.getMarca = function () { return this.marca; };
    this.getCombustible = function () { return this.combustible; };
    this.getCantidad = function () { return this.cantidad; };

    this.setMarca = function (marcaNueva) { this.marca = marcaNueva; };
    this.setCombustible = function (combustibleNuevo) { this.combustible = combustibleNuevo; };
    this.setCantidad = function (cantidadNueva) { this.cantidad = cantidadNueva; };

    this.rellenarDeposito = function (litros) { this.setCantidad; };

    this.muestraConf = function () {
        return `marca: ${this.getMarca()}, tipo de combustible: ${this.getCombustible()}, litros en el depósito: ${this.getCantidad()}`;
    };
}


function crearCoches() {

    let arrayCoches = [];
    let continuar;

    do {

        var coche_i = new Coche();

        coche_i.setMarca(prompt("Introducir marca"));
        coche_i.setCombustible(prompt("Introducir combustible"));
        coche_i.setCantidad(prompt("Introducir cantidad de combustible"));

        arrayCoches.push(coche_i);
        continuar = confirm("¿Añadir más coches?");

    } while (continuar);


    console.log(arrayCoches);

    for (let i of arrayCoches) {

        console.log("esto es " + i);

        document.getElementById("listado").innerHTML += i.muestraConf() + "<br>";
    }

}
