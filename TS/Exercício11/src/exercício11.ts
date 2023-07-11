enum sector {
    marketing = "Marketing",
    sales = "Vendas",
    financial = "Financeiro"
}

type person = {
    name: string,
    salary: number,
    sector: string,
    faceToFace: boolean
}

let companyEmployees: Array<person> = [
    {name: 'Marcos', salary: 2500, sector: sector.marketing, faceToFace: true},
    {name: 'Maria', salary: 1500, sector: sector.sales, faceToFace: false},
    {name: 'Salete', salary: 2200, sector: sector.financial, faceToFace: true},
    {name: 'João', salary: 2000, sector: sector.marketing, faceToFace: false},
    {name: 'Josué', salary: 5500, sector: sector.financial, faceToFace: true},
    {name: 'Natalia', salary: 4700, sector: sector.sales, faceToFace: true},
    {name: 'Paola', salary: 3500, sector: sector.marketing, faceToFace: true}
]

let trulyOnes: Array<person> = [];

function mrktFaceToFace(persons:any):any {          //PODERIA USAR O MÉTODO .FILTER
    for (let i = 0; i < persons.length; i++) {
        if((persons[i].sector == 'Marketing') && (persons[i].faceToFace == true)) {
            trulyOnes.push(persons[i]);
        }
    }
}

mrktFaceToFace(companyEmployees);
console.log(trulyOnes);
