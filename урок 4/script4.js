// 4.	Напишите функцию, которая возвращает n-е число Фибоначчи.
// Число, которое должна вернуть функция вводит пользователь.
// Для решения используйте цикл.
// Пользователь ввел: 6
// Ряд Фибоначчи: 1, 1, 2, 3, 5, 8, 13, ...
// Функция должна вернуть: 8

var a = prompt("Введите число, которое нужно вернуть: ")

function fibonach(n) {
    var a = 1;
    var b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fibonach(a));