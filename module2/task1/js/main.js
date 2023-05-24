'use strict';

const adv = document.querySelector('.ads');
adv.remove();

const olMain = document.querySelector('.items');
const items = document.querySelectorAll('.item');

olMain.prepend(items[1]);
items[1].after(items[2]);
items[2].after(items[3]);


const propsFive = items[3].querySelector('.props__list');
const propsThree = items[4].querySelector('.props__list');

propsFive.replaceWith(propsThree);
const items4Content = items[4].querySelector('.content');
items4Content.append(propsFive);

const propsTwo = items[2].querySelector('.props__list');
const propsTwoItems = propsTwo.querySelectorAll('.props__item');

const propsFour = items[0].querySelector('.props__list');
const propsFourItems = propsFour.querySelectorAll('.props__item');
propsFourItems[2].after(propsTwoItems[3]);

const propsSix = items[5].querySelector('.props__list');
const propsSixItems = propsSix.querySelectorAll('.props__item');

console.log(propsSixItems);
propsTwoItems[8].append(propsSixItems[8]);
propsTwoItems[8].append(propsSixItems[9]);

