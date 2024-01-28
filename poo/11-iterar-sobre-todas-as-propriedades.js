function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Altere apenas o código abaixo desta linha

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property)
    } else {
        prototypeProps.push(property)
    }
}

console.log(ownProps);
console.log(prototypeProps);

/*
Até agora você já viu dois tipos de propriedades: as propriedades own properties e prototype. Propriedades próprias (ou Own properties) são definidas diretamente na própria instância do objeto. E as propriedades do protótipo são definidas em prototype.

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
Aqui está como você adiciona own properties duck para o array ownProps e propriedades prototype para o array prototypeProps:

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);
console.log(ownProps) deve exibir no console ["name"], e console.log(prototypeProps) exibirá no console ["numLegs"].

Adicione todas as propriedades próprias de beagle para o array ownProps. Adicione todas as propriedades prototype de Dog para o array prototypeProps.
*/