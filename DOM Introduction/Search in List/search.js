function search() {
   let listOfTowns = document.querySelectorAll("#towns li"); //=> masiv ot obekti

   let searched = document.getElementById("searchText").value;

   let foundCount = 0;
   for (let line of listOfTowns) {
      let town = line.textContent;
      if (town.includes(searched) && searched !== "") {
         line.style.fontWeight = "bold";
         line.style.textDecoration = "underline";
         foundCount++;
      } else {
         line.style.fontWeight = "";
         line.style.textDecoration = "";
      }
   }

   document.getElementById("result").textContent = `${foundCount} matches found`;

}
