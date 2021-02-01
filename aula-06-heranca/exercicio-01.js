// Crie uma classe chamada Retangulo que deve possuir os atirbutos privados base e altura, e, além do construtor, crie um método chamado calcularArea() que retorna a área desse retângulo multiplicando base por altura.

class Retangulo {
    constructor(base, altura) {
        this._base = base
        this._altura = altura
    }
    get base() { return this._base }
    get altura() { return this._altura }
    calcularArea() { return this.base * this.altura }
}

const rect = new Retangulo(5, 10)

console.log(rect)
console.log(rect.calcularArea())