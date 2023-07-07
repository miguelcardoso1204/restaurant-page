export default function createContacts() {
    const contactsDiv = document.createElement("div");
    const timetable = document.createElement("div");
    const address = document.createElement("div");
    const telephone = document.createElement("div");

    const timetableTitle = document.createElement("h3");
    const timetableMonday = document.createElement("p");
    const timetableTuesday = document.createElement("p");
    const timetableWednesday = document.createElement("p");
    const timetableThursday = document.createElement("p");
    const timetableFriday = document.createElement("p");
    const timetableSaturday = document.createElement("p");
    const timetableSunday = document.createElement("p");

    timetableTitle.textContent = "HORÁRIO";
    timetableMonday.textContent = "Segunda: Fechado";
    timetableTuesday.textContent = "Terça: 11:30 - 23:00";
    timetableWednesday.textContent = "Quarta: 11:30 - 23:00";
    timetableThursday.textContent = "Quinta: 11:30 - 23:00";
    timetableFriday.textContent = "Sexta: 11:30 - 00:00";
    timetableSaturday.textContent = "Sábado: 11:30 - 00:00";
    timetableSunday.textContent = "Domingo: 11:30 - 23:00";

    timetable.appendChild(timetableTitle);
    timetable.appendChild(timetableMonday);
    timetable.appendChild(timetableTuesday);
    timetable.appendChild(timetableWednesday);
    timetable.appendChild(timetableThursday);
    timetable.appendChild(timetableFriday);
    timetable.appendChild(timetableSaturday);
    timetable.appendChild(timetableSunday);

    const addressTitle = document.createElement("h3");
    const address1 = document.createElement("p");
    const address2 = document.createElement("p");

    addressTitle.textContent = "ENDEREÇO";
    address1.textContent = "Avenida Doutor Francisco Sá Carneiro 265";
    address2.textContent = "4630-232 Marco de Canaveses";

    address.appendChild(addressTitle);
    address.appendChild(address1);
    address.appendChild(address2);

    const telephoneTitle = document.createElement("h3");
    const telephoneNumber = document.createElement("p");
    telephone;

    telephoneTitle.textContent = "TELEFONE";
    telephoneNumber.textContent = "255 523 241";

    telephone.appendChild(telephoneTitle);
    telephone.appendChild(telephoneNumber);

    contactsDiv.appendChild(timetable);
    contactsDiv.appendChild(address);
    contactsDiv.appendChild(telephone);

    contactsDiv.id = "contactsDiv";
    return contactsDiv;
}
