//Задача
// Кодирование в функции whatNumberIsIt. функция принимает 1 параметр: n. это число.
//
// Чтобы судить о количестве n. Если n является одной из пяти вышеуказанных констант, верните одну из следующих строк:
//
// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Другие значения должны вернуться "Input number is xxx". xxx означает это число.
//
// Например:
//
// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// Вам нужно подумать о том, как правильно и эффективно судить об этом, и не забывать isNaN().

function whatNumberIsIt(n){
    if (n===Infinity) return "Input number is Number.POSITIVE_INFINITY";
    else if (n===-Infinity) return "Input number is Number.NEGATIVE_INFINITY";
    else if (n==1.7976931348623157e+308) return "Input number is Number.MAX_VALUE";
    else if (isNaN(n)) return "Input number is Number.NaN";
    else if (n==5e-324) return "Input number is Number.MIN_VALUE";
    else return ("Input number is "+n);
}


whatNumberIsIt(1/0);
whatNumberIsIt(100);
whatNumberIsIt(1.7976931348623157e+308);

