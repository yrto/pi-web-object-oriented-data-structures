// Crie uma classe Retângulo cujos atributos são lado_a e lado_b.
// Crie um método para calcular a área desse retângulo.
// Crie um objeto dessa classe e calcule a área e a imprima em seguida.

class Retangulo {
    constructor(ladoA, ladoB) {
        this.ladoA = ladoA
        this.ladoB = ladoB
    }
    getArea() {
        return this.ladoA * this.ladoB
    }
}

const novoRetangulo = new Retangulo(10, 5)

console.log(`Área: ${novoRetangulo.getArea()}`)