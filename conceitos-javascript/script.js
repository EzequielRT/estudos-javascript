let pessoa = {
    nome: "Ezequiel",
    sobrenome: "Rodrigues",
    idade: 90,
    social:{
        facebook:"Ezequiel Rodrigues",
        instagram: {
            url:'@zek_rodrigues',
            seguidores:1000
        }
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    },
};

/*const {nome, idade, social:{instagram}} = pessoa;
console.log(nome, idade, instagram);*/

/*const {nome, idade, social:{instagram:{url:instagram, seguidores}}} = pessoa;
console.log(nome, idade, instagram, seguidores);*/