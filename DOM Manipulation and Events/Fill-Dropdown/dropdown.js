function addItem() {
    
    const textField = document.getElementById('newItemText');
    const valueField = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');
    const button = document.querySelector('input[type="button"]');


        if (textField.value.trim() !== "" && valueField.value.trim() !== ""){

            let newOption = document.createElement('option');
            newOption.textContent = textField.value;
            newOption.value = valueField.value;
            menu.appendChild(newOption);

            textField.value = '';
            valueField.value = '';
        }


}