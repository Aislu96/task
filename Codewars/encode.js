//Кодирование длин серий (RLE) — это очень простая форма сжатия данных без потерь, при которой серии данных сохраняются как одно значение и количество данных.
//
// Простая форма RLE кодирует строку "AAABBBCCCD"как "3A3B3C1D"означающую: сначала есть 3 A, затем 3 B, затем 3 Cи наконец есть 1 D.
//
// Ваша задача — написать кодировщик и декодер RLE, используя эту технику. Кодируемый текст всегда будет состоять только из символов верхнего регистра и без цифр.

function encode(input) {
    let num = 1;
    let string = '';
    for( let i = 1; i <= input.length; i++){
        if( input[i] === input[i-1]) {
            num++;
        } else {
            string += num + input[i-1];
            num = 1;
        }
    }
    return string;
}

function decode(input) {
    const output = [];
    const nums = input.split(/\D/).map(Number);
    const letters = input.split(/\d/).filter(Boolean);

    for (let i = 0; i < nums.length - 1; i++) {
        output.push(letters[i].repeat(nums[i]));
    }

    return output.join('');
}
encode('A'), '1A';

encode('AAA'), '3A';
decode('1A'), 'A';
decode(encode('AAAAAAAAAAB')), 'AAAAAAAAAAB';
decode(encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ')), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
encode(decode('10A1B')), '10A1B';
