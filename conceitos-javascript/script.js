let requisitar1 = ()=>{

    // NÃO espera concluir a requisição para avançar para a próxima etapa dentro do bloco
    fetch('bd.json')
        .then(resposta => resposta.json())
        .then(json => console.log(json)); 

        console.log("Alguma coisa..."); // Roda antes do Fetch
}

// Requisição assíncrona
async function requisitar2() {

    // Espera a váriável possuir valor para avançar para a próxima etapa dentro do bloco
    const resposta = await fetch('bd.json'); 
    const json = await resposta.json(); 

    console.log(json);

    console.log("Alguma coisa..."); // Aguarda o Fetch ser concluído para executar

}

requisitar2();
console.log("Texto qualquer...")