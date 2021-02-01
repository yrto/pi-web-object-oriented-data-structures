const validarString = (valor, nomeParametro) => {
    if (typeof valor !== 'string') throw `${nomeParametro} deve ser uma strin`
}

class Usuario {
    constructor(nome, sobrenome, cpf, email) {
        this._nome = nome
        this._sobrenome = sobrenome
        this._cpf = cpf
        this._email = email
    }

    get nome() { return this._nome }
    get sobrenome() { return this._sobrenome }
    get cpf() { return this._cpf }
    get email() { return this._email }

    // nome seja sempre uma string
    // sobrenome seja sempre uma string com 2+ palavras
    // cpf seja uma string que contenha somente números
    // email contenha um ‘@’ e um ‘.’ ao menos

    set nome(new_nome) {
        validarString(new_nome, 'nome')
        this._nome = new_nome
    }
    set sobrenome(new_sobrenome) {
        if (!(typeof new_sobrenome === 'string' && (new_sobrenome.trim()).includes(' '))) throw 'sobrenome deve ser uma string com 2+ palavras'
        this._sobrenome = new_sobrenome
    }
    set cpf(new_cpf) {
        validarString(new_cpf, 'CPF')
        if (new_cpf.length !== 11) throw 'cpf deve ter 11 dígitos'
        const cpf_valido = new_cpf.split('').reduce((acc, char) => {
            return acc && (typeof (parseInt(char)) === 'number')
        }, true)
        if (!cpf_valido) throw 'cpf deve conter apenas números'
        this._cpf = new_cpf
    }
    set email(new_email) {
        new_email = new_email.trim()
        if (!(typeof new_email === 'string' && new_email.includes('@') && new_email.includes('.')) || new_email.includes(' ')) throw 'email deve conter um "@" e um "."'
        this._email = new_email
    }

    nomeCompleto() { return `${this._nome} ${this._sobrenome}` }
}

const usuario = new Usuario('Jorge', 'Silva Cunha', '12345678910', 'jorge_silva@email.com')

usuario.sobrenome = 'Silva Junior'
usuario.cpf = '12345678910'
usuario.email = 'jorge@silva.com'

console.log(usuario)
console.log(usuario.nomeCompleto());