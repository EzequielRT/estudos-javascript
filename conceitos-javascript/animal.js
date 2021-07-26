export class Animal {

    constructor(tipo, pernas) {
        this.tipo = tipo;
        this.pernas = pernas;
    }

    falar = (som = 'Som qualquer') => som ;

    get dados() {
        return `Tipo: ${this.tipo}, Pernas: ${this.pernas}`;
    }

}

export class Gato extends Animal {

    constructor(pernas, cor) {
        super('Gato', 4);
        this.cor = cor;
    }

    falar = (som = 'Miau') => som ;

    getCor() {
        return this.cor;
    }

}