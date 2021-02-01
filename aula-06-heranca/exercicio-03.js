// Crie uma classe chamada Ponto2D que possui os atributos x e y (ambos privados)
// Crie o construtor dessa classe e um método calcularDistancia() que recebe como parâmetro uma outra instância de Ponto2D.

// A fórmula para calcular a distância entre dois pontos é dada pela raiz quadrada de (x² + y²).

class Ponto2D {
    constructor(x, y) {
        this._x = x
        this._y = y
    }

    get x() { return this._x }
    get y() { return this._y }

    calcularDistancia(ponto) {
        if (!(ponto instanceof Ponto2D)) throw `O ponto segundo ponto deve ser um Ponto2D`
        return Math.sqrt(((ponto.x - this.x) ** 2) + ((ponto.y - this.y) ** 2))
    }
}

const pontoA = new Ponto2D(-2, 3)
const pontoB = new Ponto2D(-5, -9)

console.log(pontoA)
console.log(pontoB)

console.log(pontoA.calcularDistancia(pontoB))