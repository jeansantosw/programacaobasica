class Lancamento {
  constructor(nome= "Genérico", valor = 0) {
    this.nome = nome,
    this.valor = valor
  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes,
    this.ano = ano
    this.lancamentos = []
  }

  addLancamentos(...lancamentos) {
    lancamentos.forEach(elemento => {
      this.lancamentos.push(elemento)
      console.log("elemento: ", elemento)

    });
  }

  sumario() {
    let valorConsolidado = 0;
    this.lancamentos.forEach(elemento => {
      valorConsolidado += elemento.valor;
    })
    return valorConsolidado;
  }
}

const salario = new Lancamento("Salario", 25000);
const aluguel = new Lancamento("Casa", -1500);

const contas = new CicloFinanceiro(4, 2020);

contas.addLancamentos(salario, aluguel);

// contas.addLancamentos()

// console.log(contas.addLancamentos());

console.log(contas.sumario())
