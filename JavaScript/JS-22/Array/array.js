let aprovados = new Array("Maria", "John", "Antonio");

aprovados = ["Maria", "John", "Antonio"]

// Add um item na ultima posição do array
aprovados.push("Jean")

// Add um item na posição 10 do array
aprovados[10] = "Santos"

// Ordena o array
aprovados.sort()


aprovados = ["Maria", "John", "Antonio", "Jean", "Santos"]

// Remove do incice 1, apenas 2 elemento
// aprovados.splice(1, 2)

// Altera do indice 1, apenas 1 elemento substituindo pelo valor passado.
// aprovados.splice(1, 1, "Carlos")


// A contar do indice 1 ele acrecenta mais dois elementos no array
aprovados.splice(1, 0, "Teste1", "Teste2")


console.log(aprovados)