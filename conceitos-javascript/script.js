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
    ligado:false,
    ligar:function() {
        this.ligado = true;
        console.log("Ligando o "+this.modelo);
        console.log("VRUM VRUM");
    },
    acelerar:function() {
        if (this.ligado == true) {
        console.log("Riihhhhh");
        } else {
            console.log(this.marca+" "+this.modelo+" não está ligado!");
        }
    }
};

console.log(carro.modelo);
carro.acelerar();

let motos = [
    {marca:'Honda', modelo:'cg 150'},
    {marca:'Yamaha', modelo:'Crosser 150'},
    {marca:'BMW', modelo:'GS 1200'}
];

console.log(motos[2].modelo);
console.log(motos[1].modelo);