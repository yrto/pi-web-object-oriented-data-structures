const _throw = msg => { throw msg }
const isString = string => typeof string === 'string' ? string : _throw(`deve ser uma string`)

const limit = 3

class Cozinha {
    constructor() {
        let pedidos = []
        this.confirmarPedido = pedido => {
            if (pedidos.length >= limit) throw 'a cozinha está trabalhando na capacidade máxima'
            pedidos = [...pedidos, pedido]
        }
        this.terminarPedido = () => {
            const [terminado, ...tail] = pedidos
            pedidos = tail;
            return terminado;
        }
        this.print = () => console.log(pedidos)
    }
}

class Atendente {
    constructor() {
        let pedidosAConfirmar = []
        this.anotarPedido = novoPedido => pedidosAConfirmar = [...pedidosAConfirmar, isString(novoPedido)]
        this.enviarPedido = cozinha => { if (pedidosAConfirmar.length > 0) cozinha.confirmarPedido(pedidosAConfirmar.shift()) }
    }
}

const cozinhaTeste = new Cozinha
const atendenteTeste = new Atendente

atendenteTeste.anotarPedido('pizza')
atendenteTeste.anotarPedido('frango')
atendenteTeste.anotarPedido('cebola')
atendenteTeste.anotarPedido('batata')
atendenteTeste.enviarPedido(cozinhaTeste)
atendenteTeste.enviarPedido(cozinhaTeste)
atendenteTeste.enviarPedido(cozinhaTeste)
cozinhaTeste.terminarPedido()
atendenteTeste.enviarPedido(cozinhaTeste)

cozinhaTeste.print()