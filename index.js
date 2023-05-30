function encriptar() {
    var textoOriginal = document.getElementById("texto").value;
    var textoEncriptado = textoOriginal
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.getElementById("mensaje").value = textoEncriptado;
    
   }


function desencriptar() {
    var textoEncriptado = document.getElementById("mensaje").value;
    var textoDesencriptado = textoEncriptado
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoDesencriptado;
}

function copiar() {
    var mensajeEncriptado = document.getElementById("mensaje");
    mensajeEncriptado.select();
    mensajeEncriptado.setSelectionRange(0, 99999);
    document.getElementById("copy");
    alert("Texto  copiado al portapapeles.");
}


