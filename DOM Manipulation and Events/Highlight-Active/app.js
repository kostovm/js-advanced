function focused() {
    let inputs = document.querySelectorAll('input');
    let inputArray = Array.from(inputs);

    inputArray.forEach(x => {
        x.addEventListener('focus', focusHandler);
        x.addEventListener('blur', blurHandle);
    });
        
    

    function focusHandler(e) {
        let element = e.target;
        let div = element.parentElement;
        div.classList.add('focused');
    }

    function blurHandle(e) {
        let element = e.target;
        let div = element.parentElement;
        div.classList.remove('focused');
    }
}