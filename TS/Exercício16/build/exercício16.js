"use strict";
let word = '';
let wordSize = word.length;
function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        for (let i = num - 1; i > 1; i--) {
            num *= i;
        }
        return num;
    }
}
console.log(`A palavra "${word}" tem ${factorial(wordSize)} anagramas.`);
//# sourceMappingURL=exerc%C3%ADcio16.js.map