function Animal() {
    this.raca = "Cão";
    this.nome = "Lulu";
    this.idade = 200;
    this.peso = 10;

    this.fazerXixi = () => {
        console.log("xiiiiiii...");
    };

    this.comer = (kg) => {
        console.log("huum...");
        this.peso = this.peso + (kg/2);
    };

}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";

var xuxu = new Animal();
xuxu.nome = "Xuxu";