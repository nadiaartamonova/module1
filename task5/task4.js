
{
    console.log("#---------------Calculate");

    const calculate = (summa, count, promo) => {
    let discount = 0;
    if(count > 10){
        discount += summa * 0.03;
    }

    if(summa > 30000){
        discount += (summa - 30000) * 0.15;
    }

    switch(promo){
        case "METHED":
            discount += summa * 0.1
            break;
        case "G3H2Z1":
            if((summa - discount) > 2000){
                discount += 500 
            }
            break;
    }

    return summa - discount;
    }

    console.log(calculate(50000, 12, "METHED"));
    console.log(calculate(2000, 15, "G3H2Z1")); 
    console.log(calculate(40000, 20, "")); 
}

/*----------------------------------------------------------------
1. count > 10 = 3%
2. summa > 30000 = 15%
3. promo 

*/