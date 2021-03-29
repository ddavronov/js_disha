// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.

let a = +prompt("Введите число:");
let b = +prompt("Введите второе число:");
let sign = prompt('Введите знак:', '+/*-');

function calculate(a,b,sign) {
    if (a == NaN || b == NaN){
        return "Введите число"
    } else {
        switch(sign){
            case '*':
                return a*b;
            case '/':
                if (b == 0){
                    alert("Не делиться на 0");
                    break;
                } else {
                    return a/b;
                }
            case '-':
                return a-b;
            case '+':
                return a+b;
            default:
                return "Введите один знак из четырех данных + - * /.";
        }
    }
}
alert(calculate(a,b,sign))