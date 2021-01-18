class Restaurante {
    constructor(nome, categoria, capacidade, horario_funcionamento) {
        this.nome = nome
        this.categoria = categoria
        this.capacidade = capacidade
        this.horario_funcionamento = horario_funcionamento
        this.menu = []
    }
    addToMenu(...itemCardapio) {
        this.menu.push(...itemCardapio)
    }
    introductionText() {
        return `Bem-vindo(a) ao ${this.nome}!\nA ${this.categoria} mais amada!\nNossa lotação máxima é de ${this.capacidade} pessoas, mas no momento estamos trabalhando com a lotação máxima de ${Math.floor(this.capacidade * 0.5)} pessoas.\nEstamos abertos a partir das ${this.horario_funcionamento}.`
    }
    getMenu() {
        return `\n~ MENU ~\n${this.menu.reduce((start, itemCardapio) => start + `\n${itemCardapio.toString()}`, "")}`
    }
    run() {
        console.log(this.introductionText())
        console.log(this.getMenu())
    }
}

class ItemCardapio {
    constructor(nome, preco, categoria) {
        this.nome = nome
        this.preco = preco
        this.categoria = categoria
    }
    toString() {
        return `R$ ${this.preco.toFixed(2)} ~ ${this.nome} (${this.categoria})`
    }
}

const restaurante = new Restaurante("Let's Café", "cafeteria", 35, "14h00")

const bebida1 = new ItemCardapio("Sprite", 5.00, "Bebida")
const bebida2 = new ItemCardapio("Guaraná", 6.00, "Bebida")

restaurante.addToMenu(bebida1, bebida2)

restaurante.run()