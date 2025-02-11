function solve() {
  let text = document.getElementById(`text`).value.split(" ");
  let namingconvention = document.getElementById(`naming-convention`).value;

  let result = "";
  for (let word of text) {
    let firstLetter = word[0].toUpperCase();
    result += firstLetter;
    for (let i = 1; i < word.length; i++) {
      let nextLetter = word[i].toLowerCase();
      result += nextLetter;
    }
  }

  if (namingconvention === `Camel Case`) {
    let char = result[0];
    let newChar = char.toLowerCase();
    result = result.replace(char, newChar);
  } else if (namingconvention !== `Pascal Case`) {
    result = "Error!"
  }



  document.getElementById(`result`).textContent = result;


}