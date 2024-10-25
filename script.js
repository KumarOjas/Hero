document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.transform = 'translateY(0)';
    heroContent.style.opacity = '1';

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        heroContent.style.transform = `translate(-${x * 5}px, -${y * 5}px)`;
    });
});
