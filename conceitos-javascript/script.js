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

const {facebook, instagram} = pessoa.social;
console.log(facebook, instagram);