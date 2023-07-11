let word: string = '';
let wordSize: number = word.length;

function factorial(num:number): number {
    // let result = num
    
    if (num <= 1) {
        return 1;
    } else {
        //COM LAÇO WHILE
        /*
        while (num > 1) {
            num--;
            result *= num;
        }
        return result;
        */
        
        //COM LAÇO FOR
        for(let i = num - 1; i > 1; i--) {
            num *= i;
        }
        return num;
    }
}

console.log(`A palavra "${word}" tem ${factorial(wordSize)} anagramas.`);
