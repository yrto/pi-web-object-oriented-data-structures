class Quadrado {

    /*
    Atributos:
    + lado
    */

    cor;

    constructor(lado) {
        if (isNaN(lado)) throw "Lado deve ser um número"
        this.lado = lado;
    };

    // Métodos

    calcularArea() {
        return this.lado * this.lado
    }
    calcularPerimetro() {
        return this.lado * 4
    }
};

const quadrado1 = new Quadrado(15);
const area1 = quadrado1.calcularArea();
const perimetro1 = quadrado1.calcularPerimetro();

console.log(quadrado1);
console.log(area1);
console.log(perimetro1);