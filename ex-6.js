function danceConvert(pin) {

    const array = ["Shimmy", "Shake", "Pirouette", "Slide", "Arabesque", "Pop"];
    let sum = 0;
    const newPin = [];

    const helpArray = [...pin];
    const helpArray2 = helpArray.map(Number);

    for(let i = 0; i < helpArray2.length; ++i) {
        let help = helpArray2[i] + i;

        if(help > array.length - 1) {
            let a = array.pop();
            array.unshift(a);
        }

        newPin.push(array[help]);
    }

    return newPin;

}

console.log(danceConvert("0000"));
console.log(danceConvert("3856"));
// console.log(danceConvert("9999"));
// console.log(danceConvert("32a1"));