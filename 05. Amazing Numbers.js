function amazingNumbers (number) {
    let num = number.toString();
    let sum = 0;

    for(let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let final = sum.toString().includes('9');
    console.log(final ? `${number} Amazing? True` : `${number} Amazing? False`);
}
amazingNumbers(1233)