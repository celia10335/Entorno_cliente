// Para hacer las comprobaciones de forma más cómoda, creo las siguientes funciones:
function hayMinusculas(palabra) {
  const minus =
    "a,á,à,b,c,ç,d,e,é,è,f,g,h,i,ì,í,j,k,l,m,n,ñ,o,ó,ò,p,q,r,s,t,u,ù,ú,ü,v,w,x,y,z";
  let arrayLetras = minus.split(",");
  let hayMinusc = false;
  for (let letra of arrayLetras) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra.charAt(i).localeCompare(letra) == 0) {
        hayMinusc = true;
      }
    }
  }
  return hayMinusc;
}

function hayMayusculas(palabra) {
  const mayus =
    "a,á,à,b,c,ç,d,e,é,è,f,g,h,i,ì,í,j,k,l,m,n,ñ,o,ó,ò,p,q,r,s,t,u,ù,ú,ü,v,w,x,y,z".toUpperCase();
  let arrayLetras = mayus.split(",");
  let hayMayusc = false;
  for (let letra of arrayLetras) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra.charAt(i).localeCompare(letra) == 0) {
        hayMayusc = true;
      }
    }
  }
  return hayMayusc;
}

function hayNumero(palabra) {
  const num = "0123456789";
  let arrayNumeros = num.split("");
  let hayNum = false;
  for (let num of arrayNumeros) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra.charAt(i).localeCompare(num) == 0) {
        hayNum = true;
      }
    }
  }
  return hayNum;
}

function hayCaracter(palabra) {
  let hayChart = false;
  for (let i = 0; i < palabra.length; i++) {
    if (
      !hayMayusculas(palabra.charAt(i)) &&
      !hayMinusculas(palabra.charAt(i)) &&
      !hayNumero(palabra.charAt(i))
    ) {
      hayChart = true;
    }
  }
  return hayChart;
}



// Una vez creadas las funciones, esta será la estructura del programa.
// --> Definir variables.
let nombre;
let contraseña;



// --> Bucle para comprobar que el nombre cumple los requisitos. Si se cancela, se sale del programa.
//Se utiliza "break" para evitar errores, ya que si la variable es nula, no se puede utilizar en las funciones y dará error.
do {
  nombre = prompt("Introduce un nombre");
  if (nombre != null) {
    if (!hayMinusculas(nombre) || !hayNumero(nombre)) {
      alert(
        "El nombre debe tener, al menos, 1 letra minúscula y 1 número"
      );
    }
  } else {
    alert("FIN DEL PROGRAMA");
    break;
  }
} while (!hayMinusculas(nombre) || !hayNumero(nombre));



// --> De la misma forma, se procede con el bucle para controlar los requisitos de la contraseña.
if (nombre != null) {
  do {
    contraseña = prompt("Introduce una contraseña");

    if (contraseña != null) {
      if (
        !hayMinusculas(contraseña) ||
        !hayMayusculas(contraseña) ||
        !hayCaracter(contraseña) ||
        !hayNumero(contraseña)
      ) {
        alert(
          "La contraseña debe tener, al menos: 1 minúscula, 1 mayúscula, 1 número y 1 carácter"
        );
      }
    } else {
      alert("FIN DEL PROGRAMA");
      break;
    }
  } while (
    !hayMinusculas(contraseña) ||
    !hayMayusculas(contraseña) ||
    !hayNumero(contraseña) ||
    !hayCaracter(contraseña)
  );

  if (contraseña != null) {
    alert("***¡¡La contraseña se ha almacenado correctamente!!***");
  }
}
