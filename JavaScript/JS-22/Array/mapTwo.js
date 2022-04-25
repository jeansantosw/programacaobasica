const carrinho = [
  '{"nome": "Borracha", "preco": 3.27 }',
  '{"nome": "Caderno", "preco": 10.23 }',
  '{"nome": "Caneta", "preco": 1.91 }',
  '{"nome": "Bolsa", "preco": 33.40 }'
]

const paraObjeto = json => JSON.parse(json);

const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(carrinho)

console.log(resultado);