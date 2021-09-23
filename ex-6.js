function danceConvert(pin) {

    const array = ["Shimmy", "Shake", "Pirouette", "Slide", "", "", "", "Pop", "", "Arabesque"];
    const newPin = [];

    const helpArray = [...pin];
    const helpArray2 = helpArray.map(Number);

    for(let i = 0; i < helpArray2.length; ++i) {

        let help = helpArray2[i] + i;
        let index = help % array.length;
        newPin.push(array[index]);

        if(newPin[i] == "") {
            return "Invalid input";
        }
    }
    return newPin;
}

console.log(danceConvert("0000"));
console.log(danceConvert("3856"));
console.log(danceConvert("9999"));
console.log(danceConvert("32a1"));