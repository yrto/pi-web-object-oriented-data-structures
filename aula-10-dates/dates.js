const data = new Date()

// data.toString()

const dataTimestamp = data.getTime()

function registratPonto() {
    const novoPonto = {
        date: new Date(),
        type: 'in'
    }
    return novoPonto
}

console.log(registratPonto())
console.log(dataTimestamp)