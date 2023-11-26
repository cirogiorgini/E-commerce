document.addEventListener('DOMContentLoaded', function () {
    // Obtener el cuerpo de la tabla
    var cartBody = document.getElementById('cartBody');

    // Utilizar forEach para agregar filas a la tabla
    actualizarCarritoYTabla();

    // Función para agregar una fila a la tabla
    function addProductToTable(product) {
        // Crear una nueva fila
        var row = document.createElement('tr');

        // Asignar un identificador único a cada fila
        var uniqueId = 'product_' + Math.random().toString(36).substr(2, 9);
        row.setAttribute('id', uniqueId);

        // Agregar celdas con los datos del producto
        row.innerHTML = `
            <td>${product.title}</td>
            <td>$${product.price}</td>
            <td>${product.sale}%</td>
            <td>
                <button class="eliminar-btn">Eliminar</button>
            </td>
        `;

        // Agregar la fila al cuerpo de la tabla
        cartBody.appendChild(row);

        // Asignar el evento de clic después de agregar la fila
        var eliminarBtn = row.querySelector('.eliminar-btn');
        eliminarBtn.addEventListener('click', function () {
            eliminarProducto(uniqueId, product.title);
        });
    }

    // Función para eliminar un producto
    async function eliminarProducto(uniqueId, productName) {
        // Obtener datos del localStorage
        var cartData = JSON.parse(localStorage.getItem('cart')) || [];

        // Obtener la fila por su identificador único
        var rowToRemove = document.getElementById(uniqueId);

        if (rowToRemove) {
            // Eliminar la fila de manera visual
            rowToRemove.remove();

            // Eliminar el producto del localStorage
            var updatedCart = cartData.filter(function (product) {
                return product.title !== productName;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));

            // Actualizar el carrito y la tabla después de la eliminación
            await actualizarCarritoYTabla();
        }
    }

    // Función para actualizar el carrito y la tabla
    function actualizarCarritoYTabla() {
        // Obtener datos del localStorage
        var updatedCart = JSON.parse(localStorage.getItem('cart')) || [];

        // Limpiar la tabla
        cartBody.innerHTML = '';

        // Utilizar forEach para agregar filas actualizadas a la tabla
        updatedCart.forEach(function (product) {
            addProductToTable(product);
        });
    }
});
