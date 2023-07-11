/*
Função que recebe string com nome, outra string com data ("26/06/2023").
Retornar string no formato: `Olá me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}.`;
*/

function presentation(name:string, date:string): string {
    let presentationName = name;
    let splitDate = date.split('/');
    let day = splitDate[0];
    let month = splitDate[1];
    let year = splitDate[2];

    return `Olá, me chamo ${presentationName}, nasci no dia ${day} do mês ${month} do ano de ${year}`;
}

console.log(presentation('João', '18/11/2003'));
