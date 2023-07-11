var dna = 'ATTGCTGCGCATTAACGACGCGTA';
var rna = dna.replace(/A/g, "U").replace(/T/g,"A");
rna = rna.replace(/G/g,"B");
rna = rna.replace(/C/g,"G");
rna = rna.replace(/B/g,"C");

console.log(rna);