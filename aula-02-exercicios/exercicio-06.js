// Crie uma classe ControleRemoto cujo atributo é televisão (isso é, recebe um objeto da classe do exercício anterior).
// Crie métodos para aumentar/diminuir volume, trocar o canal e sintonizar um novo canal, que adiciona um novo canal à lista de canais (somente se esse canal não estiver nessa lista).

class Televisor {
    constructor(fabricante, modelo) {
        this.fabricante = fabricante
        this.modelo = modelo
        this.canalAtual = 3
        this.listaCanais = []
        this.volume = 50
    }
}

class ControleRemoto {
    constructor(televisor) {
        this.televisor = televisor
    }
    aumentarVolume() { if (this.televisor.volume <= 90) this.televisor.volume += 10 }
    diminuirVolume() { if (this.televisor.volume >= 10) this.televisor.volume -= 10 }
    trocarCanal(codigoCanal) { if (this.televisor.listaCanais.includes(codigoCanal)) this.televisor.canalAtual = codigoCanal }
    sintonizarCanal(codigoCanal) { if (!(this.televisor.listaCanais.includes(codigoCanal))) this.televisor.listaCanais.push(codigoCanal) }
}

const novoTelevisor = new Televisor('Sony', 'Trinitron 29"', 3, 50)
const novoControleRemoto = new ControleRemoto(novoTelevisor)

novoControleRemoto.sintonizarCanal(5)
novoControleRemoto.sintonizarCanal(5)
novoControleRemoto.sintonizarCanal(9)
novoControleRemoto.trocarCanal(7)
novoControleRemoto.diminuirVolume()
novoControleRemoto.diminuirVolume()
novoControleRemoto.diminuirVolume()
novoControleRemoto.aumentarVolume()

console.log(novoControleRemoto)