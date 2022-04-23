
// writable false - não permite que o valor seja alterado
// enumerable false - não permite que o valor seja listado. 


const pai = { nome: "Pedro", corCabelo: "Preto"}

const filho = Object.create(pai)
// filho.name = "Gustavo"
// console.log(filho.name)

const filhoTwo = Object.create(pai, {
  nome: {
    value: "Cessar",
    writable: false,
    enumerable: true
  }
})

// console.log(`O filho ${filhoTwo.name} tem o cabelo ${filhoTwo.corCabelo}`)

// console.log(Object.keys(filhoTwo))


for(let key in filhoTwo) {
  // console.log(key)
  filhoTwo.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}

