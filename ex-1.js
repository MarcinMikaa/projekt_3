let n = 4;
let sum = 0;

 function addUp(n) {
    for(let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
 }

 console.log(addUp(n));