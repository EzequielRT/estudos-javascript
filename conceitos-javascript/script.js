// CALLBACK
// Funcao que é executada posteriormente de determinado resultado

function alertar() {
    console.log('Opa, tudo bem?');
}

let nome = "Ezequiel";
setTimeout(alertar, 5000);
let sobrenome = "Rodrigues";
console.log(`NOME COMPLETO: ${nome+" "+sobrenome}`);