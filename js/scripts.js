
function nav(){
  const navToggler = document.querySelector(".js-nav-toggler");

  const togglerNav = () => {
    navToggler.classList.toggle("active");
  }

  navToggler.addEventListener("click", togglerNav);
}
nav();