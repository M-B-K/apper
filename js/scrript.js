// Get the navbar
let navbar = document.getElementById("myHeader");
let span = document.querySelector(".up");



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
  this.scrollY >= 200?span.classList.add("show"):span.classList.remove("show");

};

// for up scroll
span.onclick = function(){
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
}