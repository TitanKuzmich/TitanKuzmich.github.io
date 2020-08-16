import './modules/parallax';
import parallax from "./modules/parallax";
import flipCard from "./modules/flipCard";
import slider from "./modules/slider";
import scrolling from "./modules/scroll";
import modals from "./modules/modals";
import mask from "./modules/mask";
import forms from "./modules/form";
import bureger from "./modules/burger";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    bureger();
    modals();
    mask('[name="phone"]');
    parallax('.subheader','.subheader-particles');
    flipCard('.frontside', '.backside');
    slider('.carousel');
    scrolling('.pageup');
    forms();
});