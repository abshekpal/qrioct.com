

// Navbar Toggle
function toggle() {
    var header = document.getElementById("header")
    header.classList.toggle('active')
}



// For navbar animation
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {

//     var currentScrollpos = window.pageYOffset;
//     if (prevScrollpos > currentScrollpos) {
//         document.getElementById("header").style.top = "0";
//     } else {
//         document.getElementById("header").style.top = "-60px";
//     }
//     prevScrollpos = currentScrollpos;
// }

// For box-shadow at navbar animation
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})


