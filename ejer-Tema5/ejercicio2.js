function Coche(marca, combustible){
    this.marca = marca;
    this.combustible = combustible;
    this.cantidad = 0;
    
    this.getMarca = function(){return this.marca;};
    this.getCombustible = function(){return this.combustible;};
    this.getCantidad = function(){return this.cantidad;};

    this.setMarca = function(marcaNueva){this.marca = marcaNueva;};
    this.setCombustible = function(combustibleNuevo){this.combustible = combustibleNuevo;};
    this.setCantidad = function(cantidadNueva){this.cantidad = cantidadNueva;};

    this.rellenarDeposito = function(litros){this.setCantidad;};

    this.muestraConf = function(){console.log(`marca: ${this.getMarca()}, tipo de combustible: ${this.getCombustible()}, litros en el depósito: ${this.getCantidad()}`);
    };
}

var cocheUno = new Coche("Opel","gasoil");
cocheUno.muestraConf();