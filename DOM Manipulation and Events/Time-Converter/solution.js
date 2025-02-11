function attachEventsListeners() {

    const buttons = document.querySelectorAll('input[type="button"]');
    const allInputFields = document.querySelectorAll('input[type="text"]');

    let timeInSeconds = 0;

    const inSeconds = {
        'secondsBtn': 1,
        'minutesBtn': 60,
        'hoursBtn': 3600,
        'daysBtn': 86400
    }

    const devidedBySeconds = Object.values(inSeconds).sort((a, b) => b - a);


    for (let button of buttons){
        button.addEventListener('click', convertTime);
    }

    function convertTime (e) {
        
        const newTime = e.target.parentElement.children[1].value;
        const buttonType = e.target.id;

        timeInSeconds = newTime * inSeconds[buttonType];
        
        for (let i = 0; i < allInputFields.length; i++){
            allInputFields[i].value = timeInSeconds / devidedBySeconds[i];
        }

    }
}