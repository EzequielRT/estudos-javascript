let nome = 'Ezequiel Rodrigues Trindade';

let resultado1 = nome.length;
let resultado2 = nome.indexOf('Rodrigues');

let resultado3 = '';
if (nome.indexOf('T') > -1) {
    resultado3 = 'Achou!';
}else {
    resultado3 = 'Não achou!';
}

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);