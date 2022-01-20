//encriptado texto ingresado
function encrypted(text) {
    text = text.replace(/e/g,"enter");
    text = text.replace(/i/g,"imes");
    text = text.replace(/a/g,"ai");
    text = text.replace(/o/g,"ober");
    text = text.replace(/u/g,"ufat");

    return text;
}

//descifrado texto ingresado
function decrypted(text) {
    text = text.replace(/ufat/gi, "u");
    text = text.replace(/ober/gi, "o");
    text = text.replace(/ai/gi, "a");
    text = text.replace(/imes/gi, "i");
    text = text.replace(/enter/gi, "e");

    return text;
}

function copyToClipboard(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // here the magic happens
            document.execCommand('copy') ? res() : rej();
            textArea.remove();
        });
    }
};