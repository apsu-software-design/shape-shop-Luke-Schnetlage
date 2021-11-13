"use strict";
exports.__esModule = true;
exports.PriceView = void 0;
var PriceView = /** @class */ (function () {
    function PriceView(cart) {
        this.cart = cart;
    }
    PriceView.prototype.getView = function () {
        var trueCart = this.cart.getCart();
        var cartview = 0;
        for (var i = 0; i < trueCart.length; i++) {
            cartview += trueCart[i].getPrice();
        }
        return cartview.toString();
    };
    return PriceView;
}());
exports.PriceView = PriceView;
