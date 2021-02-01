class Quadrado {
    constructor(lado) {
        this._lado = lado
    }

    // getters

    get lado() { return this._lado }
    get area() { return this._lado * this._lado }

    // setters

    set lado(novoLado) {
        if (typeof novoLado !== 'number') throw 'O lado deve ser um número!'
        if (novoLado <= 0) throw 'O lado deve ser maior que zero!'
        this._lado = novoLado
    }
}

const quad = new Quadrado(5)

console.log(quad)
console.log(quad.area)

quad.lado = 20

console.log(quad)
console.log(quad.area)