function lockedProfile() {
    
    let main = document.getElementById('main');
    main.addEventListener('click', showHide);

    function showHide (e) {

        if (e.target.tagName === 'BUTTON' && e.target.parentElement.querySelectorAll('input[type="radio"]')[0].checked === false){

            let profileElement = e.target.parentElement;
            let hiddenElement = profileElement.children[profileElement.children.length - 2]
            
            if (e.target.textContent === "Show more"){
                hiddenElement.style.display = 'block';
                e.target.textContent = "Hide it";
            } else {
                hiddenElement.style.display = 'none';
                e.target.textContent = "Show more";
            }
        } 

    }
}