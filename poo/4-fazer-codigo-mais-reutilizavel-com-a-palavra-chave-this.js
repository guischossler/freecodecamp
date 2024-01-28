let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();

/*
    Inserindo this.name ele irá referenciar o objeto, 
    se trocar o nome do objeto que nesse caso é dog
    não tem problema porque o this referencia esse objeto
*/