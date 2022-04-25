

const aprovados = ["Antonio", "Maria", "Max", "Mariana", "Paloma"]

  aprovados.forEach(function(nome, index){
    console.log(`Aluno ${index + 1} tem o nome: ${nome}`)
  })

// ================================================================================


  aprovados.forEach(nome => console.log(nome))


// ================================================================================


  const listaAprovado = nome => console.log(nome)

  aprovados.forEach(listaAprovado)