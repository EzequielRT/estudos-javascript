// 1º Exemplo de Requisição Ajax
fetch('bd.json')
    .then(resposta => resposta.json()) // 1ª Promisse
    .then(json => console.log(json)); // 2ª Promisse


// 2º Exemplo de Requisição Ajax
const url = 'bd.json';
const parametros = {
    method:'GET',
    body:JSON.stringify({
        nome:'Ezequiel',
        idade:20
    })
};
fetch(url, parametros)
    .then(resposta => resposta.json()) // 1ª Promisse
    .then(json => console.log(json)); // 2ª Promisse