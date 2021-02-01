class Conta {
    constructor(nome, senha) {
        let saldo = 0
        let senhaUsuario = senha
        this.nome = nome

        // senha

        // this.getSenha = () => { return senha }
        this.novaSenha = (senhaAtual, novaSenha) => {
            if (senhaAtual !== senhaUsuario) throw 'senha incorreta'
            senhaUsuario = novaSenha
        }

        // saldo

        this.getSaldo = () => { return saldo.toFixed(2) }
        this.novoDeposito = (valor) => { saldo += valor }
        this.novoSaque = (valor) => { saldo -= valor }
    }
}

const minhaConta = new Conta('Ayrton', '1234')

console.log(minhaConta)

console.log(minhaConta.getSaldo())
minhaConta.novoDeposito(500)
console.log(minhaConta.getSaldo())
minhaConta.novoSaque(256)
console.log(minhaConta.getSaldo())

// console.log(minhaConta.getSenha())
// minhaConta.novaSenha('1234', '5678')
// console.log(minhaConta.getSenha())