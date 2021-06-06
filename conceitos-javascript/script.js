let nome = 'Ezequiel Rodrigues Trindade';

let resultado1 = nome.slice(-8); // Pode começar a contagem decrescente
let resultado2 = nome.substring(0, 8); // Nao pode começar a contagem decrescente
let resultado3 = nome.substr(9, 9); // Primeiro parametro é o inicio e o segundo é a qtd de caracteres selecionados

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);