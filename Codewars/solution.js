//Завершите решение так, чтобы оно возвращало количество раз, когда искомый_текст встречается в полном_тексте. Перекрытие не допускается: "aaa"содержит 1экземпляр "aa", а не 2.
//
// Пример использования:
//
// full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
//     ---> should return 2 since "bb" shows up twice
//
//
// full_text = "aaabbbcccc", search_text = "bbb"
//     ---> should return 1

function solution(fullText, searchText) {
    let num = 0;
    let length = searchText.length;
    for (let i = 0; i < fullText.length; i++) {
        let value = fullText.slice(i, length)
        if (value === searchText) {
            num++;
        }
        length++;
    }
    return num;
}


solution('abcdeb','b');
solution('abc','b');
solution('abbc','bb');
