
Array.prototype.forEach2 = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i ,this)
  }
}



const aprovados = ["Antonio", "Maria", "Max", "Mariana", "Paloma"]

aprovados.forEach2(function(nome, index){
  console.log(`Aluno ${index + 1} tem o nome: ${nome}`)
})