let lista = [
    {id:1, nome:'Ezequiel', sobrenome:'Rodrigues'},
    {id:2, nome:'Matheus', sobrenome:'Trindade'},
    {id:3, nome:'Paola', sobrenome:'Drehmer'}
];

let pessoa = lista.find(function (item) {
    return (item.id === 2)? true : false;  // Buscando objeto atraves do id
});

let res = pessoa;

console.log(res);