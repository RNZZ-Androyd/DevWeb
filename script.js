// Enviar formulário
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    this.reset(); // Limpa o formulário
});