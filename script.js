// Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.querySelector("nav ul li:nth-child(3) a"); // Estoy asumiendo que "Creditos de editor" es el tercer enlace en tu navegación

// Obtener el botón para cerrar el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se haga clic en el botón, mostrar el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando se haga clic en el botón de cerrar, ocultar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', function() {
    var inicioButton = document.getElementById('inicio');
    var noticiasButton = document.getElementById('noticias');

    inicioButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Lo sentimos! La opción "Inicio" aún no está disponible. Estará en futuras actualizaciones.');
    });

    noticiasButton.addEventListener('click', function(event) {
        event.preventDefault();
        alert('¡Lo sentimos! La opción "Noticias" aún no está disponible. Estará en futuras actualizaciones.');
    });
});