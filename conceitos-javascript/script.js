function digitou(evento) {
    if (evento.keyCode === 13 && evento.ctrlKey === true) { // tecla Enter
        let texto = document.getElementById('campo').value;

        console.log(texto);
    }
}