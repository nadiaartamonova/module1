'use strict';

{

    const cart = {
        items: [],
        totalPrice: 0,
        count: 0,
        getTotalPrice(cart){
            return cart.totalPrice;
        },
        add(name, price, count = 1){

            cart.items.push([name, price, count]);
            cart.totalPrice = cart.calculateItemPrice();
            cart.count = cart.increaseCount(count);
        },
        increaseCount(count){
            return cart.count + count;
        },
        calculateItemPrice(){
            cart.totalPrice = cart.items.reduce((total, item) => {
                return total + (item[1] * item[2]);
            }, 0);
            return cart.totalPrice;
        }, 
        clear(cart){
            cart.items = [];
            totalPrice = 0;
            count = 0;
            return cart;
        },
        print(cart){
            console.log(JSON.stringify(cart.items));
            console.log(`Total price: ${cart.totalPrice}`);
        },
    }

    cart.add('apple', 7, 1);
    cart.add('milk', 1, 3);
    cart.add('juice', 3, 6);

    cart.print(cart);


}