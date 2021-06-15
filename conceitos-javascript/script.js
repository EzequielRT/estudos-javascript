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
};

//Retorna nome completo ex1
/*function pegarNomeCompleto(obj) {
    return obj.nome+' '+obj.sobrenome;
}
console.log(pegarNomeCompleto(pessoa));*/

//Retorna nome completo ex1
/*function pegarNomeCompleto(obj) {
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;
    return `${nome} ${sobrenome}`;
}
console.log(pegarNomeCompleto(pessoa));*/

//Desconstruindo no proprio parametro
function pegarNomeCompleto({nome, sobrenome, social:{instagram:{url}}}) {
    return `Siga ${nome} ${sobrenome} em (${url})`;
}
console.log(pegarNomeCompleto(pessoa));