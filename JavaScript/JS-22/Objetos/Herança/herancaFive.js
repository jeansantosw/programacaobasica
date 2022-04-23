

function Aulas(name, aulaId) {
  this.name = name;
  this.aulaId = aulaId;
}

const aulaOne = new Aulas("História", 3443);
const aulaTwo = new Aulas("Matemática", 6476);

// console.log(aulaOne)

function Novo(f, ...parms) {
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, parms)
  return obj
}

const aula = Novo(Aulas,"História", 3443);

console.log(aula)
