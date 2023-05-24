function findMin(a, b) {
    return ((a + b) - Math.abs(a - b)) / 2;
}

    const num1 = parseInt(prompt("Первое число:"));
    const num2 = parseInt(prompt("Второе число:"));
    const min = findMin(num1, num2);
    console.log(`Минимальное число: ${min}`);