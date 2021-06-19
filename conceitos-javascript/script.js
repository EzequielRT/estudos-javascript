// Transforma uma string em um JSON

let pessoa = JSON.parse('{"nome":"Matheus", "idade":23, "estetica": {"altura":1.90, "peso":80}}');

console.log(pessoa.nome, pessoa.estetica.altura);