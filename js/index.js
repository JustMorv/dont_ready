window.onscroll = function () { myFunction() };

var header = document.querySelector("#main-menu");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
document.addEventListener("click", (event) => {
  if (!event.target.classList.contains('mobile-nav')) {
    document.querySelector(".mobile-nav").classList.add('mobile-nav-active')

  }
  if (event.target.classList.contains('main-menu')|| event.target.classList.contains('mobile-nav-toggle') ||  event.target.classList.contains('Search') ) {
    document.querySelector(".mobile-nav").classList.remove('mobile-nav-active')
    console.log(event.target)
  }
})

