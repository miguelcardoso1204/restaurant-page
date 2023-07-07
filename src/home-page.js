import createHome from "./createHome.js";
import createMenu from "./createMenu.js";
import createContacts from "./createContacts.js";

//Create Navbar
function createNavbar() {
    //Navbar
    const navBar = document.createElement("div");
    navBar.id = "nav";

    //Navbar List
    const navBarList = document.createElement("ul");

    //Navbar List Items (Home)
    const homeButton = document.createElement("li");
    homeButton.innerText = "HOME";
    homeButton.addEventListener("click", () => {
        initializeWebsite("home");
        console.log("here");
    });

    //Navbar List Items (Menu)
    const menuButton = document.createElement("li");
    menuButton.innerText = "MENU";
    menuButton.addEventListener("click", () => {
        initializeWebsite("menu");
    });

    //Navbar List Items (Contactos)
    const contactsButton = document.createElement("li");
    contactsButton.innerText = "CONTACTOS";
    contactsButton.addEventListener("click", () => {
        initializeWebsite("contacts");
    });

    navBarList.appendChild(homeButton);
    navBarList.appendChild(menuButton);
    navBarList.appendChild(contactsButton);
    navBar.appendChild(navBarList);

    return navBar;
}

function createFooter() {
    const footer = document.createElement("div");
    footer.innerText = "Copyright © 2023 miguelcardoso1204";
    footer.id = "footer";
    const img = document.createElement("img");
    img.src = "../src/github.png";

    footer.appendChild(img);

    return footer;
}

export default function initializeWebsite(page = "home") {
    //Get content div
    const content = document.getElementById("content");
    content.innerHTML = "";

    content.appendChild(createNavbar());
    if (page === "home") {
        content.appendChild(createHome());
    } else if (page === "menu") {
        content.appendChild(createMenu());
    } else if (page === "contacts") {
        content.appendChild(createContacts());
    }

    content.appendChild(createFooter());
}
