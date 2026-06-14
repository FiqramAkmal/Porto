document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const revealElements = document.querySelectorAll('.reveal');
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleNavbarScroll = () => {
        if (!navbar) {
            return;
        }

        navbar.classList.toggle('scrolled', window.scrollY > 50);
    };

    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    if (revealElements.length) {
        revealElements.forEach((element) => {
            const delay = element.dataset.revealDelay || '0';
            element.style.setProperty('--reveal-delay', `${delay}ms`);
        });

        if (prefersReducedMotion) {
            revealElements.forEach((element) => element.classList.add('active'));
        } else {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.16,
                rootMargin: '0px 0px -60px 0px'
            });

            revealElements.forEach((element) => revealObserver.observe(element));
        }
    }

    const closeMobileMenu = () => {
        if (!navLinks || !menuToggle) {
            return;
        }

        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = 'auto';
    };

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');

            if (icon) {
                icon.classList.toggle('fa-bars', !isActive);
                icon.classList.toggle('fa-times', isActive);
            }

            menuToggle.setAttribute('aria-expanded', String(isActive));
            document.body.style.overflow = isActive ? 'hidden' : 'auto';
        });
    }

    navItems.forEach((item) => {
        item.addEventListener('click', (event) => {
            const targetId = item.getAttribute('href');
            if (!targetId || !targetId.startsWith('#')) {
                return;
            }

            const targetElement = document.querySelector(targetId);
            if (!targetElement) {
                return;
            }

            event.preventDefault();
            closeMobileMenu();

            const navHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = targetElement.offsetTop - navHeight + 2;

            window.scrollTo({
                top: targetPosition,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        });
    });

    if (!prefersReducedMotion && parallaxElements.length) {
        const handleParallax = () => {
            const scrollTop = window.scrollY;

            parallaxElements.forEach((element) => {
                const speed = Number(element.dataset.parallax || 0.04);
                const offset = scrollTop * speed;
                element.style.transform = `translate3d(0, ${offset}px, 0)`;
            });
        };

        handleParallax();
        window.addEventListener('scroll', handleParallax, { passive: true });
    }
});
