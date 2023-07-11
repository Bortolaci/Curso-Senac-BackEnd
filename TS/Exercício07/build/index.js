"use strict";
function presentation(name, date) {
    let presentationName = name;
    let arrayDate = date.split('/');
    let day = arrayDate[0];
    let month = arrayDate[1];
    let year = arrayDate[2];
    return `Olá, me chamo ${presentationName}, nasci no dia ${day} do mês ${month} do ano de ${year}`;
}
console.log(presentation('João', '18/11/2003'));
//# sourceMappingURL=index.js.map