let dia = 7;
let diaNome = null;
let fimDeSemana = null;

switch (dia) {
    case 1:
        diaNome = "segunda-feira";
        break;
    case 2:
        diaNome = "terça-feira";
        break;
    case 3:
        diaNome = "quarta-feira";
        break;
    case 4:
        diaNome = "quinta-feira";
        break;
    case 5:
        diaNome = "sexta-feira";
        break;
    case 6:
        diaNome = "sábado";
        break;
    case 7:
        diaNome = "domingo";
        break;
}

switch (dia) {
    case 6:
    case 7:
        fimDeSemana = "fim de semana.";
        break;
    default:
        fimDeSemana = "dia de semana.";
}


document.getElementById('dia').innerHTML = "Hoje é "+diaNome+", "+fimDeSemana;