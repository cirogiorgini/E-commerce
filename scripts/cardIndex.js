document.addEventListener('DOMContentLoaded', function () {
  const productosContainer = document.getElementById('products-container');

  // Realiza la solicitud al archivo JSON local
  fetch("./data/products.json")
    .then(res => res.json())
    .then(data => {
      // Filtra los productos con más de 30 en sale
      const productosFiltrados = data.filter(producto => producto.sale > 30);

      // Realiza las tarjetas con la información filtrada
      productosFiltrados.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
          <img src="${producto.image}" alt="${producto.title}">
          <h3>${producto.title}</h3>
          <div>
            <span>$ ${producto.price}</span>
            <button><i class='bx bxs-cart-add'></i></button>
          </div>
        `;

        productosContainer.appendChild(productCard);
      });
    })
    .catch(error => console.error('Error al obtener los datos:', error));
});