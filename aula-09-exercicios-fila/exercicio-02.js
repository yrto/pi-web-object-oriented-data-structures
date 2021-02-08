// Crie uma classe chamada Queue (Fila) que possui os métodos push() para inserir elementos e pop() para retirar elementos.
// Além deste, crie um método chamado pushQueue() que recebe um objeto da classe Queue como parâmetro e usando apenas os métodos push e pop, transfira os elementos da fila recebida como parâmetro para a atual (this). Crie também um método toString() para exibir os elementos da fila. Ex:

const isQueue = queue => queue instanceof Queue ? queue : _throw(`Não é uma queue`)

class Queue {
    constructor() {
        let list = []
        this.push = (...value) => {
            list = [...list, ...value];
        }
        this.pop = () => {
            const [popped, ...tail] = list;
            list = tail;
            return popped;
        }
        this.getLength = () => list.length
        this.pushQueue = queue => { while (queue.getLength() > 0) this.push(queue.pop()) }
        this.toString = () => console.log('// Out:', list)
    }
}

const q1 = new Queue()
q1.push(1)
q1.push(2)
q1.push(3)
q1.push(4)

const q2 = new Queue()
q2.push(15)
q2.push(16)
q2.push(17)
q2.push(18)

q1.pushQueue(q2);
q1.toString();
q2.toString();