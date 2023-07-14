let prompt = require('prompt-sync')()

let valor_total = parseFloat(prompt("Qual o valor total da compra? "))

if (valor_total <= 100) {
    console.log("Você não tem direito a desconto")
} else if (valor_total > 100 && valor_total <= 200) {
    valor_total = valor_total - valor_total / 10
    console.log("valor da compra é " + valor_total)
} else if (valor_total > 200) {
    valor_total = valor_total - valor_total / 5
    console.log("valor da compra é " + valor_total)
}