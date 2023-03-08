// animacion barras 
window.onscroll = function(){
    efectoHabiliades()
};

function efectoHabiliades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
    }
}


function enviarFormulario() {
    var xhr = new XMLHttpRequest();
    var url = 'https://formspree.io/your_email_here';
  
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var tema = document.getElementById('tema').value;
    var mensaje = document.getElementById('mensaje').value;
  
    // Crear un objeto con los datos del formulario
    var datos = {
      nombre: nombre,
      email: email,
      tema: tema,
      mensaje: mensaje
    };
  
    // Configurar la solicitud AJAX
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Si la solicitud se ha completado correctamente, mostrar un mensaje de éxito y limpiar los campos del formulario
        alert('Su mensaje ha sido enviado con éxito. ¡Gracias por contactarnos!');
        document.getElementById('contact-form').reset();
      } else if (xhr.readyState === 4) {
        // Si ha habido un error en la solicitud, mostrar un mensaje de error
        alert('Ha habido un error al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.');
      }
    };
  
    // Enviar la solicitud AJAX con los datos del formulario
    xhr.send(JSON.stringify(datos));
    return false;
  }
  