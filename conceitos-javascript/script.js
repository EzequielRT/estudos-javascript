let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.find(function (item) {
    return (item === 16) ? true : false;  // Busca e retorna o item do Array
});

lista2 = lista.findIndex(function (item) { // Busca e retorna a posicao do item no Array
    return (item === 16) ? true : false;
});

let res = lista2;

console.log(res);