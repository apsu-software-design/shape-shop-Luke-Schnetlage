import { ShoppingCart } from "./shopping_cart"
import {Iview } from "./i_view"


export class PriceView implements Iview{
    cart :ShoppingCart;


    constructor(cart : ShoppingCart){
        this.cart = cart;
    }

    getView():string{
        let trueCart = this.cart.getCart();
        var cartview = 0;
        for (var i = 0; i < trueCart.length ; i++){
            cartview += trueCart[i].getPrice();

        }
        
        return cartview.toString();
    }
}

