class Retangulo {
    constructor(base, altura) {
        this._base = base
        this._altura = altura
    }

    // getters

    get base() { return this._base }
    get altura() { return this._altura }
    get area() { return this._base * this._altura }

    // setters

    set base(novaBase) {
        if (typeof novaBase !== 'number') throw 'A base deve ser um número!'
        this._base = novaBase
    }
    set altura(novaAltura) {
        if (typeof novaAltura !== 'number') throw 'A altura deve ser um número!'
        this._altura = novaAltura
    }
}

const rect = new Retangulo(5, 10)

console.log(rect)
console.log(rect.area)

rect.base = 15
rect.altura = 20

console.log(rect)
console.log(rect.area)