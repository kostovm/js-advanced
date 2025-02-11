function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let resultDiv = document.getElementById('result');
    gradient.addEventListener("mousemove", hoverHandler);
    gradient.addEventListener('mouseout', clearHandler);

    function hoverHandler(e) {

        let offsetX = e.offsetX;
        let element = e.target;
        let elementX = element.clientWidth;

        let xPercent = Math.trunc((offsetX / elementX) * 100);
        resultDiv.textContent = `${xPercent}%`;
    }

    function clearHandler() {
        resultDiv.textContent = "";
    }
}