'use strict';

{
    const productName = prompt("Product name:");
    const productCategory = prompt(`Category of ${productName}:`);
    const quentity = parseInt(prompt(`Quantity of ${productName}:`));
    const productPrice = parseInt(prompt(`Price of ${productName}:`));

    console.log(`
    The ${productName}.
    ${productName} is ${productCategory}.
    Price is ${productPrice}.
    Quantity of ${productName} is ${quentity}
    Total price is ${quentity * productPrice} eur`);

    console.log(`#-----------------------------------
    ${productName} typeof is ${typeof productName},
    ${productCategory} typeof is ${typeof productCategory}, 
    ${quentity} typeof is ${typeof quentity}, 
    ${productPrice} typeof is ${typeof productPrice}.  
    `)
}