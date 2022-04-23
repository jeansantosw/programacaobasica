

// Cadeia de prototype

Object.prototype.e = 19
const avo = { a: 1}
const pai = {__proto__: avo, b: 2}
const filho = {__proto__: pai, c: 3}

console.log(filho.e)

const carro = {
  velAtual: 0,
  velMax: 200,

  acelerarMais(delta) {
    if(this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`
  }
}

const ferrari = {
  modelo: "F40",
  velMax: 324,
}

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`

  }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(volvo)

volvo.acelerarMais(200)

console.log(volvo.status())
