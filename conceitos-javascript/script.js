//Ex 1
/*let numeros = [1, 2, 3, 4];
let outros = [...numeros, 5, 6, 7, 8]; // Complementando array
console.log(outros);*/

//Ex 2
/*let info = {
    nome:'Ezequiel',
    sobrenome:'Rodrigues',
    idade:99
};
console.log(info);

let novaInfo = {
    ...info,
    estado:'Eldorado do Sul',
    cidade:'Porto Alegre',
    pais:'Brasil'
};
console.log(novaInfo);*/

//Ex 3
function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status:0,
        token:'jlsjlksjkjks',
        data_cadastro:'17/06/2021'
    };
    return novasInfo;
}

console.log(adicionarInfo({nome:'Ezequiel', sobrenome:'Rodrigues'}));