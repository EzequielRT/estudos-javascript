function horaAtual() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let txt = h+':'+m+':'+s;

    document.querySelector('#demo').innerHTML = txt; // Funcao para retornar a hora atual
}

let timer;

function comecar() {
    timer = setInterval(horaAtual, 1000); // Funcao para retornar a funcao horaAtual a cada 1seg
}

function parar() {
    clearInterval(timer); // Limpa o intervalo da variavel timer
}