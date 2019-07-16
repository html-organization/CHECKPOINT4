/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you require will output into a single css file (app.css in this case)
require('bootstrap');

// Need jQuery? Install it with "yarn add jquery", then uncomment to require it.
const $ = require('jquery');

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');

//Nav opacity on scroll

$(window).scroll(function () {
    let windScroll = $(window).scrollTop();
    if (windScroll >= 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

