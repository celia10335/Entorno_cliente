// Esta función redirige hacia la URL indicada en la propiedad location.href
function irGoogle() {
  location.href = "https://www.google.com";
}

// Función tipo callback. Como primer argumento se le pasa la acción a realizar (esta será redirigir la página, alterando la propiedad location.href), y como segundo argumento se le pasa el tiempo en milisegundos que debe transcurrir hasta que se realice la acción.
function nosVamos() {
  setTimeout(duckDuckGo, 5000);

  // Al igual que en la función "irGoogle", esta función redirige a la página indicada.
  function duckDuckGo() {
    location.href = "https://duckduckgo.com";
  }
}
