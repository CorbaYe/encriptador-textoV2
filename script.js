	/*
	*
	*declaración de letiables
	*input: caja de texto principal
	*boton: encriptar
	*label: muestra texto encriptado
	*
	*/
	let input = document.getElementById("entradaTexto")
	let botonEncriptar = document.getElementById("encriptar")
	let botonDesencriptar = document.getElementById("desencriptar")
	let ocultarLabel = document.getElementById("div-right")
	let label = document.getElementById("nuevoTexto")
	let botonCopiar = document.getElementById("copiar")
	let ocultarBotonCopiar = document.getElementById("contenedor-copiar")
	let informacion = document.getElementById("informacion")

	let letrasEncriptadas = ["ai","enter","imes","ober","ufat"]
	let letrasDesencriptadas = ['a','e','i','o','u']
	let textArray

	/*
	*
	*declaración de funciones
	*encriptar
	*desencriptar
	*remplazarCaracter
	*contarCaracteres
	*mostrarOcultos
	*copiarTexto
	*evento: addEventListener
	*
	*/
	  function contarCaracteres() {

	    let contador = document.getElementById("contador");
	    let maximo = input.getAttribute("maxlength");
	    let actual = input.value.length;

	    let restante = 0
	    restante += actual;

	    contador.innerHTML = restante;
	}

	input.addEventListener("input", function() {
      //configuración del scroll del textarea
      let alturaScroll = input.scrollHeight
      input.style.height = alturaScroll + "px"

      //minusculas sin acentos
      let texto = input.value
      texto = texto.replace(/[^a-z-" "-'?'-'¿'-'!'-'¡'-','-'.'-':'-';']+/g, "")
      if (input.value != texto) {
      	input.value = texto
      	alert("Solo se permiten letras minúsculas sin acento.")
      }
      
    })

	function remplazarCaracter(caracter,posicion){

		switch(caracter){
			case 'a': textArray[posicion] = letrasEncriptadas[0]
				break
			case 'e': textArray[posicion] = letrasEncriptadas[1]
				break
			case 'i': textArray[posicion] = letrasEncriptadas[2]
				break
			case 'o': textArray[posicion] = letrasEncriptadas[3]
				break
			case 'u': textArray[posicion] = letrasEncriptadas[4]
				break	
		}
	
	}

	function encriptar() {
		
		if (input.value.trim() != ""){
			textArray = []
			textArray = input.value.split("")
			let caracter

			for (let i = 0; i <= textArray.length; i++) {
				caracter = textArray[i]
				remplazarCaracter(caracter,i)
			}

			label.innerHTML = textArray.join('')
			
			input.value = "" 
			contarCaracteres()
			mostrarOcultos()
			return false;
		}

	}

	function desencriptar() {

		if (input.value.trim() != "") {
			label.innerHTML = input.value.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u")
			mostrarOcultos()
			input.value = "" 
			contarCaracteres()		
			return false;
		}	
	}

	function copiarTexto(){

	    let contenido = label.textContent;
	    let temporal = document.createElement('input');

	    temporal.value = contenido;
	    document.body.appendChild(temporal);

	    temporal.select();
	    document.execCommand('copy');

	    temporal.remove();
	    alert("Texto copiado en el portapapeles")
	}

	function mostrarOcultos(){
	    ocultarLabel.style.display = "block";
	    ocultarBotonCopiar.style.display = "inline";
	    informacion.style.display = "none"
	}

	botonEncriptar.onclick = encriptar
	botonDesencriptar.onclick = desencriptar
	botonCopiar.onclick = copiarTexto;

