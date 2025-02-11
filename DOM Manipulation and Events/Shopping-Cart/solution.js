function solve() {
   
   let products = document.getElementsByClassName('product');
   let outputArea = document.getElementsByTagName('textarea')[0];
   let checkoutButton = document.getElementsByClassName('checkout')[0];

   let result = '';
   let total = 0;
   let listOfProducts = [];

   for (let product of products){
      product.children[2].children[0].addEventListener('click', addProduct);
   }

   checkoutButton.addEventListener('click', checkOut);

   function addProduct (event) {

      let product = event.target.parentElement.parentElement;

      let productName = product.children[1].children[0].textContent;
      let productPrice = Number(product.children[3].textContent);

      total += productPrice;


      if (!listOfProducts.includes(productName)){
         listOfProducts.push(productName);
      }

      outputArea.textContent = result += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

   }

   function checkOut () {

      for (let product of products){
         product.children[2].children[0].removeEventListener('click', addProduct);
      }

      outputArea.textContent = result + `You bought ${listOfProducts.join(', ')} for ${total.toFixed(2)}.`
   }

}

// name: products[0].children[1].children[0].textContent
// price: products[0].children[3].textContent