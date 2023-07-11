"use strict";
let companyStock = [
    { name: "MacMugffin", quantity: 37, unityValue: 51.040 },
    { name: "Vassoura voadora", quantity: 56, unityValue: 210.0 },
    { name: "Laço da verdade", quantity: 32, unityValue: 571.5 },
    { name: "O precioso", quantity: 1, unityValue: 9181.923 },
    { name: "Caneta de 250 cores", quantity: 123, unityValue: 17 },
    { name: "Plumbus", quantity: 13, unityValue: 140.44 },
    { name: "Pokebola", quantity: 200, unityValue: 99.9915 }
];
const adjustPrice = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$ " + valorAjustado;
};
function listProducts(products) {
    products.map(product => {
        product.unityValue = adjustPrice(product.unityValue);
    });
    return products.sort((a, b) => a.quantity - b.quantity);
}
console.log(listProducts(companyStock));
//# sourceMappingURL=exerc%C3%ADcio14.js.map