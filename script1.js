$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});
window.onload=function(){
    document.getElementById("autoplay").play();
}
// Add the 'open' and 'animate' classes to the hamburger icon element when the navigation menu is opened or closed
document.querySelector('.hamburger-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    this.classList.toggle('animate');
});