import loadHomeDiv from "./home";
import loadMenuDiv from "./menu";
import loadContactDiv from "./contact";

function createHeaderElement() {
    const header = document.createElement("header");
    header.classList.add("header");

    const resturantName = document.createElement("h1");
    resturantName.textContent = "Resturant Name";
    header.appendChild(resturantName);

    const navBar = document.createElement("nav");

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.classList.add('btn-nav');
    homeButton.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            return;
        }
        setActiveButton(homeButton);
        loadHomeDiv()
    });
    navBar.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';
    menuButton.classList.add('btn-nav');
    menuButton.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            return;
        }
        setActiveButton(menuButton);
        loadMenuDiv()
    });
    navBar.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.classList.add('btn-nav');
    contactButton.addEventListener('click', function (e) {
        if (e.target.classList.contains('active')) {
            return;
        }
        setActiveButton(contactButton);
        loadContactDiv()
    });
    navBar.appendChild(contactButton);

    header.appendChild(navBar);

    return header;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".btn-nav");
    buttons.forEach((button) => {
        button.classList.remove("active");
    });

    button.classList.add("active");
}

function makeWebsite() {
    const parentDiv = document.querySelector('#content');

    const headerElement = createHeaderElement();
    parentDiv.appendChild(headerElement);


    const mainDiv = document.createElement('main');
    mainDiv.classList.add('main');
    parentDiv.appendChild(mainDiv);

    setActiveButton(document.querySelector('.btn-nav'));
    loadHomeDiv();
}

makeWebsite();