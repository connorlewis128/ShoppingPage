

const sizeBtn = document.querySelector('.btn-group1');


const showcase = document.querySelector('.showcase');



// color change

function colorChange() {
  showcase.style.animation = document.querySelector('input[name="colorradio"]:checked').value + ' 6s infinite';
  
}
// 


let carts = document.querySelectorAll('#add-to-cart');
let products = [
  {
    name:'ZIPPERED HOODED SWEATSHIRT',
    Tag:'https://connorlewis128.github.io/ShoppingPage/Dist/images/new%20product/black%20jacket/front.webp',
    price:50.00,
    inCart:0
  }
]


// add to cart
for (let i =0; i < carts.length; i++) {
  carts[i].addEventListener('click', () =>{
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

function onLoadCartNumbers(){
  let productNumbers =localStorage.getItem('cartNumbers');

  if(productNumbers){
    document.querySelector('span .navbarCart').textContent = productNumbers;
  }
}


// Number of items added to cart
function cartNumbers(products) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1) ;
    document.querySelector('span .navbarCart').textContent = productNumbers + 1;

  }  else{
    localStorage.setItem('cartNumbers',1) ;
    document.querySelector('span .navbarCart').textContent = 1;
  }

  
  setItems(products);
}
  function setItems(products){
    let cartItems = localStorage.getItem('productsInCart')
    cartItems = JSON.parse(cartItems)

    if(cartItems != null){
      if(cartItems[products.Tag] == undefined){
        cartItems = {
          ...cartItems,
          [products.Tag]:products
        }
      }
      cartItems[products.Tag].inCart +=1;
    } 
    else{
      products.inCart = 1;
       cartItems = {
          [products.Tag]:products

        }
    }
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));
  }
  function totalCost(products)
  {
    let cartCost =localStorage.getItem('totalCost');
    if (cartCost != null){
      cartCost = parseFloat(cartCost);
      localStorage.setItem('totalCost', cartCost + products.price);
    }
    else{
      localStorage.setItem('totalCost',products.price );
    }

  }

  // display cart
  function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let cartContainer = document.querySelector
    (".products");
    let cartCost =localStorage.getItem('totalCost');

    if(cartItems && cartContainer){
      cartContainer.innerHTML = '';
      Object.values(cartItems).map(products => {
        cartContainer.innerHTML += `
        
        <div class="products">
          
        <span>${products.name}</span>
        <img src="${products.Tag}">
        
        <i  class="btn-remove fas fa-times-circle"></i>

        <div class="productPrice"> $${products.price}</div> 
        <div class="productQuantity"> <span><i  class="fas fa-arrow-alt-circle-left btn-minus"></i>${products.inCart} <i class="fas fa-arrow-alt-circle-right btn-plus"></i></span></div> 
        <div class="Total"> $${products.price * products.inCart}</div></div>
        `
      });

      cartContainer.innerHTML += `
      <section class="basketTotalContainer">
      <h4 class="basketTotalTitle">
          Basket Total:
      </h4>
      <h4 class="BasketTotal">
          $${cartCost}.00
      </h4>
      </section>`

    }
  };

  // remove cart items
// const removecartItems = document.getElementsByClassName('btn-remove') ;
// console.log(removecartItems)
// for (let i = 0; i < removecartItems.length; i++){
//   let button = removecartItems[i]
//   button.addEventListener('click',function(event){
//     console.log('clicked')
//     let removecartItems = event.target
//      removecartItems.parentElement.remove();
      
//   })
// }

function removeItem(){
  let removeItem = document.getElementsByClassName('btn-remove');
  console.log(removeItem)
  for (let i = 0; i < removeItem.length; i++){
        let button = removeItem[i]
  button.addEventListener('click',function(event){
    console.log('clicked')
  let removeItem =event.target
  removeItem.parentElement.remove();

});
}}

// function quantityChange(){
  
//   let  plusItem = document.getElementsByClassName('btn-plus')
//   let  minusItem = document.getElementsByClassName('btn-minus')
//   console.log(plusItem);
//   console.log(minusItem)
//   let plusItem = plusItem['productsInCart']
//   let minusbutton = minusItem['productsInCart']
//   if('productsInCart' < 0){
//     plusItem.addEventListener('click',function(event){
//       console.log('clicked')
//     let plusItem =event.target
//     plusItem.productsInCart + 1;
//   });

  
  
// }}


// add 1 to quantity
// const quantityPluscartItems = document.getElementsByClassName('fas fa-arrow-alt-circle-right');
// console.log(quantityPluscartItems)
// for (let i = 0; i < quantityPluscartItems.length; i++){
//   let button = quantityPluscartItems[i]
//   button.addEventListener('click',function(event){
//     console.log('clicked')
//     let quantityPluscartItems = event.target
//     quantityPluscartItems = ('${products.inCart}' + 1);
      
//   })
// }
// subtract 1 from quantity




onLoadCartNumbers();
displayCart();
removeItem();
colorChange();

