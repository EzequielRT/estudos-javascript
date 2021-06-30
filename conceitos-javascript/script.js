if(typeof localStorage.nome === "undefined") {
    localStorage.nome = prompt("Qual seu nome?");
}

document.getElementById('info').innerHTML = localStorage.nome; // Guarda os dados no navegador permanentemente

// sessionStorage -> Guarda os dados até o navegador ser fechado 