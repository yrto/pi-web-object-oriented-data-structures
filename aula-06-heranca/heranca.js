class Pessoa {
    constructor(nome, email, telefone) {
        this.nome = nome
        this.email = email
        this.telefone = telefone
    }
    toString() {
        return `Nome: ${this.nome}\nEmail: ${this.email}\nTelefone: ${this.telefone}`
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, email, telefone, cpf) {
        super(nome, email, telefone)
        this.cpf = cpf
    }
    toString() {
        return `${super.toString()}\nCPF: ${this.cpf}`
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, email, telefone, cnpj, razaoSocial) {
        super(nome, email, telefone)
        this.cnpj = cnpj
        this.razaoSocial = razaoSocial
    }
    toString() {
        return `${super.toString()}\CNPJ: ${this.cnpj}\nRazão Social: ${this.razaoSocial}`
    }
}

const pessoaFisica = new PessoaFisica('Ayrton', 'ayrton@email.com', '(11) 9999-9999', '12345678910')
const pessoaJuridica = new PessoaJuridica('Ayrton LTDA', 'ayrton@email.com', '(11) 9999-9999', '12345678910', 'Ayrton LTDA')

console.log(pessoaFisica.toString())
console.log(pessoaJuridica.toString())