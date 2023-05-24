'use strict';

{
  const rectangle = {
    _width: 0,
    _height: 0,

    set height(value = 5) {
      this._height = value;
    },

    set width(value = 5) {
      this._width = value;
    },

    get square() {
      return `${this._width * this._height}см`;
    },

    get parameter() {
      return `${(this._width * 2) + (this._height * 2)}см`;
    },
  };


  rectangle.width = 10;
  rectangle.height = 15;

  console.log(rectangle.square);
  console.log(rectangle.parameter);
}


{
  const cart = {
    items: [],
    count: 0,
    _discount: 0,

    get totalPrice() {
      return this.calculateItemPrice();
    },
    calculateItemPrice() {
      // eslint-disable-next-line max-len
      const total = this.items.reduce((total, item) => total += (item[1] * item[2]), 0);
      console.log(total);
      return total * (1 - this._discount / 100);
    },

    set discount(value) {
      this._discount = value;
    },

    setDiscount(promocode) {
      if (promocode === 'METHED') {
        this._discount = 15;
      } else if (promocode === 'NEWYEAR') {
        this._discount = 21;
      }
    },

    add(name, price, count = 1) {
      this.items.push([name, price, count]);
      this.totalPrice;
      this.count = this.increaseCount(count);
    },

    increaseCount(count) {
      return this.count + count;
    },

    clear() {
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
      this._discount = 0;
      return this;
    },

    print() {
      console.log(JSON.stringify(this.items));
      console.log(`Total price: ${this.totalPrice}`);
    },
  };

  cart.add('apple', 7, 1);
  cart.add('milk', 1, 3);
  cart.add('juice', 3, 6);

  console.log(cart);

  cart.setDiscount('METHED');
  cart.print();
}
