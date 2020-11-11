
export default (selector) => {
    const elements = document.querySelectorAll(selector);
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        elements.forEach(e => {
            e.style.backgroundPositionY = - e.dataset.paralax*(scrollPosition - e.offsetTop) + 'px';
        })
    });
}
