export function circulos() {
  // Con esta línea de código, evito que se despliegue el menú contextual al hacer clic con el botón derecho del ratón.
  document.oncontextmenu = new Function("return false");
  // Capturo el body, ya que de aquí iré "colgando" los "hijos" (que serán los divs-círculos)
  let cuerpo = document.getElementsByTagName('body')[0];

  // El evento que va a capturar es "mousedown".
  document.addEventListener('mousedown', function (ev) {

    // Creo un div al que llamo "círculo". 
    let circulo = document.createElement('div');

    // Con try ... catch voy a capturar el error en caso de que se pulse un botón del ratón diferente al izquierdo o derecho.
    try {

      //Si se pulsa con el botón principal del ratón, le añado la clase "circle" con la que controlo que el borde sea redondeado en un 50% (o sea, que forme un círculo). En caso contrario, la clase 'square' que lo dibuja como un cuadrado.
      if (ev.button == 0) {
        circulo.classList.add('circle');

      } else if (ev.button == 2) {
        circulo.classList.add('square');

      } else {
        throw new Error('Movimiento no permitido');
      }

      // A continuación, todas las propiedades del div en cuanto a tamaño y color aleatorios:
      // Almaceno en una variable el diámetro del círculo, que en realidad será el alto y ancho del div. Le he asignado un número aleatorio entre 50 y 200 píxeles.
      let diametro = Math.floor(Math.random() * 200) + 50;

      // Indico las propiedades del círculo: dimensiones y color aleatorio rgb.
      let color_red = Math.random() * 255;
      let color_green = Math.random() * 255;
      let color_blue = Math.random() * 255;
      circulo.style.backgroundColor = `rgb(${color_red}, ${color_green}, ${color_blue})`;
      // Añado este elemento al body (capa "cuerpo").
      cuerpo.appendChild(circulo);
      circulo.style.height = diametro + 'px';

      circulo.style.width = circulo.style.height;

      // posiciono el div de manera que el centro coincida con el puntero.
      circulo.style.top = ev.clientY - diametro / 2 + 'px';
      circulo.style.left = ev.clientX - diametro / 2 + 'px';

      // ********* BLOQUE CATCH
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  }
  )


  // ******* LANZAR ERROR PARA EL CASO EN QUE SE HAGA DOBLE CLIC CON EL RATÓN:
  document.addEventListener('dblclick', () => {
    try {
      throw new Error('Movimiento no permitido');
    } catch (error) {
      console.error(error.message);
      alert(error.message);
    }
  })


}