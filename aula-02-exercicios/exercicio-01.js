// Crie uma classe Cliente cujos atributos são nome, idade e e-mail.
// Construa um método que imprima as informações tal como abaixo:

// Nome: Fulano de Tal
// Idade: 40
// E-mail: fulano@mail.com

class Cliente {
    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = idade
        this.email = email
    }
    printInfo() {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nE-mail: ${this.email}`)
    }
}

const novoCliente = new Cliente('Ayrton', 29, 'ayrton@email.com')

novoCliente.printInfo()