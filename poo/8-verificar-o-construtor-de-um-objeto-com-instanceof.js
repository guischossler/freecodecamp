function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Altere apenas o código abaixo desta linha

const myHouse = new House(2);
console.log(myHouse instanceof House);

/*
Toda vez que a função construtora cria um novo objeto, o objeto é definido como uma instance do seu construtor. JavaScript provê uma forma conveniente para verificar isso com o operador instanceof. instanceof permite que você compare um objeto a um construtor, retornando true ou false caso seja ou não um objeto criado pelo construtor, respectivamente. Exemplo:

let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
Este método instanceof irá retornar true.

Se um objeto for criado sem usar um construtor, instanceof verificará que não é uma instância daquele construtor:

let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
Este método instanceof irá retornar false.
*/