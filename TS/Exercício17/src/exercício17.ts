function validateCpf(cpf:string): boolean{
    // let splitCpf: any = cpf.replace("-",".").replace(/\./g, "").split("");
    let splitCpf: any = cpf.replace(/[\s.-]*/igm, '');

    let reverseCpf: Array<string> = splitCpf.split("").reverse().join("");
    if (!splitCpf || splitCpf !== 11 || splitCpf === reverseCpf) {
        return false;
    } else {

    // PRIMEIRO DÍGITO VERIFICADOR
    let ten: number = 10;
    let sum: number = 0;

    for (let index = 0; index < (splitCpf.length - 2); index++) {
        sum = sum + (splitCpf[index] * ten);
        ten--;
    }

    let rest: number = sum % 11;
    let sub: number = 11 - rest;
    let dv1: number = 0;
    if (sub >= 10) {
        dv1 = 0;
    } else {
        dv1 = sub;
    }
    // SEGUNDO DÍGITO VERIFICADOR
    let eleven: number = 11;
    sum = 0;

    for (let i = 0; i < (splitCpf.length - 1); i++) {
        sum = sum + (splitCpf[i] * eleven);
        eleven--;
    }

    rest = sum % 11
    sub = 11 - rest;
    let dv2: number = 0;
    if (sub >= 10) {
        dv2 = 0;
    } else {
        dv2 = sub;
    }

    const cond1: boolean = (dv1 == splitCpf[9]);
    const cond2: boolean = (dv2 == splitCpf[10]);

    return (cond1 && cond2);
    }
}

console.log(validateCpf('145.382.206-20'));
