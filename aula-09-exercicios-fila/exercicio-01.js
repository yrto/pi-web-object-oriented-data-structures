// Faça um programa para gerenciar uma to-do list,
// crie uma classe para representar a lista de tarefas que faça uso da estrutura de fila para incluir tarefas e remover tarefas
// considere que as primeiras tarefas adicionadas são as primeiras a serem executadas
// e tão logo, as primeiras removidas da lista. O programa deve funcionar da seguinte forma:

class Queue {
    constructor() {
        let list = []
        this.add = value => {
            list.push(value)
        }
        this.remove = () => {
            if (list.length === 0) console.log(`// Out: Não existem tarefas a fazer!!`)
            else {
                const [removed, ...tail] = list
                list = tail
                console.log(`// Out: ${removed}`)
            }
        }
    }
}

const todoList = new Queue()

todoList.add('Lavar o carro');
todoList.add('Levar o cachorro para passear');
todoList.remove()
todoList.add('Fazer o almoço');
todoList.add('Lavar a louça');
todoList.remove()
todoList.remove()
todoList.remove()
todoList.remove() 