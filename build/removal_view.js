"use strict";
exports.__esModule = true;
exports.RemovalView = void 0;
var RemovalView = /** @class */ (function () {
    function RemovalView(cart) {
        this.cart = cart;
    }
    RemovalView.prototype.getView = function () {
        var trueCart = this.cart.getCart();
        var cartview = "Select an item to be removed from the cart. \n";
        for (var i = 0; i < trueCart.length; i++) {
            cartview += '\n' + i + " - " + trueCart[i].getName();
        }
        return "Shopping Cart Total: " + cartview;
    };
    return RemovalView;
}());
exports.RemovalView = RemovalView;
