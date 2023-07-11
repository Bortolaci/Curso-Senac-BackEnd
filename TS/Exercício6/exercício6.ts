function basicMath(): void {
    let n1 = Number(prompt('Digite o primeiro número: '));
    let n2 = Number(prompt('Digite o segundo número: '));
    let sum = n1 + n2;
    let subtraction = n1 - n2;
    let multiplication = n1 * n2;
    let higherNumber: any;

    if (n1 > n2) {
        higherNumber = n1;
    } else if (n1 < n2) {
        higherNumber = n2;
    } else {
        higherNumber = `Os números são iguais.`;
    }

    console.log(sum);
    console.log(subtraction);
    console.log(multiplication);
    console.log(higherNumber);
}