function arrayOfMultiples(num, length) {
    const array = [];
    for(let i = 1; i <= length; i++) {
        let m = num * i;
        array.push(m);
    }
    return array;
}



console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(17, 6));