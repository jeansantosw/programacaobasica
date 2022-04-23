const pessoas = {
  nome: "Maria",
  idade: 25,
  peso: 74
}

console.log(Object.keys(pessoas));
console.log(Object.values(pessoas));



//Criando um array a partir de um objeto
// e imprimindo em um forEach
console.log(Object.entries(pessoas));

Object.entries(pessoas).forEach(([chave, valor]) =>{
  console.log(`${chave}: ${valor}`);
})



Object.defineProperty(pessoas, "dataNascimento", {
  enumerable: true,
  writable: true,
  value: "12/12/22"
}) 

console.log(pessoas.dataNascimento)
console.log(Object.keys(pessoas))

// assing 

const o1 = {a: 1}
const o2 = {b: 5, c: 3}
const o3 = {d: 8, e: 12, b: 19}

const obj = Object.assign(o1, o2, o3)

console.log(Object.values(obj))