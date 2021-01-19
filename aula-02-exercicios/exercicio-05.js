// Crie uma classe Televisor cujos atributos são:

// a. fabricante;
// b. modelo;
// c. canal atual;
// d. lista de canais;
// e. volume.

// Faça métodos para aumentar/diminuir volume, trocar o canal e sintonizar um novo canal, que adiciona um novo canal à lista de canais (somente se esse canal não estiver nesse vetor). No atributo lista de canais, devem estar armazenados todos os canais já sintonizados dessa TV.
// Obs.: O volume não pode ser menor que zero e maior que cem; só se pode trocar para um canal que já esteja na lista de canais.

class Televisor {
    constructor(fabricante, modelo, listaCanais, volume) {
        this.fabricante = fabricante
        this.modelo = modelo
        this.listaCanais = listaCanais
        this.canalAtual = listaCanais.length > 0 ? listaCanais[0] : undefined
        this.volume = volume > 100 ? 100 : (volume < 0 ? 0 : volume)
    }
    aumentarVolume() { this.volume = this.volume >= 90 ? 100 : this.volume + 10 }
    diminuirVolume() { this.volume = this.volume <= 10 ? 0 : this.volume - 10 }
    canalEstaSintonizado(codigoCanal) { return this.listaCanais.includes(codigoCanal) }
    trocarCanal(codigoCanal) { if (this.canalEstaSintonizado(codigoCanal)) this.canalAtual = codigoCanal }
    sintonizarCanal(codigoCanal) { if (!(this.canalEstaSintonizado(codigoCanal))) this.listaCanais.push(codigoCanal) }
}

const novoTelevisor = new Televisor('Sony', 'Trinitron 29"', [2, 3, 4], 110)

novoTelevisor.sintonizarCanal(5)
novoTelevisor.sintonizarCanal(5)
novoTelevisor.sintonizarCanal(9)
novoTelevisor.trocarCanal(7)
novoTelevisor.diminuirVolume()
novoTelevisor.diminuirVolume()
novoTelevisor.diminuirVolume()
novoTelevisor.aumentarVolume()

console.log(novoTelevisor)