'use strict';

{
    const getLeapYear = (m, n) => {
        let result = [];
        let min = m;
        let max = n;

        if (m > n){
            console.log(min, max)
            min = n;
            max = m;
        }
        for (let year = min; year <= max; year++) {
            if (isLeapYear(year)) {
                result.push(year);
            }
        }
        return result;
    }

    console.log(getLeapYear(1940, 2200));

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }
}