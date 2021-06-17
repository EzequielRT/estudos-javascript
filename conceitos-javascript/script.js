
// Desconstruindo Array Ex 02
let [nome, sobrenome, idade=20] = ['Ezequiel', 'Rodrigues']; // = Ezequiel Rodrigues 20
console.log(nome, sobrenome, idade);


// Criando Array com Function e descontruindo

function criar() {
    let a = [1,2,3];
    return a;
}

let [a,b,c] = criar();
console.log(a,b,c); // = 1, 2, 3