function deleteByEmail() {
    
    let dataTable = document.querySelectorAll('#customers tbody td');
    let inputField = document.querySelector('input[name="email"]');
    let resultField = document.getElementById('result');

    let isDeleted = false;

    for (let i = 1; i < dataTable.length; i++){
        if (dataTable[i].textContent === inputField.value){
            dataTable[i].parentElement.remove();
            isDeleted = true;
        }
    }

    if (isDeleted === true){
        inputField.value = '';
        resultField.textContent = 'Deleted.'
    } else {
        resultField.textContent = 'Not found.'
    }
}