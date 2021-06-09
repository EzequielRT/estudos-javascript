let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.map(function (item) { // Multiplicando itens do array com Map
    return item * 2;
});

let res = lista2;

console.log(res);