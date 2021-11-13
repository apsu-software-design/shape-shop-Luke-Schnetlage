"use strict";
/**
 *  A cart should be able to:
 *  add a new product,
 *	remove a product based on the index number of that product in a list,
 *	return a list of all products
 *
 */
exports.__esModule = true;
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.cart = new Array();
    }
    ShoppingCart.prototype.addProduct = function (product) {
        this.cart.push(product);
    };
    ShoppingCart.prototype.removeProduct = function (index) {
        //this.cart = this.cart.splice(index, 1); 
        this.cart.splice(index, 1);
    };
    ShoppingCart.prototype.getCart = function () {
        return this.cart;
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
