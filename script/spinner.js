  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0"; 
    preloader.style.transition = "opacity 0.5s ease-out";

    setTimeout(() => {
      preloader.style.display = "none"; 
    }, 500); 
  });