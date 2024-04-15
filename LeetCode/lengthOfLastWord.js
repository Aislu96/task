let lengthOfLastWord = function(s) {
    return s.trim().split(' ').slice(-1)[0].length;
};


console.log(lengthOfLastWord("a"));
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("Отправь меня на Луну"));
console.log(lengthOfLastWord("Луффи все еще джойбой"));
//Длина последнего слова
// Дана строка s, состоящая из слов и пробелов, верните длину последнего слова в строке.
//
//     Слово – это максимум
// подстрока
// состоящий только из символов, не являющихся пробелами.
