function arrayOfMultiples(num, length) {
    const array = [];
    let m = 1;
    for(let i = 1; i <= length; i++) {
        m = num * i;
        array.push(m);
    }
    return array;
}



console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));