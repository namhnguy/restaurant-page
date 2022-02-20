function createContactElement() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('contact-container');

    const name = document.createElement('h2');
    name.textContent = "Bob Ross";
    mainContainer.appendChild(name);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123 456 789'
    mainContainer.appendChild(phoneNumber);

    const address = document.createElement('p');
    address.textContent = '123 Bob Lane'
    mainContainer.appendChild(address);

    return mainContainer;
}

function loadContactDiv() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createContactElement());
}

export default loadContactDiv;