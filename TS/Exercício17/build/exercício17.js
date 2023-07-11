"use strict";
function validateCpf(cpf) {
    let splitCpf = cpf.replace(/[\s.-]*/igm, '');
    let reverseCpf = splitCpf.split("").reverse().join("");
    if (splitCpf === reverseCpf) {
        return false;
    }
    else {
        let ten = 10;
        let sum = 0;
        for (let index = 0; index < (splitCpf.length - 2); index++) {
            sum = sum + (splitCpf[index] * ten);
            ten--;
        }
        let rest = sum % 11;
        let sub = 11 - rest;
        let dv1 = 0;
        if (sub >= 10) {
            dv1 = 0;
        }
        else {
            dv1 = sub;
        }
        let eleven = 11;
        sum = 0;
        for (let i = 0; i < (splitCpf.length - 1); i++) {
            sum = sum + (splitCpf[i] * eleven);
            eleven--;
        }
        rest = sum % 11;
        sub = 11 - rest;
        let dv2 = 0;
        if (sub >= 10) {
            dv2 = 0;
        }
        else {
            dv2 = sub;
        }
        const cond1 = (dv1 == splitCpf[9]);
        const cond2 = (dv2 == splitCpf[10]);
        return (cond1 && cond2);
    }
}
console.log(validateCpf('145.382.206-20'));
//# sourceMappingURL=exerc%C3%ADcio17.js.map