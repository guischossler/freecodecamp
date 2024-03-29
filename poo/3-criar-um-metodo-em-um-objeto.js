let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () { return "This dog has 4 legs." }
};

dog.sayLegs();

/*
Criar um método em um objeto
Objetos podem ter um tipo especial de propriedade, chamado de método.

Os métodos são propriedades que são funções. Isso adiciona diferentes comportamentos para um objeto. Aqui está o exemplo duck com um método:

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
O exemplo adiciona o método sayName, que é uma função responsável por retornar uma frase contendo o nome do duck. Note que o método acessou a propriedade name na declaração de retorno usando duck.name. O próximo desafio vai mostrar outra forma de fazer isso.
*/