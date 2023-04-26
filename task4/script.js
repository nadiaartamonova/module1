'use strict';

{
    console.log("#---------------SHOP")
    const productName = prompt("Product name:");
    const productCategory = prompt(`Category of ${productName}:`);
    const quentity = parseInt(prompt(`Quantity of ${productName}:`));
    const productPrice = parseInt(prompt(`Price of ${productName}:`));
    
    if(Number.isNaN(quentity) && Number.isNaN(productPrice)){
        console.log(`
        The ${productName}.
        ${productName} is ${productCategory}.
        Price is ${productPrice}.
        Quantity of ${productName} is ${quentity}
        Total price is ${quentity * productPrice} eur`);
    } else {
        console.log(`Invalid quantity data`);
    }
}