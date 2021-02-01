// Crie uma classe que herda de Ponto2D chamada Ponto3D que tem como atributo adicional "z"
// Reimplemente o método calcularDistancia() na classe Ponto3D que desta vez deve receber uma outra instância de Ponto3D.

// O cálculo da distância entre dois pontos 3D é dado pela raizQuadrada(x² + y² + z²)

class Ponto2D {
    constructor(x, y) {
        this._x = x
        this._y = y
    }

    get x() { return this._x }
    get y() { return this._y }

    calcularDistancia(ponto) {
        if (!ponto instanceof Ponto2D || ponto instanceof Ponto3D) throw `O ponto segundo ponto deve ser um Ponto2D`
        return Math.sqrt(((ponto.x - this.x) ** 2) + ((ponto.y - this.y) ** 2))
    }
}

class Ponto3D extends Ponto2D {
    constructor(x, y, z) {
        super(x, y)
        this._z = z
    }
    get z() { return this._z }
    calcularDistancia(ponto) {
        if (!(ponto instanceof Ponto3D)) throw `O segundo ponto deve ser um Ponto3D`
        return Math.sqrt(((ponto.x - this.x) ** 2) + ((ponto.y - this.y) ** 2) + ((ponto.z - this.z) ** 2))
    }
}

const pontoA = new Ponto2D(-2, 3)
const pontoB = new Ponto2D(-5, -9)

const pontoC = new Ponto3D(4, -8, -9)
const pontoD = new Ponto3D(2, -3, -5)



console.log(pontoA)
console.log(pontoB)
console.log(pontoA.calcularDistancia(pontoB))

console.log(pontoC)
console.log(pontoD)
console.log(pontoC.calcularDistancia(pontoD))