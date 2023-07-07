import createMenuItem from "./createMenuItem";

export default function createMenu() {
    const menu = document.createElement("div");
    menu.id = "menu";

    const menuTitle = document.createElement("h1");
    menuTitle.innerText = "MENU";
    menu.id = "menu";

    menu.appendChild(
        createMenuItem(
            "Relax Burger",
            "(Pão de hamburger + hamburger de novilho 200g + queijo cheddar + alface + tomate + cebola roxa)",
            "6.60€"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Pizza Relax",
            "(Base de pizza + molho de tomate + queijo mozzarella + azeitonas + cogumelos + bacon)",
            "7.00€"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Cachorro Relax",
            "(Pão de cachorro + queijo + fiambre + salsicha + molhos à escolha)",
            "4.60€"
        )
    );

    return menu;
}
