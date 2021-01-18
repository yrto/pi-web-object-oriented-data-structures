// Crie uma classe Televisor cujos atributos são:

// a. fabricante;
// b. modelo;
// c. canal atual;
// d. lista de canais;
// e. volume.

// Faça métodos para aumentar/diminuir volume, trocar o canal e sintonizar um novo canal, que adiciona um novo canal à lista de canais (somente se esse canal não estiver nesse vetor). No atributo lista de canais, devem estar armazenados todos os canais já sintonizados dessa TV.
// Obs.: O volume não pode ser menor que zero e maior que cem; só se pode trocar para um canal que já esteja na lista de canais.

class Televisor {
    constructor(fabricante, modelo) {
        this.fabricante = fabricante
        this.modelo = modelo
        this.canalAtual = 3
        this.listaCanais = []
        this.volume = 50
    }
    aumentarVolume() { if (this.volume <= 90) this.volume += 10 }
    diminuirVolume() { if (this.volume >= 10) this.volume -= 10 }
    trocarCanal(codigoCanal) { if (this.listaCanais.includes(codigoCanal)) this.canalAtual = codigoCanal }
    sintonizarCanal(codigoCanal) { if (!(this.listaCanais.includes(codigoCanal))) this.listaCanais.push(codigoCanal) }
}

const novoTelevisor = new Televisor('Sony', 'Trinitron 29"', 3, 50)

novoTelevisor.sintonizarCanal(5)
novoTelevisor.sintonizarCanal(5)
novoTelevisor.sintonizarCanal(9)
novoTelevisor.trocarCanal(7)
novoTelevisor.diminuirVolume()
novoTelevisor.diminuirVolume()
novoTelevisor.diminuirVolume()
novoTelevisor.aumentarVolume()

console.log(novoTelevisor)