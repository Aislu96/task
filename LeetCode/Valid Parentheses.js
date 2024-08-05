var isValid = function(s) {
    let arr = [];
    if(s.length < 2) return false;
    if(s[0] === ")" || s[0] === "]" || s[0] === "}") return false;
    for( let i = 0; i < s.length; i++){
        let num = arr.length -1;
        if(s[i] === "(" || s[i] === "[" || s[i] === "{") {
            arr.push(s[i])
        } else if (arr[num] === '(' && s[i] === ')') {
            arr.pop();
        } else if (arr[num] === '{' && s[i] === '}') {
            arr.pop();
        } else if (arr[num] === '[' && s[i] === ']') {
            arr.pop();
        } else {
            return false;
        }
    }
    return arr.length === 0
};

isValid("()");
isValid("()[]{}");
isValid("(]");