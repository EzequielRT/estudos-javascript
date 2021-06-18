/*function adicionar(...numeros) { // Operador Rest
    console.log(numeros);
}
adicionar(5, 6, 7, 8, 9, 10, 11, 12);*/

// Exemplo
function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ]
    return novoConjunto;
} 

let nomes = ["Ezequiel", "Paola"];

let outros = adicionar(nomes, "Antonio", "Maria", "Jose");

console.log(outros);