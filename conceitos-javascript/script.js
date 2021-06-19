//JSON

//EX  01
let pessoa = {
    nome:"Ezequiel",
    idade:90
};
console.log(pessoa.nome, pessoa.idade);


//EX 02
let pessoa2 = {
    nome:"Paola",
    idade:22,
    caracteristicas: ["sorridente", "maravilhosa", "top"] // Array de objeto
};
console.log(pessoa2.nome, pessoa2.idade, pessoa2.caracteristicas);

//EX 03
let pessoa3 = {
    nome:"Matheus",
    idade:23,
    estetica: {
        altura:1.90, // Objeto dentro de objeto
        peso:80
    }
};
console.log(pessoa3.nome, pessoa3.idade, pessoa3.estetica.altura, pessoa3.estetica.peso);