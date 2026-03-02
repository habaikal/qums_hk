// Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');

                    // Trigger bar chart animation if visible
                    if (entry.target.querySelector('#revenueChart')) {
                        setTimeout(() => {
                            const bars = document.querySelectorAll('.bar');
                            bars.forEach(bar => {
                                bar.style.height = bar.getAttribute('style').match(/--target-height:\s*([^;]+)/)[1];
                                setTimeout(() => {
                                    bar.querySelector('.bar-value').style.opacity = '1';
                                }, 1500);
                            });
                        }, 500);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });