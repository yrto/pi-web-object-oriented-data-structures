// Crie uma classe Bola cujos atributos são cor e raio.
// Crie um método que imprime a cor da bola.
// Crie um método para calcular a área dessa bola.
// Crie um método para calcular o volume da bola.
// Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.

// Área da esfera = 4*3.14*r*r;
// Volume da esfera = 4*3.14*r*r*r/3

class Bola {
    constructor(cor, raio) {
        this.cor = cor
        this.raio = raio
    }
    getColor() {
        return this.cor
    }
    getArea() {
        return (4 * 3.14 * this.raio * this.raio).toFixed(2)
    }
    getVolume() {
        return (this.getArea() * (this.raio / 3)).toFixed(2)
    }
}

const novaBola = new Bola('azul', 10)

console.log("Cor: " + novaBola.getColor())
console.log("Área: " + novaBola.getArea())
console.log("Volume: " + novaBola.getVolume())