const validarString = (valor, nomeParametro) => {
    if (typeof valor !== 'string') throw `${nomeParametro} deve ser uma string`
}

class Endereco {
    constructor(p_apelido, p_estado, p_cidade, p_bairro, p_rua, p_numero) {

        let apelido, estado, cidade, bairro, rua, numero

        this.getApelido = () => apelido
        this.getEstado = () => estado
        this.getCidade = () => cidade
        this.getBairro = () => bairro
        this.getRua = () => rua
        this.getNumero = () => numero

        this.setApelido = (novoApelido) => {
            validarString(novoApelido, 'apelido')
            apelido = novoApelido
        }
        this.setEstado = (novoEstado) => {
            validarString(novoEstado, 'estado')
            if (novoEstado.length !== 2) throw 'estado deve conter apenas duas letras'
            if (typeof novoEstado[0] !== 'string' && typeof novoEstado[1] !== 'string') throw 'estado deve conter apenas duas letras'
            estado = novoEstado
        }
        this.setCidade = (novaCidade) => cidade = novaCidade
        this.setBairro = (novoBairro) => bairro = novoBairro
        this.setRua = (novaRua) => rua = novaRua
        this.setNumero = (novoNumero) => numero = novoNumero

        this.setApelido(p_apelido)
        this.setEstado(p_estado)
        this.setCidade(p_cidade)
        this.setBairro(p_bairro)
        this.setRua(p_rua)
        this.setNumero(p_numero)
    }
    get enderecoCompleto() {
        return `${this.getApelido()}:\n${this.getRua()}, ${this.getNumero()} - ${this.getBairro()} - ${this.getCidade()} / ${this.getEstado()}`
    }
}

const endereco = new Endereco('Casa', 'SP', 'São Paulo', 'Pinehiros', 'Av. Faria Lima', '1306')

console.log(endereco)
console.log(endereco.enderecoCompleto)