// Как строгий старший брат, я ограничиваю младшего брата Васю во времени, которое он проводит за компьютерными играми. Я определяю прайм-тайм как период времени, до которого Васе разрешено играть в компьютерные игры. Я указываю час начала и час окончания как пару целых чисел.
//
//     Мне нужна функция, которая будет принимать три числа - текущий момент (текущий час), час начала разрешенного периода времени и час окончания разрешенного периода времени. Функция должна давать ответ на вопрос (в виде логического значения): "Сможет ли Вася сыграть за указанное время?"
//
// Если я говорю, что прайм-тайм с 12 до 15, это означает, что в 12:00 можно играть в компьютер, но в 15:00 игр уже не должно быть.
//
//     Я позволю Васе играть хотя бы час в день.


function canIPlay(now,start,end) {
    if(end < start){
        end += 24;
        if(now < start) now += 24;
    }

    return now >= start && now < end;
}