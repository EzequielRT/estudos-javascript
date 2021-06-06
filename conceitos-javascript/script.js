/*let texto = ''; // FOR LOOP

for (let i = 0; i < 50; i++) {
    texto = texto + i + '<br>';
}
document.getElementById('demo').innerHTML = texto;*/


let carros = [ 'Ferrari', 'Fusca', 'Palio', 'Corolla']; // FOR LOOP ARRAY

let html = '<ul>';

for (let i in carros) {
    html = html + '<li>' + carros[i] + '</li>';
}

html += '</ul>';

document.getElementById('demo').innerHTML = html;