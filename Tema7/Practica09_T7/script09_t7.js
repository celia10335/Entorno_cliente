function followMe() {
  //Capturo el cuadrado amarillo por su id
  let cuadrado = document.getElementById('cuadrado');
  // El escuchador se lo asigno al documento entero, ya que la función debe funcionar para cualquier posición del cursor dentro de la pantalla del navegador.
  // El evento a capturar es "mousemove", ya que quiero una continuidad en los movimientos del cursor. Con "mouseover" se movería a trompicones.
  document.addEventListener('mousemove', function (ev) {
    // Accedo a las propiedades de posicionamiento del div (top y left) y de esta manera, las puedo ir variando según lo que recibe el escuchador. Le asigno la posición según las coordenadas X e Y del cliente, no me interesa que el cursor pueda moverse si estoy fuera del navegador (desaparecería el cuadradito amarillo).
    // Ajusto la posición del cursor dentro del elemento restándole a cada posición 45 píxeles.
    cuadrado.style.top = ev.clientY - 45 + 'px';
    cuadrado.style.left = ev.clientX - 45 + 'px';
  });
}
