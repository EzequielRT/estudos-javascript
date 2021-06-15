let pessoa = {
    nome: "Ezequiel",
    sobrenome: "Rodrigues",
    idade: 90,
    social:{
        facebook:"Ezequiel Rodrigues",
        instagram:"Zek_rodrigues"
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    },
};

//Desconstruindo objeto ex1
/*let nome = pesssoa.nome;
let sobrenome = pesssoa.sobrenome;
let idade = pesssoa.idade;
console.log(nome, sobrenome, idade);*/

//Desconstruindo objeto ex2
/*const {nome, sobrenome, idade} = pessoa;
console.log(nome, sobrenome, idade);*/

//Desconstruindo objeto ex3
/*const {nome:pessoaNome, sobrenome, idade} = pessoa; // Troca o nome da variavel
console.log(pessoaNome, sobrenome, idade);*/

//Desconstruindo objeto ex4
const {nome, sobrenome, apelido = 'n/d'} = pessoa; // Caso o objeto nn tenha o valor define o padrao
console.log(nome, sobrenome, apelido);