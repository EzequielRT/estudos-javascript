function azul () {
    limpar();
    document.getElementById('titulo').classList.add('azul');
}
function vermelho () {
    limpar();
    document.getElementById('titulo').classList.add('vermelho');
}
function verde () {
    limpar();
    document.getElementById('titulo').classList.add('verde');
}
function limpar() {
    document.getElementById('titulo').classList.remove('azul');
    document.getElementById('titulo').classList.remove('vermelho');
    document.getElementById('titulo').classList.remove('verde');
}
function mostrarTelefone(elemento) {
    elemento.style.display = 'none';
    document.getElementById('telefone').style.display = 'block';
}
function ocultarTexto() {
    document.getElementById('texto').style.display = 'none';
    document.getElementById('ocultar').style.display = 'none';
    document.getElementById('mostrar').style.display = 'block';
}
function mostrarTexto() {
    document.getElementById('texto').style.display = 'block';
    document.getElementById('ocultar').style.display = 'block';    
    document.getElementById('mostrar').style.display = 'none';
}