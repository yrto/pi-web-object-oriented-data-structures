// Crie uma classe Funcionario cujos atributos são nome, e-mail, horas trabalhadas e salário.
// Guarde as horas trabalhadas como um objeto (sem necessariamente utilizar classes) cujas chaves são o mês em questão e, como outro objeto, guarde o salário por hora relativo ao mês em questão.
// Crie um método que retorna o salário mensal do funcionário.

class Funcionario {
    constructor(nome, email, horasTrabalhadas, salario) {
        this.nome = nome
        this.email = email
        this.horasTrabalhadas = horasTrabalhadas
        this.salario = salario
    }
    getSalarioMes(mes) {
        return this.horasTrabalhadas.qtdHoras * this.salario.valorHora
    }
}

const novoFuncionario = new Funcionario('Ayrton', 'ayrton@email.com', { qtdHoras: 172, mes: 'janeiro' }, { valorHora: 12.00 })

console.log(novoFuncionario)
console.log(novoFuncionario.getSalarioMes())