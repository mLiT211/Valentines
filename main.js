onload = () => {
  document.body.classList.remove("container");
  
  // Mostrar el mensaje y los botones después de 7 segundos
  setTimeout(() => {
    document.querySelector(".mensaje").style.display = "block";
    document.querySelector(".botones-container").style.display = "flex"; // Cambiar a flex para alinear verticalmente los botones
  }, 7000); // Cambiar a 7 segundos
  
  // Función para mostrar el texto cuando se presiona el botón "Sí"
  document.querySelector('.boton-yes').addEventListener('click', function() {
    // Obtener el elemento del texto que deseas mostrar
    var mensajeSi = document.querySelector('.mensaje-si');
    
    // Mostrar el texto
    mensajeSi.style.display = 'block';
  });
  
  // Seleccionar el botón "No" por su ID
  const botonNo = document.getElementById("botonNo");

  // Agregar un evento de escucha para cuando el ratón pase sobre el botón "No"
  botonNo.addEventListener("mouseover", () => {
    // Obtener el ancho y alto de la ventana del navegador
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calcular una posición aleatoria para el botón "No"
    const randomX = Math.random() * (windowWidth - botonNo.offsetWidth);
    const randomY = Math.random() * (windowHeight - botonNo.offsetHeight);

    // Aplicar la posición aleatoria al botón "No"
    botonNo.style.position = "fixed";
    botonNo.style.left = `${randomX}px`;
    botonNo.style.top = `${randomY}px`;
  });
};
