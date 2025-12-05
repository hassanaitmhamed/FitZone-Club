document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Gestion du Menu (Responsive)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // Bascule la classe 'active' sur le menu pour l'afficher/cacher
            mainNav.classList.toggle('active');
            
            // Changer l'icône (fa-bars <-> fa-times)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Validation SIMPLE du Formulaire de Contact (Pas de BDD, juste un message)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche l'envoi réel (pas de base de données)

            // Récupérer les valeurs
            const nom = contactForm.querySelector('#nom').value;
            const email = contactForm.querySelector('#email').value;
            const message = contactForm.querySelector('#message').value;

            if (nom && email && message) {
                // Afficher une alerte de confirmation simple
                alert(`Merci, ${nom} ! Votre demande d'inscription/contact a été reçue. Nous vous répondrons bientôt à ${email}.`);
                contactForm.reset(); // Réinitialiser le formulaire après l'alerte
            } else {
                alert('Veuillez remplir tous les champs obligatoires (Nom, Email, Message).');
            }
        });
    }

    // 3. Effet dynamique : Soulignement actif sur la navigation
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        // Supprimer la classe 'active' par défaut et la rajouter au lien correspondant
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

});
        // Basculement du menu mobile
        const menuToggle = document.getElementById('menuToggle');
        const mainNav = document.getElementById('mainNav');

        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.textContent = mainNav.classList.contains('active') ? '✕' : '☰';
        });

        // Fermer le menu en cliquant en dehors
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                mainNav.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });

        // Défilement fluide pour les liens d'ancrage
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                        mainNav.classList.remove('active');
                        menuToggle.textContent = '☰';
                    }
                }
            });
        });

        // Ajouter un effet de défilement à l'en-tête
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            const header = document.querySelector('.main-header');
            
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });

        // Basculer le contenu de l'article
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const articleCard = e.target.closest('.article-card');
                const articleFull = articleCard.querySelector('.article-full');
                const isExpanded = articleFull.classList.contains('show');
                
                if (isExpanded) {
                    articleFull.classList.remove('show');
                    e.target.textContent = 'Lire la suite →';
                    e.target.classList.remove('expanded');
                } else {
                    articleFull.classList.add('show');
                    e.target.textContent = 'Réduire ↑';
                    e.target.classList.add('expanded');
                    
                    // Défilement fluide vers l'article
                    setTimeout(() => {
                        articleCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                }
            });

        });
document.addEventListener('DOMContentLoaded', () => {
    const prices = document.querySelectorAll('.price');
    prices.forEach(priceEl => {
        const target = parseInt(priceEl.getAttribute('data-price'));
        let count = 0;
        const interval = setInterval(() => {
            count += 10;
            if(count >= target) {
                count = target;
                clearInterval(interval);
            }
            priceEl.textContent = `${count} MAD / Mois`;
        }, 20);
    });
});
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < windowHeight - 100){
            el.classList.add('active');
        }
    });
});
