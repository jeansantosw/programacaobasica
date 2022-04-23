

// Object.preventExtensions
//Não é possivel adicionar novos elementos no objeto

const produto = Object.preventExtensions({
  nome: "Maçã",
  preco: 2.50,
  tag: "fruta"
});

console.log("Extensível: " + Object.isExtensible(produto));

console.log(produto);

produto.nome = "Celular";
produto.preco = 9.500;
produto.tag = "Aparelho Eletrônico"

console.log(produto);


// Object.seal
// Não é possivel adicionar nem deletar, apenas alterar os valores do objetos

const Pessoa = {
  nome: "Pedro", idade: 25
}

Object.seal(Pessoa)
console.log("Selado: " + Object.isSealed(Pessoa))

Pessoa.sobrenome = "Silva"
delete Pessoa.idade;
Pessoa.nome = "Bruna"

console.log(Pessoa)


// Object.freeze
// É uma constante e não pode ser modificado de nenhuma forma. 

