
document.addEventListener('DOMContentLoaded', () => {
    // WhatsApp Widget
    const whatsappWidget = document.createElement('a');
    whatsappWidget.href = 'https://wa.me/233244491667';
    whatsappWidget.target = '_blank';
    whatsappWidget.className = 'whatsapp-widget';
    whatsappWidget.innerHTML = '<div class="whatsapp-icon"><i class="fab fa-whatsapp"></i></div>';
    document.body.appendChild(whatsappWidget);

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // AOS Initialization
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Swiper Initialization
    if (typeof Swiper !== 'undefined' && document.querySelector('.swiper-container')) {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});
