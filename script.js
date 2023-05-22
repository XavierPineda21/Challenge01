function reemplazarVocales(texto) {
	var reemplazos = {
    a: "ai",
   	e: "enter",
   	i: "imes",
    o: "ober",
    u: "ufat"
}
	return texto.replace(/[aeiou]/g, function(vocal){
	return reemplazos[vocal];
	})
}

function botonEncriptarClick() {
	event.preventDefault();
	var inputTexto = document.querySelector(".cajaTexto input");
	var resultado = document.querySelector(".cajaResultado");
	var texto = inputTexto.value.toLowerCase();
	var textoEncriptado = reemplazarVocales(texto);

	resultado.innerHTML = "<p>" + textoEncriptado + "</p>";

	inputTexto.value = "";
}

function invertirReemplazos(texto) {
  var reemplazos = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u"
  };
  return texto.replace(/ai|enter|imes|ober|ufat/g, function(palabra) {
    return reemplazos[palabra];
  });
}

function botonDesencriptarClick() {
  event.preventDefault();
  var inputTexto = document.querySelector(".cajaTexto input");
  var resultado = document.querySelector(".cajaResultado p");
  var texto = inputTexto.value.toLowerCase();
  var textoDesencriptado = invertirReemplazos(texto);

  resultado.textContent = textoDesencriptado;

  inputTexto.value = "";
}

