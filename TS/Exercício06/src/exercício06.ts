/*
function operations(n1:number, n2:number): void {
    let sum: number = n1 + n2;
    let difference: number = n1 - n2;
    let multiplication: number = n1 * n2;
    let division: number = n1 / n2;

    console.log(`Números recebidos: ${n1}, e ${n2}\nSoma: ${sum}\nSubtração: ${difference}\nMultiplicação: ${multiplication}\nDivisão: ${division}`);
}

operations(10,20);
*/

function operations(n1:number, n2:number): string {
    let sum: number = n1 + n2;
    let difference: number = n1 - n2;
    let multiplication: number = n1 * n2;
    let division: number = n1 / n2;

    return `Números recebidos: ${n1}, e ${n2}\nSoma: ${sum}\nSubtração: ${difference}\nMultiplicação: ${multiplication}\nDivisão: ${division}`;
}

let result = operations(10,20);

console.log(result);
