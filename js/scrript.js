// Get the navbar
let navbar = document.getElementById("myHeader");
let span = document.querySelector(".up");
let nav = document.querySelector(".hero .navbar");

// respnsece menu
let icon = document.querySelector(".hero .nav-m .icon");
icon.addEventListener("click", () => {
  icon.classList.toggle("active");
  if (nav.style.background != "rgb(3, 186, 213)") {
    nav.style.background = "rgb(3, 186, 213)";
  } else {
    if (window.pageYOffset <= 600) {
      nav.style.background = "transparent";
    }
  }
});

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 600) {
    navbar.classList.add("sticky");
    nav.style.background = "rgb(3, 186, 213)";
  } else {
    navbar.classList.remove("sticky");
    if (!icon.classList.contains("active"))
      nav.style += "background: transparent !important";
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
  this.scrollY >= 200
    ? span.classList.add("show")
    : span.classList.remove("show");
};

// for up scroll
span.onclick = function () {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
