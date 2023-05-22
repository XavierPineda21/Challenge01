// Esperar a que se cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencia al botón
  var boton1 = document.querySelector(".boton1");
  // Obtener referencia al elemento de entrada de texto
  var inputTexto = document.querySelector(".cajaTexto input");
  // Obtener referencia al elemento para mostrar el texto encriptado
  var resultado = document.querySelector(".cajaResultado");

  // Agregar evento de clic al botón
  boton1.addEventListener("click", function(event) {
    // Evitar que el formulario se envíe y la página se recargue
    event.preventDefault();

    // Obtener el texto ingresado por el usuario
    var texto = inputTexto.value;

    // Realizar la encriptación reemplazando las vocales
    var textoEncriptado = texto
      .replace(/a/g, "ai")
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    // Mostrar el texto encriptado en lugar de la imagen
    resultado.innerHTML = "<p>" + textoEncriptado + "</p>";
  })
})