function circulos() {
  let cuerpo = document.getElementsByTagName('body')[0];
  let circulo = document.createElement('div');
  circulo.classList.add('circle');
  cuerpo.appendChild(circulo);
  document.addEventListener('mousedown', function (ev) {
    let diametro = Math.random() * 200;
    circulo.style.height = diametro + 'px';
    circulo.style.width = circulo.style.height;
    let color_red = Math.random() * 255;
    let color_green = Math.random() * 255;
    let color_blue = Math.random() * 255;
    circulo.style.backgroundColor = `rgb(${color_red}, ${color_green}, ${color_blue})`;
    circulo.style.top = ev.clientY - diametro / 2 + 'px';
    circulo.style.left = ev.clientX - diametro / 2 + 'px';
  }
  )
}
