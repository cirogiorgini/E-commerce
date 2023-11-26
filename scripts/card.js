document.addEventListener('DOMContentLoaded', function () {
    const productosContainer = document.getElementById('products-container');
    const sortDropdown = document.getElementById('sortDropdown');

    let allProducts = []; // Almacena todos los productos originales

    // Realiza la solicitud al archivo JSON local
    fetch("../data/products.json")
        .then(res => res.json())
        .then(data => {
            allProducts = data; // Guarda todos los productos originales

            // Llama a la función para renderizar productos
            renderProducts(allProducts);

            // Agrega evento de cambio al dropdown
            sortDropdown.addEventListener('change', function () {
                const sortOrder = this.value;

                // Ordena los productos según la opción seleccionada
                const sortedProducts = sortProducts(allProducts, sortOrder);

                // Llama a la función para renderizar los productos ordenados
                renderProducts(sortedProducts);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));

    function sortProducts(products, sortOrder) {
        const sortedProducts = [...products]; // Copia los productos para no modificar el original

        // Ordena los productos según la opción seleccionada
        if (sortOrder === 'az') {
            sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOrder === 'za') {
            sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
        }

        return sortedProducts;
    }

    function renderProducts(products) {
        // Limpia el contenedor de productos
        productosContainer.innerHTML = '';

        products.forEach(product => {
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
    }

    function addToCart(product) {
        // Obtén los productos actuales del carrito desde el localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
        // Agrega el nuevo producto al carrito
        cart.push(product);
    
        // Guarda los productos actualizados en el localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
    
        // Muestra la notificación de éxito
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1000,
        });
    }
});
