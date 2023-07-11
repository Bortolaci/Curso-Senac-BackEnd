"use strict";
let negativated = [];
let costumers = [
    { costumer: "João", totalBalance: 1000, debts: [100, 200, 300] },
    { costumer: "Paula", totalBalance: 7500, debts: [200, 1040] },
    { costumer: "Pedro", totalBalance: 10000, debts: [5140, 6100, 100, 2000] },
    { costumer: "Luciano", totalBalance: 100, debts: [100, 200, 1700] },
    { costumer: "Artur", totalBalance: 1800, debts: [200, 300] },
    { costumer: "Soter", totalBalance: 1200, debts: [] }
];
function getNegativeAmount(users) {
    calculateDebts();
    return users.filter((clients) => {
        return clients.totalBalance < 0;
    });
}
function calculateDebts() {
    return costumers.map(user => {
        const sumDebts = user.debts.reduce((acumulator, value) => value ? acumulator += value : 0, 0);
        user.totalBalance -= sumDebts;
        user.debts = [];
    });
}
console.log(getNegativeAmount(costumers));
//# sourceMappingURL=exerc%C3%ADcio13.js.map