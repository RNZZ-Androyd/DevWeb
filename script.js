document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Enviar formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset(); // Limpa o formulário
});
