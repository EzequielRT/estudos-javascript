let carros = [ // array
    'Palio', 
    'Uno', 
    'Corolla', 
    'Ferrari'
];

let carro = { // objeto
    marca:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligar:function() {
        console.log("VRUM VRUM");
    }
};

console.log(carro['marca']);
console.log(carro.modelo);
carro.ligar();
