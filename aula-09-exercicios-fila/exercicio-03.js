const _throw = msg => { throw msg }
const isString = string => typeof string === 'string' ? string : _throw(`deve ser uma string`)

const limit = 15

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
            if (primeiroAndar.length === segundoAndar.length && primeiroAndar.length === terceiroAndar.length) primeiroAndar.pop()
            else if (segundoAndar.length === terceiroAndar.length) segundoAndar.pop()
            else terceiroAndar.pop()
        }
        this.notFull = andar => andar.length < limit
        this.notEmpty = andar => andar.length > 0
        this.print = () => console.log(primeiroAndar, segundoAndar, terceiroAndar)
    }
}

const estacionamento = new Estacionamento

estacionamento.estacionar('111')
estacionamento.estacionar('222')
estacionamento.estacionar('333')
estacionamento.estacionar('444')
estacionamento.estacionar('555')
estacionamento.estacionar('666')
estacionamento.estacionar('777')
estacionamento.estacionar('888')
estacionamento.estacionar('999')
estacionamento.liberarVaga()
estacionamento.liberarVaga()
estacionamento.liberarVaga()
estacionamento.liberarVaga()


estacionamento.print()