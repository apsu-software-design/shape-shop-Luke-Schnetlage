"use strict";
//User Interface for The Shopping Cart 
//@author James Church
exports.__esModule = true;
exports.start = void 0;
var readlineSync = require("readline-sync"); //for easier repeated prompts
var products_1 = require("../src/products");
var shopping_cart_1 = require("../src/shopping_cart");
var removal_view_1 = require("../src/removal_view");
var product_view_1 = require("../src/product_view");
var price_view_1 = require("../src/price_view");
// Hey look. It's a global variable. This is totally cool, right?
//let quantity_cart: number[] = [];
/**
 * Function to run the UI
 */
function start() {
    var shopping_cart = new shopping_cart_1.ShoppingCart();
    showMainMenu(shopping_cart);
}
exports.start = start;
/**
 * The main menu. Will show until the user exits
 */
function showMainMenu(cart) {
    while (true) { //run until we exit
        console.log("Welcome to the Shape Store! We offer the best shapes! Pick an option:\n  1. Add an item to the cart.\n  2. Remove an item to the cart.\n  3. View the items in the cart.\n  4. View the price of all items.\n  5. Quit.");
        var response = readlineSync.question('> ');
        if (response === '5' || response.slice(0, 2).toLowerCase() === ':q') {
            break; //stop looping, thus leaving method
        }
        switch (response) { //handle each response
            case '1':
                addItemToCart(cart);
                break;
            case '2':
                removeItemFromCart(cart);
                break;
            case '3':
                viewItemsInCart(cart);
                break;
            case '4':
                viewCartTotal(cart);
                break;
            default: console.log('Invalid option!');
        }
        console.log(''); //extra empty line for revisiting
    }
}
function addItemToCart(cart) {
    letUserSelectItem(cart);
}
function letUserSelectItem(cart) {
    console.log("Here you can select your shape. Pick an option:\n  1. Buy a Triangle!\n  2. Buy a Square!\n  3. Buy a Pentagon!\n  4. Go back. Don't buy anything.");
    var response = readlineSync.question('> ');
    switch (response) { //handle each response
        case '1':
            letUserSelectQuantity(new products_1.Product("Triangle", 3.5, "It's got three sides!"), cart);
            break;
        case '2':
            letUserSelectQuantity(new products_1.Product("Square", 4.5, "It's got four sides!"), cart);
            break;
        case '3':
            letUserSelectQuantity(new products_1.Product("Pentagon", 5.5, "It's got five sides!"), cart);
            break;
        default:
            console.log('Invalid option!');
            break;
    }
    console.log(''); //extra empty line for revisiting
}
function letUserSelectQuantity(product, cart) {
    console.log("How many of this shape would you like to purchase?");
    var response = readlineSync.question('> ');
    var quantity = parseInt(response);
    for (var i = 0; i < quantity; i++) {
        cart.addProduct(product);
    }
    console.log(''); //extra empty line for revisiting
}
function removeItemFromCart(cart) {
    var removal_view = new removal_view_1.RemovalView(cart);
    console.log(removal_view.getView());
    var response = readlineSync.question('> ');
    var toRemove = parseInt(response);
    cart.removeProduct(toRemove);
    console.log(''); //extra empty line for revisiting
}
function viewItemsInCart(cart) {
    var productview = new product_view_1.ProductView(cart);
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
function viewCartTotal(cart) {
    var priceView = new price_view_1.PriceView(cart);
    console.log(priceView.getView());
    /*
      let total: number = 0;
      for (let i = 0; i < shopping_cart.length; i++) {
          total += shopping_cart[i].getPrice() * quantity_cart[i];
      }
      console.log("Shopping Cart Total: "+total);
      */
}
