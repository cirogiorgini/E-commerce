

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

  
  const additionalData = {
    theme: localStorage.getItem('theme'),
  };

  localStorage.setItem('additionalData', JSON.stringify(additionalData));
});

// Recuperar y procesar la información adicional almacenada en el localStorage
const savedAdditionalData = localStorage.getItem('additionalData');
if (savedAdditionalData) {
  const parsedAdditionalData = JSON.parse(savedAdditionalData);
  
}

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validar nombre
  if (name.length < 3) {
      showError('Nombre debe tener al menos 3 caracteres.');
      return;
  }

  // Validar correo electrónico
  if (!validateEmail(email)) {
      showError('Correo electrónico no válido.');
      return;
  }

  // Validar mensaje
  if (message.length === 0) {
      showError('Mensaje no puede estar vacío.');
      return;
  }

  // Si no hay errores, mostrar SweetAlert2
  showSuccess();
}

function showError(errorMessage) {
  Swal.fire({
      icon: 'error',
      title: 'Error',
      text: errorMessage,
  });
}

function showSuccess() {
  Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Formulario enviado correctamente',
  });
  // Aquí puedes enviar el formulario, por ejemplo, usando AJAX
  // document.getElementById('contactForm').submit();
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


