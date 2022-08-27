const numero =  5 // numero a ser checado

let a = 2
let b = true



while (numero % a != 0)
    a++

if (b == a) {
    console.log(`${numero} é um número primo!`)

} else {
    console.log(`${numero} não é primo!`)
}