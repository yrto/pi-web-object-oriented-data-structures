const _throw = msg => { throw msg }
const isString = string => typeof string === 'string' ? string : _throw(`deve ser uma string`)

const limit = 3

class Estacionamento {
    constructor() {
        let primeiroAndar = []
        let segundoAndar = []
        let terceiroAndar = []
        this.estacionar = placa => {
            if (this.notFull(primeiroAndar)) primeiroAndar.push(isString(placa))
            else if (this.notFull(segundoAndar)) segundoAndar.push(isString(placa))
            else if (this.notFull(terceiroAndar)) terceiroAndar.push(isString(placa))
            else throw 'não há mais vagas'
        }
        this.liberarVaga = () => {
            primeiroAndar.shift()
            if (this.notEmpty(segundoAndar) && this.isEmpty(terceiroAndar)) {
                primeiroAndar.push(segundoAndar.shift())
            }
            else if (this.isFull(segundoAndar) && this.notEmpty(terceiroAndar)) {
                primeiroAndar.push(segundoAndar.shift())
                segundoAndar.push(terceiroAndar.shift())
            }
        }
        this.notFull = andar => andar.length < limit
        this.isFull = andar => andar.length === limit
        this.notEmpty = andar => andar.length > 0
        this.isEmpty = andar => andar.length === 0
        this.printAll = () => console.log(primeiroAndar, segundoAndar, terceiroAndar)
    }
}

const estacionamento = new Estacionamento

estacionamento.estacionar('111')
estacionamento.estacionar('222')
estacionamento.liberarVaga()
estacionamento.estacionar('333')
estacionamento.estacionar('444')
estacionamento.estacionar('555')
estacionamento.estacionar('666')
estacionamento.estacionar('777')
estacionamento.liberarVaga()
estacionamento.estacionar('888')
estacionamento.estacionar('999')
estacionamento.liberarVaga()
estacionamento.liberarVaga()
estacionamento.estacionar('AAA')
estacionamento.estacionar('BBB')
estacionamento.estacionar('CCC')
// estacionamento.liberarVaga()
estacionamento.liberarVaga()
// estacionamento.liberarVaga()

estacionamento.printAll()