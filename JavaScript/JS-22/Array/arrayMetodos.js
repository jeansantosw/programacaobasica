const pilotos = ["Jean", "Marina", "Carlos", "Antonio"]

pilotos.pop() // remove o ultimo elemento do array
pilotos.shift() // remove o primeiro elemento do array
pilotos.unshift("Maria") // Adiciona um elemento na primeira posição do array
pilotos.splice(1, 0, "Teste1", "Teste2") // A contar do indice 1 ele acrecenta mais dois elementos no array
pilotos.splice(1, 2) // Remove do incice 1, apenas 2 elemento
pilotos.splice(1, 1, "Bruna") // Altera do indice 1, apenas 1 elemento substituindo pelo valor passado.

const novoArray = pilotos.slice(1) // Cria um novo arrai a contar da posição informada.
const novoArrayPartes = pilotos.slice(1, 2) // Cria um novo arrai a contar da posição informada.


console.log(`Primeiro array: ${pilotos}`)
console.log(`Novo array: ${novoArray}`)
console.log(`Partes de um novo array: ${novoArrayPartes}`)
