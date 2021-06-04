function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll() {
    if (window.scrollY === 0) {
        // oculta botao
        document.querySelector('.scroll-button').style.display = 'none';
    } else {
        // mostra botao
        document.querySelector('.scroll-button').style.display = 'block';
    }
}

//setInterval(decidirBotaoScroll, 500); // verifica posicao do scroll a cada meio segundo

window.addEventListener('scroll', decidirBotaoScroll); // monitora o scroll