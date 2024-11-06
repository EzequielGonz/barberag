
// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true,
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Manejar el envío del formulario (puedes personalizar esto según tus necesidades)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
    this.reset();

});
