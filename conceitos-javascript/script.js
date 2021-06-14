let timer;
function rodar() {
    timer = setTimeout(function() {
        document.querySelector('#demo').innerHTML = 'Rodou!'; // Espera 2s e executa a funcao rodar
    }, 2000);
}

function parar() {
    clearTimeout(timer);
}