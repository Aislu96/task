function cutIt(arr) {
    let num = arr[0].length;
    let array = [];
    for (let i = 1; i < arr.length; i++) {
        if (num > arr[i].length) {
            num = arr[i].length;
        }
    }

    for (let j = 0; j < arr.length; j++) {
        array.push(arr[j].slice(0, num));
    }
    return array;
}

cutIt(["ab","cde","fgh"]);
cutIt(["abc","defgh","ijklmn"])
cutIt(["codewars","javascript","java"])
//Задача
// Кодирование в функции cutIt, функция принимает 1 параметр: arr. arrпредставляет собой строковый массив.
//
// Первая миссия: Traversing arr, найти самую короткую длину строки.
//
// Вторая миссия: arrснова пройдя, перехватить все строки до самой короткой длины (начиная с индекса 0). вы можете использовать один из фрагментов(), substring() или substr(). вернуть результат после завершения работы.
//
// например:
//
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
