"use strict";
function IDrenovation() {
    let birthDate = '24/04/1993';
    let idIssue = '07/11/2015';
    let date = new Date();
    let birthDateSplit = birthDate.split("/");
    birthDate = new Date(birthDateSplit[2], (birthDateSplit[1] - 1), birthDateSplit[0]);
    let timeDiffAge = Math.abs(date - birthDate);
    let age = Math.floor((timeDiffAge / (1000 * 3600 * 24)) / 365);
    let idIssueSplit = idIssue.split("/");
    idIssue = new Date(idIssueSplit[2], (idIssueSplit[1] - 1), idIssueSplit[0]);
    let timeDiffID = Math.abs(date - idIssue);
    let idTime = Math.floor((timeDiffID / (1000 * 3600 * 24)) / 365);
    const cond1 = age <= 20 && idTime >= 5;
    const cond2 = age > 20 && age <= 50 && idTime >= 10;
    const cond3 = age > 50 && idTime >= 15;
    return (cond1 || cond2 || cond3);
}
console.log(IDrenovation());
//# sourceMappingURL=exerc%C3%ADcio15.js.map