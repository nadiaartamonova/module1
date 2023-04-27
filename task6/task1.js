
{
    for(let i = 1; i < 11; i++){
        console.log("#---------------#")
        for(let j = 1; j < 11; j++){
            let result = i ** j
            console.log(`${(i + '^' + j).padEnd(5, ' ')} = ${result}`)
        }
    }
}


