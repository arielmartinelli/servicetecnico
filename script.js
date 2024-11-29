// Función para navegar a la segunda página
function goToPage2() {
    Swal.fire({
        title: '¡Bancamos el querer!',
        text: "Te redirigiremos al siguiente paso",
        icon: 'success',
        confirmButtonText: 'Continuar',
        customClass: {
            popup: 'swal-large',   // Clase personalizada para agrandar
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'pag1.html';
        }
    });
}

// Función para mostrar alerta al presionar "No"
function showNoAlert() {
    Swal.fire({
        title: 'Oh, está bien!',
        text: "La próxima será.",
        icon: 'error',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'swal-large',         // Clase personalizada para agrandar la alerta
        }
    });
}








const planOptions = document.querySelectorAll("#plan-options li");
const calendar = document.getElementById("calendar");
const sendButton = document.getElementById("send-whatsapp");

let selectedPlan = null;
let selectedDate = null;

// Agregar eventos a cada opción de la lista
planOptions.forEach((option) => {
    option.addEventListener("click", () => {
        // Limpiar selección previa
        planOptions.forEach((opt) => opt.classList.remove("selected"));
        option.classList.add("selected"); // Marcar como seleccionado
        selectedPlan = option.getAttribute("data-option");
        checkReadyToSend();
    });
});

// Escuchar cambios en el calendario
calendar.addEventListener("change", () => {
    selectedDate = calendar.value;
    checkReadyToSend();
});

// Verificar si se puede activar el botón de enviar
function checkReadyToSend() {
    if (selectedPlan && selectedDate) {
        sendButton.disabled = false;
    } else {
        sendButton.disabled = true;
    }
}

// Enviar mensaje a WhatsApp
sendButton.addEventListener("click", () => {
    const whatsappMessage = `Vamos a ${selectedPlan} el día ${new Date(selectedDate).toLocaleDateString()}`;
    const whatsappURL = `https://wa.me/3516121498?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
});
