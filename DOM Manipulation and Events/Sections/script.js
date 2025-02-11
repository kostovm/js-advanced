function create(words) {

   let elementsField = document.getElementById('content');
   
   for (let word of words){
      let newDiv = document.createElement('div');
      let newParagraph = document.createElement('p');

      newParagraph.textContent = word;
      newParagraph.style.display = 'none';

      newDiv.addEventListener('click', function showContent () {
         newParagraph.style.display = '';
      });

      newDiv.appendChild(newParagraph);
      elementsField.appendChild(newDiv);
   }

}