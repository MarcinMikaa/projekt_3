function compare(a, b) {
    return a - b;
}

const tab = [5, 8, 2, 9, 4, 7, 3];

function minMax() {
    const tab2 = tab.sort(compareNr);
    return "Min: " + tab2[0] + " Max: " + tab[tab2.length - 1];
    
}

console.log(minMax());