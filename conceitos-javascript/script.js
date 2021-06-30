function Animal() {
    this.raca = "Cão";
    this.nome = "Lulu";
    this.idade = 200;
    this.peso = 10;

    this.fazerXixi = () => {
        console.log("xiiiiiii...");
    };

    this.comer = (kg) => {
        for(var i=0;i<kg;i++){
            this.mastigar();
        }
        console.log("huum...");
        this.peso = this.peso + (kg/2);
    };

    this.mastigar = () => {
        console.log("Nhoc...");
    };

}

var lulu = new Animal();
lulu.raca = "Gato";
lulu.nome = "Lulu";
lulu.comer(10);

var xuxu = new Animal();
xuxu.nome = "Xuxu";