function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Altere apenas o código abaixo desta linha
    numLegs: 4,
    eat: function () { console.log("nom nom nom"); },
    describe: function () { console.log("My name is " + this.name); }
};

const josnei = new Dog('Josnei')
console.log(josnei.eat())
console.log(josnei.describe())

/*
Até o momento, você tem adicionado propriedades para cada prototype individualmente:

Bird.prototype.numLegs = 2;
Isto se torna entediante após mais do que algumas propriedades.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
Uma forma mais eficiente é definir o prototype para um novo objeto que já possui as propriedades. Dessa maneira, as propriedades são adicionadas todas de uma vez:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
Adiciona a propriedade numLegs e os dois métodos eat() e describe() para o prototype de Dog definindo o prototype para um novo objeto.
*/