let info = ['Ezequiel Rodrigues', 'Rodrigues', 'Trindade', '@ezequiel'];


// Desconstruindo Array Ex 01

//let [nomeCompleto, nome, sobrenome, instagram] = info;
//console.log(nomeCompleto, nome, sobrenome, instagram); // = Ezequiel Rodrigues Rodrigues Trindade @ezequiel


//let [nomeCompleto, , , instagram] = info;
//console.log(nomeCompleto, instagram); // Selecionando itens do array Ex: 01 = Ezequiel Rodrigues @ezequiel

let [, nome, sobrenome] = info;
console.log(nome, sobrenome); // Selecionando itens do array Ex: 02 = Rodrigues Trindade