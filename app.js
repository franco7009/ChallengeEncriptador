function capturarTexto() {
    // Obtener el texto ingresado por el usuario
    return document.getElementById('textoIngresado').value;
}

function esMinusculasSinAcentos(texto) {
    // Expresión regular que verifica que el texto solo contenga letras minúsculas sin acentos
    let expresion = /^[a-z]+$/;
    return expresion.test(texto);
}

function actualizarRespuesta(texto){
    // Mostrar la respuesta en la página. Ocultar el mensaje de respuesta por defecto y mostrar el mensaje con la respuesta.
    document.getElementById('respuestaDefecto').setAttribute('hidden', true);
    document.getElementById('respuestaDesencriptada').removeAttribute('hidden');
    document.getElementById('respuestaDesencriptadaTexto').innerHTML = texto;
}

function encriptarTexto() {
    // Obtener el texto ingresado y encriptarlo según el diccionario de encriptación
  let textoIngresado = capturarTexto();
  // Verificar si el texto ingresado contiene caracteres no permitidos
  if (!esMinusculasSinAcentos(textoIngresado)) {
    alert("El texto contiene caracteres no permitidos.");
  }
  else{
    // Convertir el texto ingresado en un arreglo de caracteres
    textoIngresado = textoIngresado.split('');
    // Diccionario de encriptación
    let  diccionarioEncriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }
    let textoEncriptado = '';
    // Recorrer cada carácter del texto ingresado
    for (let char of textoIngresado) {
        // Reemplazar el carácter según el diccionario o dejarlo igual si no está en el diccionario
        textoEncriptado += diccionarioEncriptacion[char] || char;
    }
    actualizarRespuesta(textoEncriptado);
  }
}

function desencriptarTexto() {
    // Obtener el texto ingresado y desencriptarlo
    let textoDesencriptado = capturarTexto();

    if (!esMinusculasSinAcentos(textoDesencriptado)) {
        alert("El texto contiene caracteres no permitidos.");
    }
    else{
        textoDesencriptado = textoDesencriptado.split('');
        let resultado = '';
        for (let i = 0; i < textoDesencriptado.length; i++) {
            if (textoDesencriptado[i] === 'a' && textoDesencriptado[i + 1] === 'i') {
                resultado += 'a';
                i++;
            }
            else if (textoDesencriptado[i] === 'e' && textoDesencriptado[i + 1] === 'n' && textoDesencriptado[i + 2] === 't' && textoDesencriptado[i + 3] === 'e' && textoDesencriptado[i + 4] === 'r') {
                resultado += 'e';
                i += 4;
            }
            else if (textoDesencriptado[i] === 'i' && textoDesencriptado[i + 1] === 'm' && textoDesencriptado[i + 2] === 'e' && textoDesencriptado[i + 3] === 's') {
                resultado += 'i';
                i += 3;
            }
            else if (textoDesencriptado[i] === 'o' && textoDesencriptado[i + 1] === 'b' && textoDesencriptado[i + 2] === 'e' && textoDesencriptado[i + 3] === 'r') {
                resultado += 'o';
                i += 3;
            }
            else if (textoDesencriptado[i] === 'u' && textoDesencriptado[i + 1] === 'f' && textoDesencriptado[i + 2] === 'a' && textoDesencriptado[i + 3] === 't') {
                resultado += 'u';
                i += 3;
            }
            else{
                resultado += textoDesencriptado[i];
            }
        }
        actualizarRespuesta(resultado);
    }
}

function copiarAlPortapapeles() {
    // Copiar el texto de la respuesta al portapapeles
    let texto = document.getElementById('respuestaDesencriptadaTexto').innerText;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado al portapapeles");
}

