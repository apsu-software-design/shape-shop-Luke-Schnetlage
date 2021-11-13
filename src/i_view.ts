import { ShoppingCart } from "./shopping_cart"

export interface Iview{

    cart :ShoppingCart;
    getView() : string;
}