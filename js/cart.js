document.addEventListener('DOMContentLoaded', (event) => {
    const productInfoDiv = document.getElementById('product-info');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > 0) {
        cart.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h2>Producto: ${item.product}</h2>
                <p class="price">Precio: $${item.price}</p>
                <img src="${item.image}" alt="${item.product}" style="width:250px;height:280px;border-radius:5px;">
                <button class="payButton" data-index="${index}">Pagar</button>
                <button class="deleteButton" data-index="${index}">Eliminar</button>
            `;
            productInfoDiv.appendChild(productDiv);
        });
    } else {
        productInfoDiv.innerHTML = 'No se ha seleccionado ningún producto.';
    }

    document.querySelectorAll('.deleteButton').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            cart.splice(index, 1); 
            localStorage.setItem('cart', JSON.stringify(cart)); 
            location.reload();
        });
    });

    document.querySelectorAll('.payButton').forEach(button => {
        button.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            const item = cart[index];
            let target = window.prompt("Ingrese su número de tarjeta: 16 Dígitos");

            if (!/^\d{16}$/.test(target)) {
                alert('El número de tarjeta debe tener exactamente 16 dígitos. Intente de nuevo.');
            } else {
                const priceElement = document.querySelectorAll('.price')[index];
                priceElement.innerHTML = `Precio: -$${item.price}`;
                priceElement.style.color = 'red';

                alert(`Ha realizado la compra con: ${target}`);
                alert(`Tiempo estimado de llegada: 15 minutos`);

                setTimeout(() => {
                    cart.splice(index, 1);
                    localStorage.setItem('cart', JSON.stringify(cart));
                    location.reload();
                }, 3000);
            }
        });
    });
});
