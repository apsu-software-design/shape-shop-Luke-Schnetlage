import { ShoppingCart } from "./shopping_cart"
import {Iview } from "./i_view"

export class ProductView implements Iview {


    cart : ShoppingCart

    constructor(cart :ShoppingCart){
        this.cart = cart;
    }


    getView():string{
        let trueCart = this.cart.getCart();
        var cartview = "";
        for (var i = 0; i < trueCart.length ; i++){
            cartview += "\n" + trueCart[i].getName();
            cartview += " - ";
            cartview += trueCart[i].getPrice();
            cartview += "$\n    ";
            cartview += trueCart[i].getDescription();
        }
        return cartview;
    }

}