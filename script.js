document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manipulação do formulário de contato
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta os dados do formulário
            const formData = {
                nome: form.querySelector('input[type="text"]').value,
                email: form.querySelector('input[type="email"]').value,
                telefone: form.querySelector('input[type="tel"]').value,
                mensagem: form.querySelector('textarea').value
            };

            // Aqui você pode adicionar a lógica para enviar os dados para um servidor
            // Por enquanto, apenas mostramos uma mensagem de sucesso
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
        });
    }

    // Animação para os cards de serviço
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
}); 