let sortPeople = function (names, heights) {
    let arr = [];
    let heightsSort = heights.slice().sort((a, b) => b - a);
    for (let i = 0; i < heightsSort.length; i++) {
        let val = heights.indexOf(heightsSort[i]);
        arr.push(names[val])
    }
    return arr;
};

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]));

console.log(sortPeople(["Алиса", "Боб", "Боб"], [155, 185, 150]))