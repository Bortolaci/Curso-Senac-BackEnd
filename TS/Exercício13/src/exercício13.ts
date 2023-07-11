type costumer = {
    costumer: string,
    totalBalance: number,
    debts: Array<number>
}

let negativated: Array<costumer> = [];

let costumers: Array<costumer> = [
    {costumer: "João", totalBalance: 1000, debts: [100, 200, 300]},
    {costumer: "Paula", totalBalance: 7500, debts: [200, 1040]},
    {costumer: "Pedro", totalBalance: 10000, debts: [5140, 6100, 100, 2000]},
    {costumer: "Luciano", totalBalance: 100, debts: [100, 200, 1700]},
    {costumer: "Artur", totalBalance: 1800, debts: [200, 300]},
    {costumer: "Soter", totalBalance: 1200, debts: []}
];

function getNegativeAmount(users: costumer[]): costumer[] {
    calculateDebts();
    return users.filter((clients) => {
        return clients.totalBalance < 0;
    })
}

function calculateDebts() {
    return costumers.map(user => {
        const sumDebts = user.debts.reduce((acumulator: number, value: number) => 
            value ? acumulator += value : 0
        , 0);
        user.totalBalance -= sumDebts;
        user.debts = [];
    });
}

console.log(getNegativeAmount(costumers));

// function negativeCostumers(array: any): any {
//     for (let i = 0; i < array.length; i++) {
//         while (array[i].debts.length != 0) {
//             array[i].totalBalance = (array[i].totalBalance) - (array[i].debts.pop());
//         }
//         if(array[i].totalBalance < 0) {
//             negativated.push(array[i]);
//         }
//     }
// }

// negativeCostumers(costumers);
// console.log(negativated);