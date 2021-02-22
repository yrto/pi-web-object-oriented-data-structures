const _throw = msg => { throw msg }
const doNothing = () => { return }

const inputTypes = ['text', 'email', 'password', 'date', 'color', 'number']
const tableTags = ['thead', 'tbody', 'tfoot', 'tr', 'th']
const imgExtensions = ['.png', '.jpg', '.gif']

const isString = string => typeof string === 'string' ? string : _throw(`deve ser uma string`)
const isStringArray = array => array.map(valor => typeof valor === 'string' ? valor : _throw(`deve ser uma array de strings`))
const isObject = object => typeof object === 'object' ? object : _throw(`deve ser uma um objeto`)
const isHTMLBaseElement = object => object instanceof HTMLBaseElement ? object : _throw(`objeto não é da classe HTMLBaseElement`)
const isFunction = func => typeof func === 'function' ? func : _throw(`deve ser uma função`)
const isInputType = type => inputTypes.includes(type) ? type : _throw(`não é um tipo de input válido`)
const isValidTableTag = object => tableTags.includes(object._tagName) ? object : _throw(`não é uma tag table válida`)
const isValidUrl = url => url.includes('http://') || url.includes('https://') ? url : _throw(`não é uma url válida`)
const isValidImg = img => imgExtensions.reduce((status, extension) => img.includes(extension) ? status = true : status, false) ? img : _throw(`não é um tipo de imagem válida`)

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

class HTMLInputElement extends HTMLBaseElement {
    constructor(tagName, id, classList, name, style, value, type) {
        super(tagName, id, classList, name, style)
        this.value = value
        this.type = isInputType(isString(type))
    }
}

class HTMLButtonElement extends HTMLParentElement {
    constructor(tagName, id, classList, name, style, onClick) {
        super(tagName, id, classList, name, style)
        this._onClick = onClick ? isFunction(onClick) : doNothing
    }
}

class HTMLTableElement extends HTMLParentElement {
    constructor(tagName, id, classList, name, style) {
        super(tagName, id, classList, name, style)
    }
    appendChild(child) {
        super.appendChild(isValidTableTag(child))
    }
}

class HTMLImageElement extends HTMLBaseElement {
    constructor(tagName, id, classList, name, style, src, altText) {
        super(tagName, id, classList, name, style)
        this.src = isValidUrl(isValidImg(isString(src)))
        this.altText = altText ? isString(altText) : 'image'
    }
}

const body = new HTMLParentElement('body', 'id', ['body'], 'name', { background: 'white' })
const divA = new HTMLBaseElement('div', 'id', ['class_a', 'class_b'], 'nameA', { color: 'blue' })
const divB = new HTMLBaseElement('div', 'id', ['class_a', 'class_b'], 'nameB', { color: 'blue' })
const inputA = new HTMLInputElement('input', 'id', ['text_class'], 'input_a', { color: 'red' }, 'lorem ipsum', 'text')

const buttonA = new HTMLButtonElement('button', 'id', ['button_class'], 'button_b', { color: 'green' })

const tableA = new HTMLTableElement('table', 'id', ['button_class'], 'button_b', { color: 'green' })
const theadA = new HTMLBaseElement('thead', 'id', ['button_class'], 'button_b', { color: 'green' })

const imagemA = new HTMLImageElement('thead', 'id', ['button_class'], 'button_b', { color: 'green' }, 'https://google.com/imagem.png', 'imagem genérica')

divA.addClass('class_c')
divB.removeClass('class_b')

body.appendChild(divA)
body.appendChild(divB)
body.removeChild('_name', 'name')

tableA.appendChild(theadA)

console.log(body)
console.log(inputA)
console.log(buttonA)
console.log(tableA)
console.log(imagemA)