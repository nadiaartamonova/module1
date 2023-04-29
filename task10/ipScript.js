import { listIPv4 } from './ipv4.js';


const ipUniqRes = listIPv4 => {
    const result = new Set();

    for(const ip of listIPv4){
        result.add(ip);
    }

    return result.size;

}



console.log(`Количество уникальных адресов ${ipUniqRes(listIPv4)}`)