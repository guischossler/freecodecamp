function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Altere apenas o código acima desta linha
let beagle = new Dog("Snoopy");

/*
Já que numLegs provavelmente terá o mesmo valor para todas as instâncias de Bird, você tem a variável numLegs duplicada dentro de cada instância de Bird.

Isso pode não ser um problema quando há apenas duas instâncias, mas imagine se há milhões de instâncias. Neste cenário teríamos muitas variáveis duplicadas.

Uma maneira melhor é usar o prototype de Bird. Propriedades dentro de prototype são compartilhados entre todas as instâncias de Bird. Aqui está como adicionar numLegs para o prototype de Bird:

Bird.prototype.numLegs = 2;
Agora todas as instâncias de Bird possuem a propriedade numLegs.

console.log(duck.numLegs);
console.log(canary.numLegs);
Já que todas as instâncias automaticamente possuem as propriedades no prototype, pense no prototype como uma "receita" para criar objetos. Note que o prototype para duck e canary faz parte do construtor de Bird como Bird.prototype.
*/