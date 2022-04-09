
//Função literal
function fun1() {}


//Armazenando função em uma cariavel
const fun2 = function() {}

//Armazenando função em Array
const array =  [function(a, b){ return a + b}]

console.log(array[0](2,3))

//Armazenando em um atributo de objeto
const obj = {}

obj.name = function(){ return "Testando Função por objeto"}

console.log(obj.name())

//Passando função como parametros
function run(fun){
  fun()
}
run(function() { console.log("Passando uma função como parametros") } )

//Função pode retornar/conter uma função
function soma(a, b) {
  return function(c){ 
    return console.log("O resultado da função que retorna outra função é:", a + b + c) }
}

soma(2, 4)(2)
const total = soma(4, 4)
total(4)