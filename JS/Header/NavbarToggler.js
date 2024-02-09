function NavResposive() {
  const NavToggle = document.querySelector("#menu-icon");

  NavToggle.addEventListener("click", () => {
    const nav = document.querySelector("#headernavbar");
    NavToggle.classList.add("active");

    if (nav.style.maxHeight) {
        NavToggle.classList.remove("active");
        nav.style.maxHeight = null; // Colapsa el menú
      } else {
        nav.style.display = "block"; // Muestra el menú
        nav.style.maxHeight = nav.scrollHeight + "px"; // Despliega el menú
      }

    console.log("Soy un menu responsive");
  });
}

export default NavResposive;
