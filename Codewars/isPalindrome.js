//Написать функцию, кооторая принимает на вход строку ипроверяет, является ли она палиндромом.

function isPalindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome('Anna'));//true
console.log(isPalindrome('Anya'));//false
