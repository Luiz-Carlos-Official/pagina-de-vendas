// ============================
// SCRIPT.PHP — Interatividade Página de Vendas
// ============================

// Scroll suave para links internos
document.querySelectorAll('nav ul li a, #hero a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Ajuste de header
                behavior: 'smooth'
            });
        }
    });
});

// Destaque do botão de compra quando o usuário rola
const buyButton = document.querySelector('#hero a');
window.addEventListener('scroll', () => {
    const heroHeight = document.querySelector('#hero').offsetHeight;
    if(window.scrollY > heroHeight) {
        buyButton.classList.add('highlight');
    } else {
        buyButton.classList.remove('highlight');
    }
});

// Validação simples do formulário
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;
    form.querySelectorAll('input[required], select[required]').forEach(input => {
        if(!input.value) {
            valid = false;
            input.style.borderColor = '#ff375f';
        } else {
            input.style.borderColor = '#d0d0d0';
        }
    });

    if(valid) {
        alert('Formulário enviado com sucesso!');
        form.reset();
    } else {
        alert('Preencha todos os campos obrigatórios.');
    }
});
