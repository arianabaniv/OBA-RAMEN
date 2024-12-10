
// Inicialización de LocomotiveScroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
  });
  
  // Animaciones GSAP para el contenido del header
  gsap.from(".logo", { duration: 1, opacity: 0, y: -50, ease: "power3.out" });
  gsap.from(".title", { duration: 1, opacity: 0, y: 50, delay: 0.5, ease: "power3.out" });
  gsap.from(".btn", { duration: 1, opacity: 0, scale: 0.8, delay: 1, ease: "elastic.out(1, 0.5)" });
  
  // Menú Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
  });
  
  // Animación de los enlaces del menú
  menu.addEventListener("transitionend", () => {
    if (menu.classList.contains("active")) {
      gsap.fromTo(
        ".menu ul li",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out" }
      );
    }
  });
  
  // Crear dibujos flotantes en la sección de introducción
  const introDrawing = document.querySelector(".intro-drawing");
  
  function createDrawing(e) {
    const { clientX, clientY } = e;
    const drawing = document.createElement("div");
    drawing.classList.add("drawing");
    const img = document.createElement("img");
    img.src = "img/ Abuela.webp";  // Cambia la imagen
    drawing.appendChild(img);
  
    drawing.style.left = `${clientX - 25}px`;
    drawing.style.top = `${clientY - 25}px`;
  
    introDrawing.appendChild(drawing);
  
    gsap.to(drawing, { opacity: 1, scale: 1, duration: 0.5 });
  
    setTimeout(() => {
      gsap.to(drawing, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        onComplete: () => drawing.remove(),
      });
    }, 1000);
  }
  
  document.addEventListener("mousemove", createDrawing);
  


  


  //galeria
  







  