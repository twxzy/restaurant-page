// Seleciona a navbar e os links do menu
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Detecta o último scroll
let lastScrollTop = 0;

// Função para esconder ou mostrar a navbar ao rolar
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo - esconder a navbar
        navbar.classList.add('navbar-hidden');
    } else {
        // Rolando para cima - mostrar a navbar
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = scrollTop;
});

// Função para esconder a navbar após clicar em uma seção, exceto "Início"
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão do link

        // Remove classe "active" de todos os links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Adiciona "active" ao link clicado
        this.classList.add('active');

        // Obtém o ID da seção de destino
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Rola até a seção de forma suave
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Verifica se o item clicado é o "Início"
        if (targetId !== 'home') {
            // Após a rolagem suave, esconde a navbar se não for "Início"
            setTimeout(() => {
                navbar.classList.add('navbar-hidden');
            }, 1000); // Ajusta o tempo de delay conforme necessário
        } else {
            // Se for "Início", garantir que a navbar permaneça visível
            navbar.classList.remove('navbar-hidden');
        }
    });
});