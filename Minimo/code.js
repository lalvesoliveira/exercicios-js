function minimo(num1, num2) {
    if (num1 < num2) {
        return num1
    } else if (num1 > num2) {
        return num2
    } else {
        return 'numeros iguais'
    }
}

module.exports = minimo