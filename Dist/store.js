

// const sizeBtn = document.querySelector('.btn-group1');


// const showcase = document.querySelector('.showcase');




// let carts = document.querySelectorAll('#add-to-cart');
// let favorites = document.querySelectorAll('#favorite');
// console.log(favorites)
// let products = [
//   {
//     name:'ZIPPERED HOODED SWEATSHIRT',
//     Tag:'https://connorlewis128.github.io/ShoppingPage/Dist/images/new%20product/black%20jacket/front.webp',
//     price:50.00,
//     inCart:0
//   }
// ]


// // add to cart
// for (let i =0; i < carts.length; i++) {
//   carts[i].addEventListener('click', () =>{
//     cartNumbers(products[i]);
//     totalCost(products[i])
//   })
// }

// function onLoadCartNumbers(){
//   let productNumbers =localStorage.getItem('cartNumbers');

//   if(productNumbers){
//     document.querySelector('span .navbarCart').textContent = productNumbers;
//   }
// }

// // Number of items added to cart
// function cartNumbers(products) {
//   let productNumbers = localStorage.getItem('cartNumbers');
//   productNumbers = parseInt(productNumbers);
//   if(productNumbers){
//     localStorage.setItem('cartNumbers', productNumbers + 1) ;
//     document.querySelector('span .navbarCart').textContent = productNumbers + 1;

//   }  else{
//     localStorage.setItem('cartNumbers',1) ;
//     document.querySelector('span .navbarCart').textContent = 1;
//   }

  
//   setItems(products);
// }
// // favorites
// for (let i =0; i < favorites.length; i++) {
//   favorites[i].addEventListener('click', () =>{
//     favItems(products[i]);
//     totalCost(products[i])
//   })
// }


// function onLoadfavNumbers(){
//   let favNumbers = localStorage.getItem('favItems');

//   if(favNumbers){
//     document.querySelector('span .favoritesCount').textContent = favNumbers;
//   }
// }




// // number of favorites added
// function favItems(products) {
//   let favNumbers = localStorage.getItem('favItems');
//   favNumbers = parseInt(favNumbers);
//   if(favNumbers){
//     localStorage.setItem('favItems', favNumbers + 1) ;
//     console.log(favNumbers)
//     document.querySelector('span .favoritesCount').textContent = favNumbers + 1;

//   }  else{
//     localStorage.setItem('favItems',1) ;
//     document.querySelector('span .favoritesCount').textContent = 1;
//   }
  
  
//   setItems(products);
// }

//   function setItems(products){
//     let cartItems = localStorage.getItem('productsInCart')
//     cartItems = JSON.parse(cartItems)

//     if(cartItems != null){
//       if(cartItems[products.Tag] == undefined){
//         cartItems = {
//           ...cartItems,
//           [products.Tag]:products
//         }
//       }
//       cartItems[products.Tag].inCart +=1;
//     } 
//     else{
//       products.inCart = 1;
//        cartItems = {
//           [products.Tag]:products

//         }
//     }
//     localStorage.setItem('productsInCart',JSON.stringify(cartItems));
//   }
//   function totalCost(products)
//   {
//     let cartCost =localStorage.getItem('totalCost');
//     if (cartCost != null){
//       cartCost = parseFloat(cartCost);
//       localStorage.setItem('totalCost', cartCost + products.price);
//     }
//     else{
//       localStorage.setItem('totalCost',products.price );
//     }

//   }

//   // display cart
//   // function displayCart(){
//   //   let cartItems = localStorage.getItem('productsInCart');
//   //   cartItems = JSON.parse(cartItems);
//   //   console.log(cartItems);
//   //   let cartContainer = document.querySelector
//   //   (".products");
//   //   let cartCost =localStorage.getItem('totalCost');

//   //   if(cartItems && cartContainer){
//   //     cartContainer.innerHTML = '';
//   //     Object.values(cartItems).map(products => {
//   //       cartContainer.innerHTML += `
        
