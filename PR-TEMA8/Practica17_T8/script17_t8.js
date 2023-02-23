export function circulos() {
  document.oncontextmenu = new Function("return false");
  // Capturo el body, ya que de aquí iré "colgando" los "hijos" (que serán los divs-círculos)
  let cuerpo = document.getElementsByTagName('body')[0];

  // El evento que va a capturar es "mousedown".
  document.addEventListener('mousedown', function (ev) {

    console.log(ev.type);

    try {


      // Creo un div al que llamo "círculo". 
      let circulo = document.createElement('div');

      //Si se pulsa con el botón principal del ratón, le añado la clase "circle" con la que controlo que el borde sea redondeado en un 50% (o sea, que forme un círculo). En caso contrario, la clase 'square' que lo dibuja como un cuadrado.
      if (ev.button == 0) {
        circulo.classList.add('circle');

      } else if (ev.button == 2) {
        circulo.classList.add('square');
      } else {
        throw new Error('Movimiento no permitido');

      }

      // Por comodidad, almaceno en una variable el diámetro del círculo, que en realidad será el alto y ancho del div. Le he asignado un número aleatorio entre 50 y 200 píxeles.
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
    } catch (error) {
      console.log(error.message);
    }
  }

  )


}