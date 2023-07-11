function IDrenovation(): boolean {
    let birthDate: any = '24/04/1993';
    let idIssue: any = '07/11/2015';
    let date: any = new Date();
 
    let birthDateSplit = birthDate.split("/");
    birthDate = new Date(birthDateSplit[2], (birthDateSplit[1] - 1), birthDateSplit[0]);    
    let timeDiffAge: number = Math.abs(date - birthDate);
    let age: number = Math.floor((timeDiffAge / (1000 * 3600 * 24)) / 365);

    let idIssueSplit = idIssue.split("/");
    idIssue = new Date(idIssueSplit[2], (idIssueSplit[1] - 1), idIssueSplit[0]);    
    let timeDiffID: number = Math.abs(date - idIssue);
    let idTime: number = Math.floor((timeDiffID / (1000 * 3600 * 24)) / 365);
    
    const cond1: boolean = age <= 20 && idTime >= 5;
    const cond2: boolean = age > 20 && age <= 50 && idTime >= 10;
    const cond3: boolean = age > 50 && idTime >= 15;

    return (cond1 || cond2 || cond3);
}

console.log(IDrenovation());