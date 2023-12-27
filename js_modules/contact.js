const contact = () => {
    const div = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const contactDiv = document.createElement('div');

    contactDiv.setAttribute('id','contact-div');
    h1.innerText = 'Contact';
    email.innerText = 'Email: 123gold@yahoo.com';
    phone.innerText = '222-222-2222';

    div.appendChild(contactDiv);
    contactDiv.appendChild(h1);
    contactDiv.appendChild(ul);
    ul.appendChild(email);
    ul.appendChild(phone);
}

export { contact }