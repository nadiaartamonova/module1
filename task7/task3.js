'use strict';

{
    const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

    const addPrefix = ([...names], prefix) => {
        let newArray = [];

        for(const elem of names) {
            newArray.push(`${prefix} ${elem}`)
        }
        return newArray;
    } 


    console.log(addPrefix(names, 'Mr'));
}