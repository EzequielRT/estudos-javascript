let telefone = '5546';

console.log(telefone.padEnd(9, '*')); // = 5546*****
console.log(telefone.padStart(9, '*')); // *****5546



// Exemplo
let cartao = '1234115161564511';
let lastDigits = cartao.slice(-4); // = 4511
let cartaoMascarado = lastDigits.padStart(16, '*');

console.log(`Este é seu cartão? ${cartaoMascarado}`);