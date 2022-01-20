//Capturar texto a Encriptar/Desencriptar
function captureText() {
    var inputText = document.getElementById('input-texto');

    return inputText.value
}

//Retornar texto Encriptar/Desencriptar
function returnText(text) {
    document.getElementById('msg').value = text;
}

//Capturar Encriptar/Desencriptar
function captureTextProcess() {
    var inputText = document.getElementById('msg');

    return inputText.value
}