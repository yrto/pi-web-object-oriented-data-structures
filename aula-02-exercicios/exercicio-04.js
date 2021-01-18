// Crie uma classe Funcionario cujos atributos são nome, e-mail, horas trabalhadas e salário.
// Guarde as horas trabalhadas como um objeto (sem necessariamente utilizar classes) cujas chaves são o mês em questão e, como outro objeto, guarde o salário por hora relativo ao mês em questão.
// Crie um método que retorna o salário mensal do funcionário.

class Funcionario {
    constructor(nome, email) {
        this.nome = nome
        this.email = email
        this.horasTrabalhadas = []
        this.valorHora = []
    }
    getSalariosMes() {
        return this.horasTrabalhadas.reduce((start, item) => `${start}${item.mes}: R$ ${(item.horas * (
            this.valorHora.filter(valorHora => valorHora.mes === item.mes)[0].valor
        )).toFixed(2)}\n`, '')
    }

    addHorasTrabalhadas(horas) {
        this.horasTrabalhadas.push(horas)
    }
    addValorHora(valor) {
        this.valorHora.push(valor)
    }
}

class HorasTrabalhadas {
    constructor(mes, horas) {
        this.mes = mes
        this.horas = horas
    }
}

class ValorHora {
    constructor(mes, valor) {
        this.mes = mes
        this.valor = valor
    }
}

const novoFuncionario = new Funcionario('Ayrton', 'ayrton@email.com')

novoFuncionario.addHorasTrabalhadas(new HorasTrabalhadas('Janeiro', 172))
novoFuncionario.addHorasTrabalhadas(new HorasTrabalhadas('Fevereiro', 172))
novoFuncionario.addValorHora(new ValorHora('Janeiro', 11.50))
novoFuncionario.addValorHora(new ValorHora('Fevereiro', 15.00))

console.log(novoFuncionario)

console.log(novoFuncionario.getSalariosMes())