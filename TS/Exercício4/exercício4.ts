function compareTwoNumbers(n1:number, n2:number): number {
    let higherNumber: number;
    let lowerNumber: number;

    if (n1 > n2) {
        higherNumber = n1;
        lowerNumber = n2;
    } else {
        higherNumber = n2;
        lowerNumber = n1;
    }
    
    const difference = higherNumber - lowerNumber;

    return difference
}