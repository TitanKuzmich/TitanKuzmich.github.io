jQuery(function ($) {
    "use strict";

    window.addEventListener('DOMContentLoaded', () => {

        //menu
        const menu = document.querySelector('.main-navigation'),
            menuItem = document.querySelectorAll('.main-navigation-item'),
            hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('main-navigation-active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger-active');
                menu.classList.toggle('main-navigation-active');
            })
        })

        //header slider
        if($('.home-slider').length){
            $('.home-slider').slick({
                arrows: false,
                dots: true
            });
        }

        //lower slider
        if($('.lower-slider').length){
            $('.lower-slider').slick({
                arrows: false,
                dots: true
            });
        }
    })
});