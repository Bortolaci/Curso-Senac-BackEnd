let resultado = [];
let compararN = prompt('Digite a quantidade de números para comparar: ');

for (let index = 0; index < compararN; index++) {
    resultado.push(Number(prompt(`Digite o ${index+1}º número: `)));
}

alert(`O número ${Math.max(...resultado)} é o maior.`);