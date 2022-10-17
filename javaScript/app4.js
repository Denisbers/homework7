function digit(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(digit(prompt('enter number')));


/* 
Дано целое число. Выяснить, является ли оно 
простым (простым называется число, большее 1, 
не имеющих других делителей кроме 1 и самого себя) 
*/
