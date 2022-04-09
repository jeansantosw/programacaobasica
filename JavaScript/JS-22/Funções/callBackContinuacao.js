const notas = [7.2, 6.3, 9.4, 3.5, 1.6]

// sem callback
const aprovado = []
for(let i in notas) {
  if(notas[i] > 6) {
    aprovado.push(notas[i])
  }
}
console.log(`Aluno aprovado com notas: ${aprovado}`)


// com callback
const reprovados = notas.filter((nota) => {return nota < 6})
console.log(`Aluno reprovado com notas: ${reprovados}`)

// outra dorma de fazer com arrow function a callback

const media = notas.filter(nota =>  nota > 3 & nota < 7)
console.log(`Aluno está na media com notas: ${media}`)