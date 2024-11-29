document.addEventListener('DOMContentLoaded', function () {
    Swal.fire({
        title: 'Ups',
        text: 'No es un service técnico pero...',
        icon: 'question',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'swal-large'
        },
        willClose: () => {
            window.location.href = 'index2.html'; // Redirige a index2.html
        }
    });
});