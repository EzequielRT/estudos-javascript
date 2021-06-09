let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.some(function (item) { 
    return (item > 50)? true : false; // Operador ternario
});

let res = lista2;

console.log(res);