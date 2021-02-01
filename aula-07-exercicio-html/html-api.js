const _throw = msg => { throw msg }
const isString = x => typeof x === 'string' ? x : _throw(`deve ser uma string`)
const isStringArray = array => array.map(valor => typeof valor === 'string' ? valor : _throw(`deve ser uma array de strings`))
const isObject = x => typeof x === 'object' ? x : _throw(`deve ser uma um objeto`)
const isHTMLBaseElement = object => object instanceof HTMLBaseElement ? object : _throw(`objeto não é da classe HTMLBaseElement`)

class HTMLBaseElement {
    constructor(tagName, id, classList, name, style) {
        this._tagName = tagName ? isString(tagName) : _throw(`tagName é um atributo obrigatório`)
        this._id = id ? isString(id) : undefined
        this._classList = classList ? isStringArray(classList) : []
        this._name = name ? isString(name) : undefined
        this._style = style ? isObject(style) : {}
    }
    addClass(className) { this._classList.push(isString(className)) }
    removeClass(className) {
        const removeIndex = this._classList.findIndex(x => x === className)
        this._classList.splice(removeIndex, 1)
    }
}

class HTMLParentElement extends HTMLBaseElement {
    constructor(tagName, id, classList, name, style) {
        super(tagName, id, classList, name, style)
        this._children = []
    }
    appendChild(child) { this._children.push(isHTMLBaseElement(child)) }
    removeChild(property, value) {
        const removeIndex = this._children.findIndex(object => object[property] === value)
        this._children.splice(removeIndex, 1)
    }
}

const body = new HTMLParentElement('body', 'id', ['body'], 'name', { background: 'white' })
const divA = new HTMLBaseElement('divA', 'id', ['class_a', 'class_b'], 'nameA', { color: 'blue' })
const divB = new HTMLBaseElement('divB', 'id', ['class_a', 'class_b'], 'nameB', { color: 'blue' })

divA.addClass('class_c')
divB.removeClass('class_b')

body.appendChild(divA)
body.appendChild(divB)
body.removeChild('_name', 'name')

console.log(body)

// - tagName: string
// - id: string
// - classList: string[]
// - name: string
// - style: object