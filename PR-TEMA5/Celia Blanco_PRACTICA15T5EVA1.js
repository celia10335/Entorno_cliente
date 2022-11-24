function Ordenador(marca, modelo, memoriaRAM = 4, GB_disco = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.memoriaRAM = memoriaRAM;
    this.GB_disco = GB_disco;
    this.pulgadas = pulgadas;


    this.toString = function () {
        return (`marca: ${this.marca}, modelo: ${this.modelo}, memoria RAM: ${this.memoriaRAM}, capacidad de disco: ${this.GB_disco}, pulgadas: ${this.pulgadas}`);
    }

}

// PORTÁTIL
function Portatil(marca, modelo, memoriaRAM = 4, GB_disco = 256, pulgadas = 13, autonomia = 4) {
    this.__proto__ = new Ordenador(marca, modelo);
    this.memoriaRAM = memoriaRAM;
    this.GB_disco = GB_disco;
    this.pulgadas = pulgadas;
    this.autonomia = autonomia;


    this.toString = function(){
         return (`marca: ${this.marca}, modelo: ${this.modelo}, memoria RAM: ${this.memoriaRAM}, capacidad de disco: ${this.GB_disco}, pulgadas: ${this.pulgadas}, autonomía: ${this.autonomia}`);
    }


}



