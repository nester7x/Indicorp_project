$(function () {
    /*menu-burger*/

    const menuBtn = document.querySelector('.menu__btn');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelectorAll('.menu__link');
    const aboutSection = document.querySelector('.about');

    menuBtn.onclick = function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        aboutSection.classList.toggle('active');
    };

    menuLink.forEach(function (item) {
        item.onclick = function () {
            menuBtn.classList.remove('active');
            menu.classList.remove('active');
            aboutSection.classList.remove('active');
        };
    })

    /*----------------------------------------*/

    /*header fixed*/

    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 700) {
            header.classList.add('fixed')
        }
        else {
            header.classList.remove('fixed')
        }
    });

    /*----------------------------------------*/

})