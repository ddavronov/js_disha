// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность.

a = +prompt('Введите число', '');
b = +prompt('Введите другое число', '');

function powerOfNumber(a, b) {
    let result = a;

   for (let i = 1; i < b; i++) {
       result *= a;
   }
   return result;
}
console.log(powerOfNumber(a, b));