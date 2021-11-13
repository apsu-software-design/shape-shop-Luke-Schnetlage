//User Interface for The Shopping Cart 
//@author James Church

import readlineSync = require('readline-sync'); //for easier repeated prompts
import {Product} from './products';
import { ShoppingCart } from './shopping_cart';
import {RemovalView} from './removal_view';
import {ProductView} from './product_view';
import {PriceView} from './price_view';

// Hey look. It's a global variable. This is totally cool, right?

//let quantity_cart: number[] = [];

/**
 * Function to run the UI
 */
export function start() {
  var shopping_cart = new ShoppingCart();
  showMainMenu(shopping_cart);
  
}

/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(cart : ShoppingCart) {
  while(true){ //run until we exit
    console.log(`Welcome to the Shape Store! We offer the best shapes! Pick an option:
  1. Add an item to the cart.
  2. Remove an item to the cart.
  3. View the items in the cart.
  4. View the price of all items.
  5. Quit.`);

    let response = readlineSync.question('> ')
    if(response === '5' || response.slice(0,2).toLowerCase() === ':q'){
      break; //stop looping, thus leaving method
    }

    switch(response) { //handle each response
      case '1': addItemToCart(cart); break;
      case '2': removeItemFromCart(cart); break;
      case '3': viewItemsInCart(cart); break;
      case '4': viewCartTotal(cart); break;
      default: console.log('Invalid option!');
    }
    console.log(''); //extra empty line for revisiting
  }
}

function addItemToCart(cart : ShoppingCart) {
    letUserSelectItem(cart);
    
}

function letUserSelectItem(cart : ShoppingCart) {
    console.log(`Here you can select your shape. Pick an option:
  1. Buy a Triangle!
  2. Buy a Square!
  3. Buy a Pentagon!
  4. Go back. Don't buy anything.`);
  let response = readlineSync.question('> ');
  
    switch(response) { //handle each response
    case '1': letUserSelectQuantity(new Product("Triangle", 3.5, "It's got three sides!"),cart); break;
    case '2': letUserSelectQuantity(new Product("Square", 4.5, "It's got four sides!"),cart); break;
    case '3': letUserSelectQuantity(new Product("Pentagon", 5.5, "It's got five sides!"),cart); break;
    default: console.log('Invalid option!'); break;
    }
  
    console.log(''); //extra empty line for revisiting
}

function letUserSelectQuantity(product : Product,cart : ShoppingCart){
    console.log(`How many of this shape would you like to purchase?`);

    let response = readlineSync.question('> ')
    var quantity = parseInt(response); 
    for (let i = 0; i < quantity ; i++){
      cart.addProduct(product);
    }
    console.log(''); //extra empty line for revisiting
}

function removeItemFromCart(cart : ShoppingCart) {
  let removal_view = new RemovalView(cart);
  
  console.log(removal_view.getView());
  
    let response = readlineSync.question('> ')
    let toRemove = parseInt(response);

    cart.removeProduct(toRemove);
    console.log(''); //extra empty line for revisiting
   
}

function viewItemsInCart(cart : ShoppingCart) {
  let productview = new ProductView(cart);
  console.log(productview.getView());

  /*
    for (let i = 0; i < shopping_cart.length; i++) {
        console.log("");
        console.log("       Name: "+shopping_cart[i].getName());
        console.log("      Price: "+shopping_cart[i].getPrice());
        console.log("Description: "+shopping_cart[i].getDescription());
        console.log("   Quantity: "+quantity_cart[i]);
    }
    */
}

function viewCartTotal(cart : ShoppingCart) {
  let priceView = new PriceView(cart);
  console.log(priceView.getView());
  /*
    let total: number = 0;
    for (let i = 0; i < shopping_cart.length; i++) {
        total += shopping_cart[i].getPrice() * quantity_cart[i];
    }
    console.log("Shopping Cart Total: "+total);
    */


}



