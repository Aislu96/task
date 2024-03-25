//Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки.
//Вам дан один параметр — исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.

function removeChar(str){
    return str.slice(1, str.length - 1);
};


console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('ooopsss'));
