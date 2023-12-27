const menu = () => {
const div = document.querySelector('#content');
const h1 = document.createElement('h1');
const menuCard = document.createElement('div');
const menuName = document.createElement('h1');
const p = document.createElement('p');
const img = document.createElement('img');

h1.innerText = 'Menu';
menuName.innerText = 'Creme Brulee';
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus.'
img.src = '../imgs/maple-creme-brulee-1200-50.jpg';

div.appendChild(h1);
div.appendChild(menuCard);
menuCard.appendChild(menuName);
menuCard.appendChild(p);
menuCard.appendChild(img);
}

export { menu };