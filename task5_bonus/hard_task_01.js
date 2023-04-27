
const nod = (a, b) => {

    if (b === 0){
        return a;
    } else{
        return nod(b, a%b);
    }
}

console.log(`Наибольший общий делитель: ${nod(500, 300)}`)

console.log(nod(300, 6))

