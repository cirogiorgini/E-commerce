document.addEventListener('DOMContentLoaded', function () {
  const productosContainer = document.getElementById('products-container');

  // Obtener datos del localStorage
  var cartData = JSON.parse(localStorage.getItem('cart')) || [];

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
            <button class="add-to-cart" onclick="agregarAlCarrito(${JSON.stringify(producto)})"><i class='bx bxs-cart-add'></i></button>
          </div>
        `;

        productosContainer.appendChild(productCard);

        // Agregar evento de clic al botón dentro del bucle forEach
        const addToCartButton = productCard.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', function () {
          agregarAlCarrito(producto);
        });
      });
    })
    .catch(error => console.error('Error al obtener los datos:', error));

  // Función para agregar productos al carrito
  function agregarAlCarrito(producto) {
    // Obtener productos del localStorage
    const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

    // Agregar el nuevo producto al carrito
    cartProducts.push(producto);

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cartProducts));

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1000,
    });
  }
});
