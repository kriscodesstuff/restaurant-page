

const home = () => {
    const div = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h1.innerText = 'Bora Cafe';
    img.src = '../imgs/rest-img.jpg';
    p.innerText = 'this is a really great restaurant';

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);
}


export { home };