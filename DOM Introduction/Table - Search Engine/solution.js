function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = document.querySelectorAll("tbody tr");
      let input = document.querySelector("input").value;

      for (let row of rows) {
         let studentInfo = row.textContent;
         if (studentInfo.includes(input) && input !== "") {
            row.setAttribute("class", "select");
         } else {
            row.removeAttribute("class");
         }
      }

   }
}