function setupMenu() {

const options = document.querySelectorAll(".option");

options.forEach((option) => {
  const submenu = option.querySelector("ul");

  option.addEventListener("click", () => {
    if (submenu) {
      if (submenu.style.maxHeight === "0px" || !submenu.style.maxHeight) {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
      } else {
        submenu.style.maxHeight = 0;
      };
    };

    options.forEach((opt) => {
      if (opt !== option) {
        const sub = opt.querySelector("ul");
        if (sub) {
          sub.style.maxHeight = 0;
        };
      };
    });
  });

  if (submenu) {
    submenu.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  };
});
};

export default setupMenu;
