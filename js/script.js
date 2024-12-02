document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu');
    const navBar = document.querySelector('.barra-navegacion');

    menuIcon.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
});

document.querySelectorAll('.btnBuy').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.getAttribute('data-product');
        const price = event.target.getAttribute('data-price');
        const image = event.target.getAttribute('data-image');

        // Obtener los productos almacenados en localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Añadir el nuevo producto
        cart.push({ product, price, image });

        // Guardar los productos actualizados en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Redirigir a cart.html
        window.location.href = `cart.html`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Deja de observar después de la animación
            }
        });
    }, {
        threshold: 0.1 // El porcentaje del elemento que debe ser visible
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
