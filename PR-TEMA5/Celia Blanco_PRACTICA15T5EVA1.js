// ORDENADOR
// Constructor, donde inicializo los atributos y les asigno valores por defecto a aquellos que son opcionales (memoriaRAM, GB_disco y pulgadas)
function Ordenador(marca, modelo, memoriaRAM = 4, GB_disco = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.memoriaRAM = memoriaRAM;
    this.GB_disco = GB_disco;
    this.pulgadas = pulgadas;


    // Función que devuelve información sobre las propiedades del objeto que la llama
    this.toString = function () {
        return (`marca: ${this.marca}, modelo: ${this.modelo}, memoria RAM: ${this.memoriaRAM}, capacidad de disco: ${this.GB_disco}, pulgadas: ${this.pulgadas}`);
    }

}

// PORTÁTIL
// Utilizo la clase "Ordenador" como prototipo para establecer la marca y el modelo, asigno valores por defecto a aquellas propiedades que no son obligatorias al instanciar el objeto. No las tomo del prototipo Ordenador porque tienen otros valores por defecto.
function Portatil(marca, modelo, memoriaRAM = 4, GB_disco = 256, pulgadas = 13, autonomia = 4) {
    this.__proto__ = new Ordenador(marca, modelo);
    this.memoriaRAM = memoriaRAM;
    this.GB_disco = GB_disco;
    this.pulgadas = pulgadas;
    this.autonomia = autonomia;


    // Función que devuelve información sobre las propiedades del objeto que la llama
    this.toString = function(){
         return (`marca: ${this.marca}, modelo: ${this.modelo}, memoria RAM: ${this.memoriaRAM}, capacidad de disco: ${this.GB_disco}, pulgadas: ${this.pulgadas}, autonomía: ${this.autonomia}`);
    }


}



