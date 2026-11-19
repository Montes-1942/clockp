
// =========================================
// RELOJ DIGITAL
// =========================================

function updateClock() {

    const now = new Date();

    const time = now.toLocaleTimeString('es-CO');

    const date = now.toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('time').textContent = time;

    document.getElementById('date').textContent = date;
}

updateClock();

setInterval(updateClock, 1000);


// =========================================
// SLIDER DE TRES FOTOGRAFÍAS
// =========================================

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dots button');

let currentSlide = 0;
let sliderInterval;

// Mostrar fotografía seleccionada

function showSlide(index) {

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    dots[currentSlide].removeAttribute('aria-current');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    dots[currentSlide].setAttribute('aria-current', 'true');
}

// Avanzar a la siguiente fotografía

function nextSlide() {

    const next = (currentSlide + 1) % slides.length;

    showSlide(next);
}

// Iniciar intercambio automático

function startSlider() {

    clearInterval(sliderInterval);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        sliderInterval = setInterval(nextSlide, 5000);
    }
}

// Permitir cambiar de fotografía al presionar los indicadores

dots.forEach((dot, index) => {

    dot.addEventListener('click', () => {

        showSlide(index);
        startSlider();

    });

});

// Iniciar el slider

if (slides.length > 0 && slides.length === dots.length) {
    startSlider();
}
