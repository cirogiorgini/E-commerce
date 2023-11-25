

window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const cerrarBtn = document.querySelector("#btn");
    const buscarBtn = document.querySelector(".bx-search")

    cerrarBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    buscarBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            cerrarBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }else{
            cerrarBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }
}

const themeToggle = document.getElementById('switchToggle');
const body = document.body;

// Verificar y aplicar el tema almacenado en el localStorage al cargar la página
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme + '-theme');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
  
  // Almacenar el tema actual en el localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  // Almacenar información adicional como JSON en el localStorage
  const additionalData = {
    theme: localStorage.getItem('theme'),
    // Agrega más datos aquí según sea necesario
  };

  localStorage.setItem('additionalData', JSON.stringify(additionalData));
});

// Recuperar y procesar la información adicional almacenada en el localStorage
const savedAdditionalData = localStorage.getItem('additionalData');
if (savedAdditionalData) {
  const parsedAdditionalData = JSON.parse(savedAdditionalData);
  
}


let card = document.getElementById(`card`);
// tarjetas home section
products.map((object) =>{
  card.innerHTML += `
  <div class="col">
    <div class="card">
      <img src="${object.image}" class="card-img-top" alt="${object.title}">
      <div class="card-body">
        <h5 class="card-title">${object.title}</h5>
        <p class="card-text">${object.description}</p>
        <p class="card-text">${object.price}
        <button class="btn btn-primary" onclick="agregarAlCarrito(${JSON.stringify(object)})">Agregar al carrito</button>
      </div>
    </div>
  </div>
  `
})



