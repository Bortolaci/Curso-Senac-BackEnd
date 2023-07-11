//CONVERTER JS PRA TS

function checkTriangle(a:number, b:number, c:number): string {
    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilatero";
    } else {
        return "Isósceles";
    }
}