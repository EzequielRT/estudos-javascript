document.querySelector('.texto').scrollTop // Verifica a posicao do scroll vertical
document.querySelector('.texto').scrollLeft // Verifica a posicao do scroll horizontal
document.querySelector('.texto').scrollTo(0, 0) // Seta a posicao do scroll na horizontal e vertical

window.scrollY // Verifica a posicao do scroll do navegador vertical
window.scrollX // Verifica a posicao do scroll do navegador horizontal
window.scrollTo(0, 0) // Seta a posicao do scroll do navegador na horizontal e vertical

function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}