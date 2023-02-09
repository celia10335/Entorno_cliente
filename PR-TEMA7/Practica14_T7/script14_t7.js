function circulos() {
  // Capturo el body, ya que de aquí iré "colgando" los "hijos" (que serán los divs-círculos)
  let cuerpo = document.getElementsByTagName('body')[0];

  // El evento que va a capturar es "mousedown", pero podría haber puesto también "click". Hay una sutil diferencia: con "click" se dibuja el círculo cuando se suelta el botón, mientras que con "mousedown" se dibuja desde el mismo momento que se presiona.
  document.addEventListener('mousedown', function (ev) {

    // Por comodidad, almaceno en una variable el diámetro del círculo, que en realidad será el alto y ancho del div. Le he asignado un número aleatorio entre 50 y 200 píxeles.
    let diametro = Math.floor(Math.random() * 200) + 50;

    // Creo un div al que llamo "círculo". Le añado la clase "circle" con la que controlo que el borde sea redondeado en un 50% (o sea, que forme un círculo).
    let circulo = document.createElement('div');
    circulo.classList.add('circle');

    // Añado este elemento al body (capa "cuerpo").
    cuerpo.appendChild(circulo); circulo.style.height = diametro + 'px';

    // Indico las propiedades del círculo: dimensiones y color aleatorio rgb.
    circulo.style.width = circulo.style.height;
    let color_red = Math.random() * 255;
    let color_green = Math.random() * 255;
    let color_blue = Math.random() * 255;
    circulo.style.backgroundColor = `rgb(${color_red}, ${color_green}, ${color_blue})`;

    // posiciono el div de manera que el centro coincida con el puntero.
    circulo.style.top = ev.clientY - diametro / 2 + 'px';
    circulo.style.left = ev.clientX - diametro / 2 + 'px';
  }
  )
}
