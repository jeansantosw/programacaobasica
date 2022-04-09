function Carro(velocidadeMaxima = 200, delta = 5) {

  //Atributo privado
  let velocidadeAtual = 0;

  // Metodo publico
  this.acelerar = function() {
    if(velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    }else{
      velocidadeAtual = velocidadeMaxima;
    }
  }

  // Metodo publico
  this.getvelocidadeAtual = function() {
    return velocidadeAtual;
  }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())



const ferrari = new Carro(400, 30);
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
