import { ShoppingCart } from "./shopping_cart"
import {Iview } from "./i_view"

export class RemovalView implements Iview{

    cart : ShoppingCart;

    constructor ( cart : ShoppingCart){
        this.cart = cart;
    }

    getView(){
        let trueCart = this.cart.getCart();
        var cartview = `Select an item to be removed from the cart. \n`;
        for (var i = 0; i < trueCart.length ; i++){
            cartview += '\n' + i + " - " +  trueCart[i].getName();
        }
        return "Shopping Cart Total: " + cartview;
    }
}