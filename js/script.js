var burger = document.querySelector('.menu__icon');
var menuBody = document.querySelector('.menu__body');
var body = document.querySelector('.body');
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    menuBody.classList.toggle('active');
    body.classList.toggle('lock');
});

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

var scroll = new SmoothScroll('.menu__list a[href*="#"]', {
    speed: 800
});

$(document).ready(function () {
    $('.slick').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
    });
});

