document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("miModal");
    const imgModal = document.getElementById("imgModal");
    const spanCerrar = document.querySelector(".cerrar");

    // Verificación de seguridad para depurar
    if (!modal) {
        console.error("¡Cuidado! No se encontró el elemento con id 'miModal'");
        return;
    }

    // Seleccionamos todas las imágenes con la clase 'imagen-zoom'
    const imagenes = document.querySelectorAll('.imagen-zoom');
    console.log("Imágenes encontradas para el zoom:", imagenes.length); // Te dirá en la consola cuántas detectó

    imagenes.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex"; // Abre el modal
            imgModal.src = this.src;      // Asigna la fuente
        });
    });

    // Cerrar con la "X"
    if (spanCerrar) {
        spanCerrar.onclick = function() {
            modal.style.display = "none";
        }
    }

    // Cerrar haciendo clic fuera de la imagen
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});