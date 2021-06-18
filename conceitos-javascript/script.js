let lista = [1,2,3,4];

console.log(Object.keys(lista)); // Retorna os indices do array
console.log(Object.values(lista)); // Retorna os valores do array
console.log(Object.entries(lista)); // Retorna um array com o indice e seu valor



let pessoa = {
    nome:'Ezequiel',
    sobrenome:'Rodrigues',
    idade:90
}

console.log(Object.keys(pessoa)); // ["nome", "sobrenome", "idade"]
console.log(Object.values(pessoa)); // ["Ezequiel", "Rodrigues", 90]
console.log(Object.entries(pessoa)); // Retorna um array com chave e valor [Array(2), Array(2), Array(2)]