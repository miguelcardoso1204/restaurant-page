export default function createMenuItem(name, description, price) {
    const itemDiv = document.createElement("div");
    const itemName = document.createElement("h3");
    const itemDescription = document.createElement("p");
    const itemPrice = document.createElement("p");

    itemDiv.classList.add("menuItem");
    itemName.classList.add("itemName");
    itemDescription.classList.add("itemDescription");
    itemPrice.classList.add("itemPrice");

    itemName.innerHTML = name;
    itemDescription.innerHTML = description;
    itemPrice.innerHTML = price;

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemDescription);
    itemDiv.appendChild(itemPrice);

    return itemDiv;
}
