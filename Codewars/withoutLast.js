function withoutLast(arr) {
    return arr.slice(0, -1); // removes the last element
}

console.log(withoutLast([ 12, 58, 11, 5, 70, 57 ]))


// ОПИСАНИЕ:
//     В этом ката функция возвращает массив/список чисел без последнего элемента. Функция уже написана для вас, и базовые тесты проходят успешно, но случайные тесты терпят неудачу. Ваша задача — выяснить причину и исправить ее.
//     Удачи!
//     Совет: следите за побочными эффектами.
//     Немного полезного чтения: Документы MDN о массивах
