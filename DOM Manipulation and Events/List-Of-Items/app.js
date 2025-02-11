function addItem() {
    console.log('TODO:...');
    let input = document.getElementById('newItemText');
    let value = input.value;
    let ul = document.getElementById("items");

    let newLi = document.createElement("li");
    newLi.textContent = value;

    let deleteLink = document.createElement('a');
    deleteLink.textContent = "Delete"
    deleteLink.addEventListener("click", deleteHandler)
    newLi.appendChild(deleteLink);

    function deleteHandler(e) {
        let link = e.target;
        let li = link.parentElement;
        li.remove();
    }

    ul.appendChild(newLi);
}