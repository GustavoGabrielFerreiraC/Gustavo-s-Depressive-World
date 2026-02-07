// Lógica da Lanterna (Flashlight)
const flashlight = document.getElementById('flashlight');

function moveFlashlight(x, y) {
    document.documentElement.style.setProperty('--cursor-x', x + 'px');
    document.documentElement.style.setProperty('--cursor-y', y + 'px');
}

document.addEventListener('mousemove', (e) => moveFlashlight(e.clientX, e.clientY));
document.addEventListener('touchstart', (e) => moveFlashlight(e.touches[0].clientX, e.touches[0].clientY));
document.addEventListener('touchmove', (e) => moveFlashlight(e.touches[0].clientX, e.touches[0].clientY));

// Lógica de Animação ao Rolar (Scroll Reveal)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Dispara quando 10% do item estiver visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar depois que já apareceu
        }
    });
}, observerOptions);

// Seleciona todos os itens da timeline para observar
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Lógica do Áudio e Tela Inicial
const startScreen = document.getElementById('start-screen');
const audio = document.getElementById('rain-audio');

startScreen.addEventListener('click', () => {
    startScreen.style.opacity = '0';
    setTimeout(() => startScreen.remove(), 1000); // Remove o elemento após o fade-out
    audio.play().catch(e => console.log("Erro ao reproduzir áudio:", e));
});