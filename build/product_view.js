"use strict";
exports.__esModule = true;
exports.ProductView = void 0;
var ProductView = /** @class */ (function () {
    function ProductView(cart) {
        this.cart = cart;
    }
    ProductView.prototype.getView = function () {
        var trueCart = this.cart.getCart();
        var cartview = "";
        for (var i = 0; i < trueCart.length; i++) {
            cartview += "\n" + trueCart[i].getName();
            cartview += " - ";
            cartview += trueCart[i].getPrice();
            cartview += "$\n    ";
            cartview += trueCart[i].getDescription();
        }
        return cartview;
    };
    return ProductView;
}());
exports.ProductView = ProductView;
