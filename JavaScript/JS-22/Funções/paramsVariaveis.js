function soma() {
  let soma = 0;
  for ( i in arguments ) {
    soma += arguments[i]
  }
  return soma;
}

console.log(soma())
console.log(soma(2))
console.log(soma(2, 15, 13, "teste"))
console.log(soma(2, 10, 8))
console.log(soma("a" , "b", "c"))
