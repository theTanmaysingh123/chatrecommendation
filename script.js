document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (position < screenPosition) {
            el.classList.add("show");
        }
    });
});

