function objectToArray(first) {
    const tab = Object.entries(first);
    return tab;
}

console.log(objectToArray({ D: 1, B: 2, C: 3 }));
console.log(objectToArray({ likes: 2, dislikes: 3, followers: 10 }));