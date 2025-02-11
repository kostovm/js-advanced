function addItem() {

    let inputField = document.getElementById('newItemText');
    let itemsList = document.getElementById('items');

    if (inputField.value !== ''){
        let newItem = document.createElement('li');
        newItem.textContent = inputField.value;
        

        let removeLink = document.createElement('a');
        removeLink.textContent = '[Delete]';
        removeLink.href = '#';
        removeLink.addEventListener('click', removeItem);

        newItem.appendChild(removeLink);
        itemsList.appendChild(newItem);

        inputField.value = '';
    }
}

function removeItem (event){
    event.preventDefault();
    event.target.parentElement.remove();

}