//   //       <div class="products">
          
//   //       <span>${products.name}</span>
//   //       <img src="${products.Tag}">
        
//   //       <i  class="btn-remove fas fa-times-circle"></i>

//   //       <div class="productPrice"> $${products.price}</div> 
//   //       <div class="productQuantity"> <span> <i  class="fas fa-arrow-alt-circle-left btn-minus" ></i> </span> <span id="quantity"> ${products.inCart}</span><span> <i class="fas fa-arrow-alt-circle-right btn-plus"></i></span></div> 
//   //       <div class="Total"> $${products.price * products.inCart}</div></div>
//   //       `
//   //     });

//   //     cartContainer.innerHTML += `
//   //     <section class="basketTotalContainer">
//   //     <h4 class="basketTotalTitle">
//   //         Basket Total:
//   //     </h4>
//   //     <h4 class="BasketTotal">
//   //         $${cartCost}.00
//   //     </h4>
//   //     </section>`

//   //   }
//   // };

//   function displayCart() {
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     console.log(cartItems);
//     let cartContainer = document.querySelector(".products");
//     let cartCost = localStorage.getItem("totalCost");
  
//     if (cartItems && cartContainer) {
//       cartContainer.innerHTML = "";
//       Object.values(cartItems).map((products) => {
//         cartContainer.innerHTML += `
//         <div class="products">
//           <span>${products.name}</span>
//           <img src="${products.Tag}" />
//           <i class="btn-remove fas fa-times-circle"></i>
//           <div class="productPrice">$${products.price}</div>
//           <div class="productQuantity">
//             <span class="btn-minus"><i class="fas fa-arrow-alt-circle-left"></i></span>
//             <span class="curItems">${products.inCart}</span>
//             <span class="btn-plus"><i class="fas fa-arrow-alt-circle-right"></i></span>
//           </div>
//           <div class="Total">$${products.price * products.inCart}</div>
//         </div>
//         `;
//       });
  
//       cartContainer.innerHTML += `
//         <section class="basketTotalContainer">
//         <h4 class="basketTotalTitle">
//             Basket Total:
//         </h4>
//         <h4 class="BasketTotal">
//             $${cartCost}.00
//         </h4>
//         </section>`;
//     }
//   }



// function removeItem(){
//   let removeItem = document.getElementsByClassName('btn-remove');
//   console.log(removeItem)
//   for (let i = 0; i < removeItem.length; i++){
//         let button = removeItem[i]
//   button.addEventListener('click',function(event){
//     console.log('clicked')
//   let removeItem = event.target
//   removeItem.parentElement.remove();

// });
// }}


  





// // color change

// function colorChange() {
//   showcase.style.animation = document.querySelector('input[name="colorradio"]:checked').value + ' 6s infinite';
// }



// // // quantity change
// // function quantityChange() {
// //   document.querySelector('.btn-plus').addEventListener('click', () => {
// //     const quantityText = document.querySelector('#quantity');
// //     quantityText.innerText = `${products.inCart++}`;
    
    
// // });
// //   // const plusBtnNew = document.querySelector(".btn-plus");
// //   // const minusBtnNew = document.querySelector(".btn-minus");
  
// //   // plusBtnNew.addEventListener("click", () => products.inCart++);
// //   // minusBtnNew.addEventListener("click", () => products.inCart--);
// // }




// onLoadCartNumbers();
// onLoadfavNumbers();
// displayCart();
// removeItem();
// quantityChange();



const sizeBtn = document.querySelector(".btn-group1");

const showcase = document.querySelector(".showcase");

let carts = document.querySelectorAll("#add-to-cart");
let favorites = document.querySelectorAll("#favorite");
console.log(favorites);
let products = [
  {
    name: "ZIPPERED HOODED SWEATSHIRT",
    Tag:
      "https://connorlewis128.github.io/ShoppingPage/Dist/images/new%20product/black%20jacket/front.webp",
    price: 50.0,
    inCart: 0,
  },
];


