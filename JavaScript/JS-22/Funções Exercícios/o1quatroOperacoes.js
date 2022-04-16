
function calculos(valorOne, valorTwo) {
  const resultados = ["+", "-", "*", "/"]

  resultados.forEach(resultado => {
    if(isNaN(resultado)){
      
      const total = valorOne + resultado + valorTwo
      console.log("Isso não é um numero" + total)
      
    }else{
      console.log("Isso é um numero: ")
    }
  });
}

calculos(3, 5)