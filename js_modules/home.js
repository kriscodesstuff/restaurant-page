

const home = () => {
    const div = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const homeDiv = document.createElement('div');

    homeDiv.setAttribute('id','home-div');
    h1.innerText = 'Bora Cafe';
    img.src = '../imgs/rest-img.jpg';
    p.innerText = 'this is a really great restaurant';
    
    div.appendChild(homeDiv);
    homeDiv.appendChild(h1);
    homeDiv.appendChild(img);
    homeDiv.appendChild(p);
}


export { home };