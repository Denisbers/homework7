
function digit(n) {
    while (n % 3 == 0) {
        n /= 3;
    }
    return n == 1;
}

console.log(digit(13));


/* 
Дано некоторое число.Определить, можно ли получить это число путем 
возведения числа 3 в некоторую степень. 
(Например, числа 9, 81 можно получить, а 13 - нельзя) 
*/