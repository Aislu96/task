//Напишите функцию isItLetterили is_it_letterили IsItLetter, которая сообщает нам, является ли данный символ буквой или нет.

function isItLetter(character) {
    return /^[a-zA-Z]+$/.test(character);
}


isItLetter('a') //true;
isItLetter('1') // false;
