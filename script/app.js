var hamburger = document.querySelector('.hamburger');
var ul = document.querySelector('ul');

hamburger.addEventListener("click", () =>  {
    hamburger.classList.toggle('active');
    ul.classList.toggle('open');
})
