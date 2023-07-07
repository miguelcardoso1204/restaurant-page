export default function createHome() {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h1");
    title.innerText = "Relax Burguer";

    const viewMenu = document.createElement("button");
    viewMenu.innerText = "VER MENU";

    main.appendChild(title);
    main.appendChild(viewMenu);

    console.log(main);

    return main;
}
