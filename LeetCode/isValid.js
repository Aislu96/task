let isValid = function(s) {
    let arrayOpen = ['(', '[', '{'];
    let arrayClosed = [')', ']', '}'];
    let arrayTemp = [];
    for( let i = 0; i < s.length; i++) {
        if(arrayOpen.includes(s[i])) {
            arrayTemp.push(s[i]);
        } else if (arrayClosed.includes(s[i])){
            let  closedKey = arrayClosed.indexOf(s[i]);
            let openValue = arrayOpen[closedKey];
            if(arrayTemp[arrayTemp.length - 1] === openValue){
                arrayTemp.pop()
            } else {
                return false;
            }
        }
    }
    return arrayTemp.length === 0;
};

console.log(isValid("{[()]}"))
