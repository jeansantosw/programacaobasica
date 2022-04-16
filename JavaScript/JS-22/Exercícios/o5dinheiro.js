function dinheriro(valor) {

  resultado = valor.toFixed(2).replace(".", ",")

  console.log(`R$${resultado}`)

}

dinheriro(0.1 + 0.2)