const frutas = ["Maçã", "Banana", "Manga"]

function imprimir(nome, indice) {
  console.log(`${indice} - ${nome}`);
}


frutas.forEach(imprimir)

frutas.forEach(nome => console.log(nome))