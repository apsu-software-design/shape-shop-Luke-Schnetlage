
/**
 *  A cart should be able to:
 *  add a new product,
 *	remove a product based on the index number of that product in a list,
 *	return a list of all products
 *
 */

import { Product } from "./products"


export class ShoppingCart{

    cart : Product[];


    constructor(){
        this.cart = new Array<Product>();
    }

    addProduct(product : Product){
        this.cart.push(product);
    }

    removeProduct(index : number){
        //this.cart = this.cart.splice(index, 1); 
        this.cart.splice(index, 1);
    }

    getCart(){
        return this.cart;
    }
}