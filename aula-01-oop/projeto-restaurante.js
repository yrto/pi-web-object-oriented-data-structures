class Restaurante {
    constructor(nome, categoria, capacidade, horario_funcionamento) {
        this.nome = nome
        this.categoria = categoria
        this.capacidade = capacidade
        this.horario_funcionamento = horario_funcionamento
        this.Menu = []
    }
    addToMenu(item) {
        this.Menu.push(item)
    }
    run() {
        console.log(`Bem-vindo(a) ao ${this.nome}!`)
        console.log(`A ${this.categoria} mais amada!`)
        console.log(`Nossa lotação máxima é de ${this.capacidade} pessoas, mas no momento estamos trabalhando com a lotação máxima de ${Math.floor(this.capacidade * 0.5)} pessoas.`)
        console.log(`Estamos abertos a partir das ${this.horario_funcionamento}.`)
        console.log(`\n~ ~ MENU ~ ~\n`)
        this.Menu.map(item => console.log(item.toString()))
    }
}

class ItemMenu {
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

restaurante.addToMenu(new ItemMenu("Sprite", 5.00, "Bebida"))
restaurante.addToMenu(new ItemMenu("Guaraná", 6.00, "Bebida"))

restaurante.run()