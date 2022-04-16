function a() {
  console.log("Ativou a função de parâmetro")
}
function b(cb) {
  console.log("Função b")
cb();
}
b(a);