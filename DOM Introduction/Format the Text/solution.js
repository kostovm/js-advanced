function solve() {
  const unFormatedText = document.getElementById("input").value;
  const sentences = unFormatedText.split(".").filter((s) => s !== "").map((s) => s + ".");
  const result = document.getElementById("output");

  while (sentences.length > 3) {
    let newText = sentences.splice(0, 3).join(" ");
    result.innerHTML += `<p>${newText}</p>`
  }

  const lastText = sentences.splice(0, 3).join(" ");
  result.innerHTML += `<p>${lastText}</p>`

}

