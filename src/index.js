import { home } from "../js_modules/home";
import { menu } from "../js_modules/menu";
import { contact } from "../js_modules/contact";

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');


homeTab.addEventListener('click', () => {
    if(!document.querySelector('#home-div')){
      home();
    };
    
})

menuTab.addEventListener('click', () => {
    if(!document.querySelector('#menu-div')){
        menu();
    };
    
})

contactTab.addEventListener('click', () => {
    if(!document.querySelector('#contact-div')){
        contact();
    };
    
})