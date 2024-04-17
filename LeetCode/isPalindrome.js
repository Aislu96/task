var isPalindrome = function(x) {
    return x.toString() == x.toString().split('').reverse().join('');
};

isPalindrome(121);
isPalindrome(-121);
isPalindrome(10);
