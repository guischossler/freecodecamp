function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Altere apenas o código abaixo desta linha

const hound = new Dog();

/*
Aqui está o construtor de Bird do desafio anterior:

function Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
Observação: this dentro do construtor sempre refere-se ao objeto sendo criado.

Note que o operador new é usado quando chamamos o construtor. Isso avisa ao JavaScript para criar uma nova instância de Bird chamado blueBird. Sem o operador new, this dentro do construtor não iria apontar para o objeto recentemente criado, dando resultados inesperados. Agora blueBird possui todas as propriedades definidas dentro do construtor Bird:

blueBird.name;
blueBird.color;
blueBird.numLegs;
Assim como qualquer outro objeto, suas propriedades podem ser acessadas e modificadas:

blueBird.name = 'Elvira';
blueBird.name;
*/