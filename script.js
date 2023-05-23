//-----------------------Encriptar--------------------------
function reemplazarVocales(texto) {
	//Variables para las equivalencias de las vocales
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

	var botonCopiar = document.querySelector(".botonCopiar");
  	botonCopiar.style.display = "block";

	inputTexto.value = "";
}

//-----------------------Desencriptar--------------------------
function invertirReemplazos(texto) {
	//Variables para las equivalencias de las palabras
	var reemplazos = {
	    ai: "a",
	    enter: "e",
	    imes: "i",
	    ober: "o",
	    ufat: "u"
  };
  return texto.replace(/ai|enter|imes|ober|ufat/g, function(palabra) {
    return reemplazos[palabra];
  })
}

function botonDesencriptarClick() {
	event.preventDefault();
	var inputTexto = document.querySelector(".cajaTexto input");
	var resultado = document.querySelector(".cajaResultado");
	var texto = inputTexto.value.toLowerCase();
	var textoDesencriptado = invertirReemplazos(texto);

	resultado.innerHTML = "<p>" + textoDesencriptado + "</p>";
  
	var botonCopiar = document.querySelector(".botonCopiar");
  	botonCopiar.style.display = "block";

  inputTexto.value = "";
}

//-----------------------Copiar--------------------------
function botonCopiarClick() {
	event.preventDefault();
	var textoResultado = document.querySelector(".cajaResultado p").textContent;

	// Copiar al portapapeles
	navigator.clipboard.writeText(textoResultado)
    .catch(function(err) {
	console.error("Error al copiar el texto: ", err);
    })
}
