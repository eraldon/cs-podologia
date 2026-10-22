/**
 * CS PODOLOGIA CLÍNICA - SCRIPTS DE INTERATIVIDADE E CONVERSÃO
 * Dra. Camila Sousa | Torre Comercial Avenida Shopping - Meireles, Fortaleza
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile Hamburger
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (btnMenu && navMenu) {
        btnMenu.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            btnMenu.classList.toggle('open');
            btnMenu.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                btnMenu.classList.remove('open');
                btnMenu.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // 2. Header Efeito Scrolled
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. FAQ Accordion Interativo
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            // Fecha outros itens abertos
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna o atual
            item.classList.toggle('active', !isActive);
        });
    });

    // 4. Highlight de Navegação Ativa no Scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset + 120;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});
