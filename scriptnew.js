
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
// Clave para encriptación avanzada
var clave = 3;

var caracterLegible = ["e", "i", "a", "o", "u"];
var caracterConvertido = ["enter", "imes", "ai", "ober", "ufat"];

function encriptar()
{

	var texto = document.getElementById("input-texto").value; 
	// Si marqué la opción avanzado, usar el otro método de encriptación
	var avanzado = document.getElementById("chkavanzado").checked;

	if(avanzado)
	{
		
      
        var resultado = "";
        for(j=0; j<texto.length; j++)
        {
           resultado += String.fromCharCode(clave ^ texto.charCodeAt(j));
        }
        document.getElementById("msg").value = resultado;

	}
	else
	{
			for(var j=0; j<=4; j++)
		{
			let textoBuscado = new RegExp(caracterLegible[j], "g")
			texto = texto.replace(textoBuscado, caracterConvertido[j]);
		}	
		document.getElementById("msg").value = texto; 
	}
	
	
}

function desencriptar()
{
	
	var texto= document.getElementById("input-texto").value;
	var avanzado = document.getElementById("chkavanzado").checked;

	if(avanzado)
	{
	 	var resultado = "";
        for(j=0; j<texto.length; j++)
        {
           resultado += String.fromCharCode(clave ^ texto.charCodeAt(j));
        }
        document.getElementById("msg").value = resultado;
	}
	else
	{
		for(var j=0; j<=4; j++)
		{
			let textoBuscado = new RegExp(caracterConvertido[j], "g")
			texto = texto.replace(textoBuscado, caracterLegible[j]);
		}

		document.getElementById("msg").value = texto; 
	}
}

function copiartexto()
{
	textoMensaje = document.getElementById("msg").value;
	navigator.clipboard.writeText(textoMensaje);
}

function pegartexto()
{
	navigator.clipboard.readText()
	  .then(text => {
	    document.getElementById("input-texto").value = text;
	  })
	  // .catch(err => {
	  //   //alert("Error");
	  // });

}