//Validar texto
function validateText(text) {
    if (text === "" || text.search(/[A-ZÀ-ú]/g) >= 0) {
        return false;
    }
    return true;
}

//Mostrar Error de validadción
function errorMsg() {
    var error = document.querySelector('#error');
    error.textContent = "Error caracteres incorrectos"
}

//Limpiar mensajes de Error
function clearError() {
    var error = document.querySelector('#error');
    error.textContent = ""
}