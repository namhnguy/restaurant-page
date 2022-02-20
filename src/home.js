function createHomeElement() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('home-container');

    const paragraph1 = document.createElement('p');
    paragraph1.textContent = 'Best Resturant In Your Country';
    mainContainer.appendChild(paragraph1);

    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Made with passions since 1900';
    mainContainer.appendChild(paragraph2);

    const homeImage = document.createElement('img');
    homeImage.setAttribute('src', 'images/chef.png');
    homeImage.setAttribute('alt', 'chef');
    mainContainer.appendChild(homeImage);

    const paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Order online or visit us!';
    mainContainer.appendChild(paragraph3);

    return mainContainer;
}

function loadHomeDiv() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createHomeElement());
}

export default loadHomeDiv;
