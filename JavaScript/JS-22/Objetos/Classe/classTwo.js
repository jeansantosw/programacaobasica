class Avo {
  constructor(sobrenome){
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = "Programador"){
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor(sobrenome, profissao) {
    super(sobrenome, profissao);
  }
}

const dados = new Filho("Santos", "Carpinteiro");

console.log(dados)