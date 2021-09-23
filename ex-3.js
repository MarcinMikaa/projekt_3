function charCount(char, word) {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        if(word[i] == char) {
            count = count + 1;
        }
    }
    return count;
}



console.log(charCount("a", "easit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));