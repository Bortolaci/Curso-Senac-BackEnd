function toRomanNumbers(num:number): string {
    let romanNumbers: any[] = [
        {letter: 'M', value: 1000},
        {letter: 'CM', value: 900},
        {letter: 'D', value: 500},
        {letter: 'CD', value: 400},
        {letter: 'C', value: 100},
        {letter: 'XC', value: 90},
        {letter: 'L', value: 50},
        {letter: 'XL', value: 40},
        {letter: 'X', value: 10},
        {letter: 'IX', value: 9},
        {letter: 'V', value: 5},
        {letter: 'IV', value: 4},
        {letter: 'I', value: 1}
    ];

    let letter: string = '';
    
    //OUTRA FORMA DE USAR O FOR NESSE CASO 
    /*
    for (const {letter, value} of romanNumbers) {}
    */
        for (let index = 0; index < romanNumbers.length; index++) {
            while (num >= romanNumbers[index].value) {
                num -= romanNumbers[index].value;
                letter += romanNumbers[index].letter;                  
            }
        }

    return letter;
}

console.log(toRomanNumbers(1990));