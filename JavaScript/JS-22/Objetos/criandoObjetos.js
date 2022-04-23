//Usando a notação literal

const obj = {}
console.log(obj)

// Objeto em js

console.log( typeof Object, typeof new Object)

const obj2 = new Object
console.log(obj2)

//Função construtora

function Produto(nome, preco, desc) {
  this.nome = nome;

  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const prod = new Produto("Caneta", 8.22, 0.15)
console.log(prod.getPrecoComDesconto());

// Função factory de

function calcularSalario(nome, salario, faltas) {
  return {
    nome,
    salario,
    faltas,
      getSalario() {
        return (salario / 30) * ( 30 - faltas)
      }
  }
}

const calSalario = calcularSalario("Maria", 1000, 8)
console.log(calSalario.getSalario())