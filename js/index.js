// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const priceElt = product.querySelector('td.price > span')
  const price = Number(priceElt.textContent)

  const quantityElt = product.querySelector('td.quantity > input')
  const quantity = Number(quantityElt.value)

  const subtotal = price*quantity
  console.log(`price: ${price}, quantity: ${quantity}, subtotal: ${subtotal}`)

  const subtotalElt = product.querySelector('td.subtotal > span')
  subtotalElt.textContent = subtotal
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  // ITERATION 3
  //... your code goes here
  const productsArray = document.querySelectorAll('.product')
  let total = 0
  productsArray.forEach( (product) => total += updateSubtotal(product) )
  console.log(`total is ${total}`)

  const totalElt = document.querySelector('#total-value > span')
  totalElt.textContent = total
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target); //<button class="btn btn-remove">
  //... your code goes here
  const targetParentElt = target.parentNode //accessing the parent of target: <td class="action">
  console.log('targetParentElt', targetParentElt)
  const targetGrandParentElt = targetParentElt.parentNode //accessing the grand parent of target: <tr class="product">
  console.log('targetGrandParentElt', targetGrandParentElt)
  const targetGrandGrandParentElt = targetGrandParentElt.parentNode //accessing the grand parent of target: <tbody>
  console.log('targetGrandGrandParentElt', targetGrandGrandParentElt)
  targetGrandGrandParentElt.removeChild(targetGrandParentElt) //remove the product from tbody element
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here
  console.log(event.target)
  const trElement = event.target.parentNode.parentNode//<tr class="create-product">
  console.log(trElement)
  const newProductName = trElement.querySelector("input[type='text']").value
  const newProductPrice = trElement.querySelector("input[type='number']").value
  console.log(`newProductName: ${newProductName}, newProductPrice: ${newProductPrice}`)

  const tbodyElt = document.querySelector('tbody')

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //querying the document for all "Remove" buttons
  const buttonsEltArray = document.querySelectorAll('button.btn.btn-remove') //we select all buttons which have the 2 classes btn and btn-remove
  //add a click event listener to each button of buttonsEltArray
  // buttonsEltArray[0].addEventListener('click', removeProduct)
  buttonsEltArray.forEach( (button) => {button.addEventListener('click', removeProduct)})

  //add a click event listener to the createProduct button
  const createButtonElt = document.querySelector('#create')
  createButtonElt.addEventListener('click', createProduct)
});