// add to cart
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector("span .navbarCart").textContent = productNumbers;
  }
}

// Number of items added to cart
function cartNumbers(products) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("span .navbarCart").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("span .navbarCart").textContent = 1;
  }

  setItems(products);
}
// favorites
for (let i = 0; i < favorites.length; i++) {
  favorites[i].addEventListener("click", () => {
    favItems(products[i]);
    totalCost(products[i]);
  });
}

function onLoadfavNumbers() {
  let favNumbers = localStorage.getItem("favItems");

  if (favNumbers) {
    document.querySelector("span .favoritesCount").textContent = favNumbers;
  }
}

// number of favorites added
function favItems(products) {
  let favNumbers = localStorage.getItem("favItems");
  favNumbers = parseInt(favNumbers);
  if (favNumbers) {
    localStorage.setItem("favItems", favNumbers + 1);
    console.log(favNumbers);
    document.querySelector("span .favoritesCount").textContent = favNumbers + 1;
  } else {
    localStorage.setItem("favItems", 1);
    document.querySelector("span .favoritesCount").textContent = 1;
  }

  setItems(products);
}

function setItems(products) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[products.Tag] == undefined) {
      cartItems = {
        ...cartItems,
        [products.Tag]: products,
      };
    }
    cartItems[products.Tag].inCart += 1;
  } else {
    products.inCart = 1;
    cartItems = {
      [products.Tag]: products,
    };
  }
  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(products) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem("totalCost", cartCost + products.price);
  } else {
    localStorage.setItem("totalCost", products.price);
  }
}

// display cart
function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);
  let cartContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");

  if (cartItems && cartContainer) {
    cartContainer.innerHTML = "";
    Object.values(cartItems).map((products) => {
      cartContainer.innerHTML += `
      <div class="products">
        <span>${products.name}</span>
        <img src="${products.Tag}" />
        <i class="btn-remove fas fa-times-circle"></i>
        <div class="productPrice">$${products.price}</div>
        <div class="productQuantity">
          <span class="btn-minus"><i class="fas fa-arrow-alt-circle-left"></i></span>
          <span class="curItems">${products.inCart}</span>
          <span class="btn-plus"><i class="fas fa-arrow-alt-circle-right"></i></span>
        </div>
        <div class="itemTotal">$${products.price * products.inCart}</div>
      </div>
      `;
    });

    cartContainer.innerHTML += `
      <section class="basketTotalContainer">
      <h4 class="basketTotalTitle">
          Basket Total:
      </h4>
      <h4 class="BasketTotal">
          $${cartCost}.00
      </h4>
      </section>`;
  }
}

function removeItem() {
  let removeItem = document.getElementsByClassName("btn-remove");
  console.log(removeItem);
  for (let i = 0; i < removeItem.length; i++) {
    let button = removeItem[i];
    button.addEventListener("click", function (event) {
      console.log("clicked");
      let removeItem = event.target;
      removeItem.parentElement.remove();
    });
  }
}

// color change

function colorChange() {
  showcase.style.animation =
    document.querySelector('input[name="colorradio"]:checked').value +
    "6s infinite";
}

// quantity change
function quantityChange() {
  const plusBtnNew = document.querySelector(".btn-plus");
  const minusBtnNew = document.querySelector(".btn-minus");
  const curItems = document.querySelector(".curItems");
  const itemTotal = document.querySelector(".itemTotal");
  plusBtnNew.addEventListener("click", () => {
    const total = Number(localStorage.getItem("cartNumbers"));
    localStorage.setItem("cartNumbers", total + 1);
    curItems.textContent = total + 1;
  });

  minusBtnNew.addEventListener("click", () => {
    const total = Number(localStorage.getItem("cartNumbers"));
    localStorage.setItem("cartNumbers", total - 1);
    curItems.textContent = total - 1;
    
  });
  
  
  
  
}

onLoadCartNumbers();
onLoadfavNumbers();
displayCart();
removeItem();

quantityChange();