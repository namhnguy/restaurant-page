function createMenuElement() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('menu-container');

    function createMenuItem(name, text) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const menuImage = document.createElement('img');
        menuImage.src = `images/pizzas/${name.toLowerCase()}.png`;
        menuImage.alt = name;
        menuItem.appendChild(menuImage);

        const menuHeading = document.createElement('h2');
        menuHeading.textContent = name;
        menuItem.appendChild(menuHeading);

        const menuText = document.createElement('p');
        menuText.textContent = text;
        menuItem.appendChild(menuText);

        return menuItem;
    }

    mainContainer.appendChild(createMenuItem('Carne', 'A pizza'));
    mainContainer.appendChild(createMenuItem('Colorato', 'A pizza'));
    mainContainer.appendChild(createMenuItem('Crema', 'A pizza'));
    mainContainer.appendChild(createMenuItem('Disgustoso', 'A pizza'));
    mainContainer.appendChild(createMenuItem('Gamberi', 'A pizza'));
    mainContainer.appendChild(createMenuItem('Pepe', 'A pizza'));
    mainContainer.appendChild(createMenuItem('Pomodoro', 'A pizza'));
    mainContainer.appendChild(createMenuItem('Salsiccia', 'A pizza'));

    return mainContainer;
}

function loadMenuDiv() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.appendChild(createMenuElement());
}

export default loadMenuDiv;