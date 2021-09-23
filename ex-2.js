function compare(a, b) {
    return a - b;
}

function minMax(arr) {
    const tab2 = Array.from(arr);
    tab2.sort(compare);
    return "Min: " + tab2[0] + " Max: " + tab2[tab2.length - 1];
    
}

console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));
console.log(minMax([1]));