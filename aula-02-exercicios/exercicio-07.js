// Crie uma modelagem de classes para uma agenda capaz de armazenar contatos.
// Através dessa agenda é possível incluir, remover, buscar e listar contatos já cadastrados.

class Agenda {
    constructor() {
        this.contatos = []
    }
    incluirContato(nome, telefone) {
        let novoContato = new Contato(nome, telefone)
        if (!(this.contatos.some(contato => contato.nome === nome))) this.contatos.push(novoContato)
    }
    removerContato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome)
    }
    buscarContatoNome(nome) {
        return this.contatos.filter(contato => contato.nome === nome).reduce((start, contato) => `${start}\n${contato.nome}: ${contato.telefone}`, '\nRESULTADOS')
    }
    listarContatos() {
        return this.contatos.reduce((start, contato) => `${start}\n${contato.nome}: ${contato.telefone}`, '\nCONTATOS')
    }
}

class Contato {
    constructor(nome, telefone) {
        this.nome = nome
        this.telefone = telefone
    }
}

const novaAgenda = new Agenda()

novaAgenda.incluirContato('Ayrton', '1234')
novaAgenda.incluirContato('Ayrton', '9999')
novaAgenda.incluirContato('Lucas', '4567')
novaAgenda.incluirContato('Bruna', '8901')
novaAgenda.removerContato('Lucas')

console.log(novaAgenda)

console.log(novaAgenda.listarContatos())
console.log(novaAgenda.buscarContatoNome('Ayrton'))