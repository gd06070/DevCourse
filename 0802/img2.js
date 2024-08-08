let slides = document.querySelectorAll('#container > img');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

function showSlide() {
    for(let i = 0; i <slides.length; i++) {
        slides[i].classList.remove('active')
    }
    slides[n].classList.add('active');
}
