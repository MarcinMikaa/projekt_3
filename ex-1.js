function addUp(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
 }

 console.log(addUp(4));
 console.log(addUp(13));
 console.log(addUp(600));