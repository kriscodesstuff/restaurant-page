import { home } from "../js_modules/home";
import { menu } from "../js_modules/menu";

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

homeTab.addEventListener('click', () => {
    home();
})

menuTab.addEventListener('click', () => {
    menu();
})