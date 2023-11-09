const products = [
   
  {
  "id": 9,
  "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
  "price": 64,
  "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  "rating": {
  "rate": 3.3,
  "count": 203
  }
  },
  {
  "id": 10,
  "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
  "price": 109,
  "description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  "rating": {
  "rate": 2.9,
  "count": 470
  }
  },
  {
  "id": 11,
  "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  "price": 109,
  "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  "rating": {
  "rate": 4.8,
  "count": 319
  }
  },
  {
  "id": 12,
  "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
  "price": 114,
  "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
  "rating": {
  "rate": 4.8,
  "count": 400
  }
  },
  {
  "id": 13,
  "title": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
  "price": 599,
  "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
  "rating": {
  "rate": 2.9,
  "count": 250
  }
  },
  {
  "id": 14,
  "title": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
  "price": 999.99,
  "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
  "rating": {
  "rate": 2.2,
  "count": 140
  }
  },
  
  ]

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




