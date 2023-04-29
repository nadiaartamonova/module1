'use strict';

{

    const cart = {
        items: [],
        get totalPrice() { 
            this._totalPrice = this.calculateItemPrice();
            return this._totalPrice;
        },
        count: 0,
        getTotalPrice(){
            return this.totalPrice;
        },
        add(name, price, count = 1){
            
            this.items.push([name, price, count]);
            this.totalPrice;
            this.count = this.increaseCount(count);

        },
        increaseCount(count){
            return this.count + count;
        },
        calculateItemPrice(){
            return this.items.reduce((total, item) => {
                return total + (item[1] * item[2]);
            }, 0);
        }, 
        clear(){
            this.items = [];
            this.totalPrice = 0;
            this.count = 0;
            return this;
        },
        print(){
            console.log(JSON.stringify(this.items));
            console.log(`Total price: ${this.totalPrice}`);
        },
    }

    cart.add('apple', 7, 1);
    cart.add('milk', 1, 3);
    cart.add('juice', 3, 6);

    delete cart.getTotalPrice;
    console.log(cart);

    cart.print();


}