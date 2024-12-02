document.querySelectorAll('select').forEach(select => {
    select.addEventListener('mouseenter', function() {
        this.size = this.options.length;
    });

    select.addEventListener('mouseleave', function() {
        this.size = 1;
    });
});

const shopCart = document.querySelector('.shopCart');

shopCart.addEventListener('click', (e) => {
    e.preventDefault();
    alert('FUNCIÓN NO DISPONIBLE');
});
