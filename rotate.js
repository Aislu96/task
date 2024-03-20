//Перевернуть матрицу 3х3
// Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.
// Дополнительно: Напишите еще 2 функции, которое переворачивают матрицу на 180 и 270 граудсов.

// [1, 2, 3]     [7, 4, 1]
// [4, 5, 6]  => [8, 5, 2]
// [7, 8, 9]     [9, 6, 3]

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function rotate(source) {
    const rotated = source[0].map(_ => []);
    for (let i = 0; i < source.length; i++) {
        debugger
        for (let j = 0; j < source[i].length; j++) {
            const value = source[i][j];
            rotated[j][source.length - 1 - i] = value;
        }
    }
    return rotated;
}

function rotate180(source) {
    return rotate(rotate(source));
}

function rotate360(source) {
    return rotate(rotate180(source));
}

function print(array) {
    array.forEach(i => console.log(i))
}

print(rotate(matrix));
print(rotate180(matrix));
print(rotate360(matrix));
