const validarString = (valor, nomeParametro) => {
    if (typeof valor !== 'string') throw `${nomeParametro} deve ser uma string`
}

class Usuario {
    constructor(nome, sobrenome, cpf, email) {
        this._nome = nome
        this._sobrenome = sobrenome
        this._cpf = cpf
        this._email = email

        let enderecos = []
        let enderecoFavorito

        this.getEnderecos = () => enderecos
        this.getEnderecoFavorito = () => enderecoFavorito

        this.adicionarEndereco = (novoEndereco) => {
            if (!(novoEndereco instanceof Endereco)) throw 'O novo endereço deve ser uma instância de Endereço'
            if (enderecos.length === 0) enderecoFavorito = novoEndereco
            enderecos.push(novoEndereco)
        }

        this.removerEndereco = (apelidoEndereco) => {
            const indiceEndereco = enderecos.findIndex(e => e.getApelido().toLowerCase() === apelidoEndereco.toLowerCase())
            if (indiceEndereco === -1) throw `Endereço com apelido ${apelidoEndereco} não encontrado`
            enderecos.splice(indiceEndereco, 1)
        }

        this.atualizarEnderecoFavorito = (apelidoEndereco) => {
            if (enderecos.length === 1) {
                console.error()
                return
            }
            const enderecoEncontrado = enderecos.find()
        }

    }
    get nome() { return this._nome }
    get sobrenome() { return this._sobrenome }
    get cpf() { return this._cpf }
    get email() { return this._email }
}

const usuario = new Usuario('Jorge', 'Silva Cunha', '12345678910', 'jorge_silva@email.com')

console.log(usuario)