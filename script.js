// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


var change = document.getElementsByName('bar');
// console.log(change[0].style.)

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>870)
    {
        change[0].classList.add('sticky');
        change[0].style.backgroundColor = '#000000';
    }
    else{
        change[0].classList.remove('sticky');
        change[0].style.backgroundColor = 'transparent';
    }
    console.log(scroll)
})