class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`Meu nome é: ${this.nome}`)
  }
}

const pessoa1 = new Pessoa("Jean")

pessoa1.falar()



// Outro exemplo
const criarPessoa = nome => {
  return {
    falar:() => console.log(`Meu nome: ${nome}`)
  }
}

const pessoa2 = criarPessoa("Santos")

pessoa2.falar()
