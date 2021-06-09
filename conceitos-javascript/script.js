let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.some(function (item) { // Retorna TRUE se algum dos itens estiverem dentro do parametro
    if (item > 20) {
        return true;
    } else {
        return false;
    }
});

let res = lista2;

console.log(res);