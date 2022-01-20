var encriptar = document.getElementById('btn-encriptar');
var desencriptar = document.getElementById('btn-desencriptar');
var copiar = document.getElementById('btn-copy');


encriptar.addEventListener("click", function (event) {
    event.preventDefault();
    
    clearError();

    var texto = captureText();

    if (!validateText(texto)) {
        errorMsg();
        return;
    }

    var encryptedText = encrypted(texto)

    returnText(encryptedText);
});

desencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    
    clearError();

    var texto = captureText();

    if (!validateText(texto)) {
        errorMsg();
        return;
    }

    var decryptedText = decrypted(texto)

    returnText(decryptedText);
});

copiar.addEventListener("click", function (event) {
    event.preventDefault();
    
    text = captureTextProcess();
    
    copyToClipboard(text);
});

