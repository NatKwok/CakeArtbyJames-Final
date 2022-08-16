// 'add-cart' from all the order buttons
let carts = document.querySelectorAll('.add-cart');

// All the products list on the web, and store them to an array-products:

let products = [
  {
    id: 1,
    name: 'Peanut Butter',
    tag: 'peanutbutter',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 2,
    name: 'Lemon Chocolate',
    tag: 'lemonchocolate',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 3,
    name: 'Dulce de Leche',
    tag: 'dulcedeleche',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 4,
    name: 'Raspberry',
    tag: 'raspberry',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 5,
    name: 'Green Grape',
    tag: 'greengrape',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 6,
    name: 'Cheese',
    tag: 'cheese',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 7,
    name: 'Red Velvet',
    tag: 'redvelvet',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 8,
    name: 'White Chocolate',
    tag: 'whitechocolate',
    price: 3.5,
    quantity: 0,
  },

  {
    id: 9,
    name: 'Strawberry',
    tag: 'strawberry',
    price: 3.5,
    quantity: 0,
  },
];

// whenever I click the order button, I want some action:
// so I need to loop all of them:

for (let i = 0; i < carts.length; i++) {
  // I want to grab my cart
  carts[i].addEventListener('click', () => {
    // console.log('added to shopping cart');
    // each time I click, I record this number
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

// create an function called cartNumbers
// So I can count how many items I've added to the cart

function cartNumbers(product, action) {
  // console.log('The product clicked is', product);

  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  // related to the action
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (action == 'decrease') {
    localStorage.setItem('cartNumbers', productNumbers - 1);
    document.querySelector('.cart span').textContent = productNumbers - 1;
    console.log('action running');
  } else if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.cart span').textContent = productNumbers + 1;
    // Change style after each click:
    document.querySelector('.cart span').style.color = '#fff';
    document.querySelector('.cart span').style.fontWeight = 'bolder';
    document.querySelector('.cart span').style.backgroundColor = 'red';
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;
    // Change style after each click:
    document.querySelector('.cart span').style.color = '#fff';
    document.querySelector('.cart span').style.fontWeight = 'bolder';
    document.querySelector('.cart span').style.backgroundColor = 'red';
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  console.log('my cartItems are', cartItems);

  if (cartItems !== null) {
    let currentProduct = product.tag;
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        // spread operator
        // Reference: https://fjolt.com/article/javascript-three-dots-spread-operator
        // like a "shortcut". Instead of saying:"take everything what was already selected(order the strawberry cupcakes, or ordered the cheese)
        // you just put "..." in that way the compiler will add to the old selected products the new selected one,without writing much code
        [currentProduct]: product,
      };
    }
    cartItems[currentProduct].quantity += 1;
  } else {
    product.quantity = 1;
    cartItems = {
      [product.tag]: product,
    };
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if (productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
    document.querySelector('.cart span').style.color = '#fff';
    document.querySelector('.cart span').style.fontWeight = 'bolder';
    document.querySelector('.cart span').style.backgroundColor = 'red';
  }
}

function totalCost(product, action) {
  // console.log('The product price is', product.price);
  let cartCost = localStorage.getItem('totalCost');

  if (action == 'decrease') {
    cartCost = parseFloat(cartCost);
    localStorage.setItem('totalCost', cartCost - product.price);
  } else if (cartCost != null) {
    cartCost = parseFloat(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

// whenever we run the web page, we want this function run
function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let totalPrice = localStorage.getItem('totalCost');
  totalPrice = parseFloat(totalPrice);

  let totalQuantity = localStorage.getItem('cartNumbers');
  totalQuantity = parseInt(totalQuantity);

  let productContainer = document.querySelector('.products');

  let removeCartItemButtons = document.getElementsByClassName('decrease');
  for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i];
    button.addEventListener('click', function (event) {
      event.target;
    });
  }

  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class = "product">      
        <ion-icon name="close-circle"> </ion-icon>
        <img src="../assets/img/cupcakes/product-${item.id}.jpg">
        <span>${item.name}</span>
      </div>

      <div class = "price">$${item.price}</div>
      
      <div class="quantity">

        <ion-icon class="decrease" name="remove-circle-outline"></ion-icon>

        <span>${item.quantity}</span>

        <ion-icon class="increase" name="add-circle-outline"></ion-icon>
      </div>

      <div class="total">
      $${item.price * item.quantity}
      </div>
        `;
    });

    productContainer.innerHTML += `
            <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Total</h4>
            <h4 class="basketTotalQuantity">${totalQuantity} units</h4>
            <h4 class="basketTotal">$${totalPrice}</h4>
            </div>`;
  }
  deleteButtons();
  manageQuantity();
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.product ion-icon');
  let productName;
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  console.log(cartItems);

  let cartCost = localStorage.getItem('totalCost');

  // use for loop:
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      // if we just return result without using 'Trim', we will get tons of white space
      productName = deleteButtons[i].parentElement.textContent
        .trim()
        .toLowerCase()
        .replace(/ /g, ''); // Trim removed all the white space around content
      // console.log(productName);
      // console.log(
      //   cartItems[productName].name + ' ' + cartItems[productName].quantity
      // );

      // this is to update the quantity in localStorage
      localStorage.setItem(
        'cartNumbers',
        productNumbers - cartItems[productName].quantity
      );

      // now we need to update total cost:
      localStorage.setItem(
        'totalCost',
        cartCost -
          cartItems[productName].price * cartItems[productName].quantity
      );

      // delete the whole thing:
      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      // refresh the page each time:
      displayCart();
      onLoadCartNumbers();
    });
  }
}

function manageQuantity() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');

  let cartItems = localStorage.getItem('productsInCart');
  // convert from json format to js format, so we can use the value
  cartItems = JSON.parse(cartItems);

  let currentQuantity = 0;

  let currentProduct = '';
  // for loop for Decrease Button and add EventListener:
  for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
      currentQuantity =
        decreaseButtons[i].parentElement.querySelector('span').textContent;
      // console.log(currentQuantity);
      currentProduct = decreaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector('span')
        .textContent.trim()
        .toLowerCase()
        .replace(/ /g, '');
      // console.log(currentProduct);

      if (cartItems[currentProduct].quantity > 1) {
        cartItems[currentProduct].quantity -= 1;
        cartNumbers(cartItems[currentProduct], 'decrease');
        totalCost(cartItems[currentProduct], 'decrease');
        localStorage.setItem('productsInCart', JSON.stringify(cartItems));
        displayCart();
      }
    });
  }

  // for loop for Increase and add EventListener:
  for (let i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener('click', () => {
      currentQuantity =
        increaseButtons[i].parentElement.querySelector('span').textContent;
      // console.log(currentQuantity);
      currentProduct = increaseButtons[
        i
      ].parentElement.previousElementSibling.previousElementSibling
        .querySelector('span')
        .textContent.trim()
        .toLowerCase()
        .replace(/ /g, '');
      // console.log(currentProduct);

      cartItems[currentProduct].quantity += 1;
      cartNumbers(cartItems[currentProduct]);
      totalCost(cartItems[currentProduct]);
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));
      displayCart();
    });
  }
}

//  each time we refresh the page, the number on the cart remain the same as whatever we have in the local storage:
onLoadCartNumbers();
displayCart();
