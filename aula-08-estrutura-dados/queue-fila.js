const limit = 10;

const createQueue = () => {
    let list = [];
    return {
        add: value => {
            list = [...list, value];
        },
        remove: () => {
            const [head, ...tail] = list;
            list = tail;
            return head;
        }
    };
}

class Queue {
    constructor() {
        let list = [];
        this.push = value => {
            if (list.length >= limit) throw 'Limit reached!'
            list.push(value);
        }
        this.pop = () => {
            const [popped, ...tail] = list;
            list = tail;
            return popped;
        }
        this.getLength = () => {
            return list.length;
        }
    }
    get length() { return this.getLength() } // ponte de acesso
}