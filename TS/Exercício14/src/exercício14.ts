type stock = {name: string, quantity: number, unityValue: number | string};

let companyStock: Array<stock> = [
	{ name: "MacMugffin", quantity: 37, unityValue: 51.040},
	{ name: "Vassoura voadora", quantity: 56, unityValue: 210.0},
	{ name: "Laço da verdade", quantity: 32, unityValue: 571.5},
	{ name: "O precioso", quantity: 1, unityValue: 9181.923},
	{ name: "Caneta de 250 cores", quantity: 123, unityValue: 17},
	{ name: "Plumbus", quantity: 13, unityValue: 140.44},
	{ name: "Pokebola", quantity: 200, unityValue: 99.9915}
];

// function adjustPrice(price:any[]): any {
// 	for (let i = 0; i < price.length; i++) {
//         const adjustedPrice: string = price[i].unityValue.toFixed(2).replace('.', ',')
// 	    price[i].unityValue = "R$ " + adjustedPrice;
//     }
// }

const adjustPrice = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

function listProducts(products: stock[]): string[] {
    // use a função adjustPrice para corrigir os preços
    products.map(product => {
        product.unityValue = adjustPrice(product.unityValue as number)
    });

    return products.sort((a, b) => 
        a.quantity - b.quantity
    ) as any;
}

console.log(listProducts(companyStock));


// adjustPrice(companyStock);

// let sortedStock: Array<stock> = companyStock.sort((n1,n2) => {
//     if (n1.quantity > n2.quantity) {
//         return 1;
//     } else if (n1.quantity < n2.quantity) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(sortedStock); 