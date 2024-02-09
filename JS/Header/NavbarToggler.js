function NavResposive() {
  const NavToggle = document.querySelector("#menu-icon");

  NavToggle.addEventListener("click", () => {
    const nav = document.querySelector("#headernavbar");
    NavToggle.classList.toggle("active");
    

    if (nav.style.maxHeight === "0px" || !nav.style.maxHeight) {
      nav.style.display = "block";
      setTimeout(() => {
        nav.style.maxHeight = "500px";
      }, 50); // Establecer el max-height basado en la altura total del contenido
    } else {

      setTimeout(() => {
        nav.style.maxHeight = null;
      }, 50);
      
    }

    console.log("Soy un menu responsive");
  });
}

export default NavResposive;
