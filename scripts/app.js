const addButton = document.querySelector("#add"); // HTML Element -> object -> addEventlistener
const list = document.querySelector("#list");

addButton.addEventListener("click", function () {
    const inputBox = document.querySelector("#text-input");
    const li = document.createElement("li");
    li.textContent = inputBox.value;
    li.classList.add("list-content");
    li.style.border = "1px solid black";
    list.append(li);
    inputBox.value = "";
});