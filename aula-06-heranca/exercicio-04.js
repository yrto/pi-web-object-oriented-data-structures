// Crie uma classe chamada Cubo que herda da classe Quadrado da questão anterior, e tem como atributo aticional o comprimento. Crie, além do construtor, um método chamado calcularVolume que deve fazer uso do método calcularArea da super classe, multiplicando o retorno desse método pelo valor de comprimento para obter o volume final.

class Retangulo {
    constructor(base, altura) {
        this._base = base
        this._altura = altura
    }
    get base() { return this._base }
    get altura() { return this._altura }
    calcularArea() { return this.base * this.altura }
}

class Cubo extends Retangulo {
    constructor(base, altura, profundidade) {
        super(base, altura)
        this._profundidade = profundidade
    }
    get profundidade() { return this._profundidade }
    calcularVolume() {
        return this.calcularArea() * this.profundidade
    }
}

const rect = new Retangulo(5, 10)
const cubo = new Cubo(10, 2, 7)

console.log(rect)
console.log(rect.calcularArea())

console.log(cubo)
console.log(cubo.calcularVolume())