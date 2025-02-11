function validate() {
    
    let inputField = document.getElementById('email');

    inputField.addEventListener('change', validation);

    let validPattern = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/g;

    function validation () {
        if (!validPattern.test(inputField.value)){
            inputField.classList.add('error');
        }else {
            inputField.classList.remove('error');
        }
    }
}