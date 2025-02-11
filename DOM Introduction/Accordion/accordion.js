function toggle() {
    let currentState = document.querySelector(".button");
    let extraText = document.getElementById("extra");

    if (currentState.textContent === "More") {
        currentState.textContent = "Less";
        extraText.style.display = "block";
    } else {
        currentState.textContent = "More";
        extraText.style.display = "none";
    }

}