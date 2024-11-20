function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var imagen = document.getElementById('imagen').value;

    // Validación de que nombre y correo no estén vacíos
    if (nombre === "" || correo === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validación de la imagen (formato JPG o PNG)
    if (imagen) {
        var extension = imagen.split('.').pop().toLowerCase();
        if (extension !== "jpg" && extension !== "png") {
            alert("Solo se permiten imágenes JPG o PNG.");
            return false;
        }
    }

    return true;
}

function mostrarImagen(event) {
    var imagen = document.getElementById('ver-imagen');
    imagen.src = URL.createObjectURL(event.target.files[0]);
    imagen.style.display = "block";
}
