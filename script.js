function plus() {
// pegar o valor atual
let numero = parseInt(document.getElementById("number").innerText)

//somar mais 1
numero = numero + 1

//mostrar o valor
document.getElementById("number").innerText = numero
}

function less() {
//pegar o valor atual
let numero = parseInt(document.getElementById("number").innerText)

//subtrair menos 1
numero = numero - 1

//mostrar o valor
document.getElementById("number").innerText = numero
}