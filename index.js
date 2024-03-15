// Función de encriptado
function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoEncriptadoTextarea = document.getElementById("resultado");

    // Función de encriptado
    function cifrarTexto(texto) {
        return texto.replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat");
    }

    let textoCifrado = cifrarTexto(texto);
    
    if (texto.length != 0) {
      // Muestra el texto encriptado en el textarea dentro del div de encriptado
      textoEncriptadoTextarea.value = textoCifrado;
      // Limpiar el campo de entrada
    } else {
      swal("Ooops!", "Debes ingresar un texto", "warning");
    }
}

// Función de desencriptado
function decifrarTexto(texto) {
    return texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
}

function desencriptar() {
    let textoEncriptado = document.getElementById("resultado").value;
    let textoDesencriptado = decifrarTexto(textoEncriptado);
    let textoDesencriptadoTextarea = document.getElementById("texto");

    if (textoEncriptado.length != 0) {
      // Muestra el texto desencriptado en el textarea correspondiente
      textoDesencriptadoTextarea.value = textoDesencriptado;
      // Limpiar el campo de entrada
      document.getElementById("resultado").value = "";
    } else {
      swal("Ooops!", "No hay texto encriptado para desencriptar", "warning");
    }
}
