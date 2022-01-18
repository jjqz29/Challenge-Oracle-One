
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

var encriptar = document.getElementById('btn-encriptar');

encriptar.addEventListener("click", encriptarTexto);

var desencriptar = document.getElementById('btn-desencriptar');

desencriptar.addEventListener("click", desencriptarTexto);

var copiar = document.getElementById('btn-copy');

copiar.addEventListener("click", copiarTexto);

function encriptarTexto(event){
    event.preventDefault();
    var texto = document.getElementById('input-texto').value;

    if (texto !== "") {

        texto = texto.replace(/e/gi,"enter");
        texto = texto.replace(/i/gi,"imes");
        texto = texto.replace(/a/gi,"ai");
        texto = texto.replace(/o/gi,"ober");
        texto = texto.replace(/u/gi,"ufat");

        document.getElementById('msg').value = texto;
    } else {
        alert('No hay datos para encriptar')
    }
};

function desencriptarTexto(event){
    event.preventDefault();
    var texto = document.getElementById('input-texto').value;

    if (texto !== "") {

        texto = texto.replace(/ufat/gi, "u");
        texto = texto.replace(/ober/gi, "o");
        texto = texto.replace(/ai/gi, "a");
        texto = texto.replace(/imes/gi, "i");
        texto = texto.replace(/enter/gi, "e");

        document.getElementById('msg').value = texto;
    } else {
        alert('No hay datos para desencriptar')
    }
};

function copiarTexto() {
    var texto = document.getElementById('msg');

    copyToClipboard(texto.value);
    /*texto.select();
    //texto.setSelectionRange(0, 99999); 

    navigator.clipboard.writeText(texto.value).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });*/
};

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