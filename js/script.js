import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cadrs from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setInterval(() => openModal('.modal', modalTimerId), 45000); 

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-06-30');
    cadrs();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextAr: '.offer__slider-next',
        prevAr: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    
});
