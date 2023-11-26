document.addEventListener('DOMContentLoaded', function () {
    const productosContainer = document.getElementById('products-container');

    // Realiza la solicitud al archivo JSON local
    fetch("../data/products.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <div>
                        <span>$ ${product.price}</span>
                        <button class="add-to-cart" data-id="${product.id}"><i class='bx bxs-cart-add'></i></button>
                    </div>
                `;

                productosContainer.appendChild(productCard);

                // Agregar evento de clic al botón
                const addToCartButton = productCard.querySelector('.add-to-cart');
                addToCartButton.addEventListener('click', function () {
                    addToCart(product);
                });
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));

    function addToCart(product) {
        // Obtener productos del localStorage
        const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

        // Agregar el nuevo producto al carrito
        cartProducts.push(product);

        // Guardar el carrito actualizado en el localStorage
        localStorage.setItem('cart', JSON.stringify(cartProducts));

        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1000,
        })
       
    }
    

});
