import { Animal, Gato } from './animal.js';

let gato1 = new Animal('Gato', 4);
console.log( gato1.falar('Miau') );
console.log( gato1.dados );


let gato2 = new Gato(4, 'Preto');
console.log( gato2.dados );
console.log( `Cor: ${gato2.getCor()}` );


