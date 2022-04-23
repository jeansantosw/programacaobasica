
//Não fazer isso, somente pra didatica.

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.replace = function() {
  return this.split("").reverse().join("")
}

console.log("Jean Santos".replace())