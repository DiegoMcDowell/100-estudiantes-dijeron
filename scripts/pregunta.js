document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btnmostrarPregunta");

    button.addEventListener("click", function() {
        var mostrarTexto = localStorage.getItem("mostrarTexto") === "true";
        localStorage.setItem("mostrarTexto", !mostrarTexto);
        // Esto es para reflejar el estado actual en el botón
        button.textContent = mostrarTexto ? "Haz clic para mostrar el texto" : "Haz clic para ocultar el texto";
    });

    // Set the initial button text based on the localStorage value
    var initialMostrarTexto = localStorage.getItem("mostrarTexto") === "true";
    button.textContent = initialMostrarTexto ? "Haz clic para ocultar el texto" : "Haz clic para mostrar el texto";
});

document.addEventListener("DOMContentLoaded", function() {
    var texto = document.getElementById("preguntaTexto");

    function actualizarTexto() {
        var mostrarTexto = localStorage.getItem("mostrarTexto") === "true";
        texto.style.display = mostrarTexto ? "block" : "none";
    }

    // Actualizar el texto cuando la página se carga
    actualizarTexto();

    // Actualizar el texto cuando cambie el localStorage
    window.addEventListener("storage", function(event) {
        if (event.key === "mostrarTexto") {
            actualizarTexto();
        }
    });
});