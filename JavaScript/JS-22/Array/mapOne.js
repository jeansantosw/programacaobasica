


const numeros = [1, 2, 3, 4, 5, 6, 7]

const num = numeros.map(function(element) {
  return element * 2
})

// console.log(num);

const soma10 = element => element + 10;
const triplo = element => element * 3;
const paraDinheiro = element => `R$ ${parseFloat(element).toFixed(2).replace('.', ',')}`

const resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);

console.log(resultado);