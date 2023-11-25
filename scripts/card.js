document.addEventListener('DOMContentLoaded', function () {
    const productosContainer = document.getElementById('products-container');

    // Realiza la solicitud al archivo JSON local
    fetch("../data/products.json")
        .then(res => res.json())
        .then(data => {
            data.forEach(products => { // 
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${products.image}" alt="${products.title}">
                    <h3>${products.title}</h3>
                    <div>
                        <span>$ ${products.price}</span>
                        <button><i class='bx bxs-cart-add'></i></button>
                    </div>
                `;

                productosContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
});
