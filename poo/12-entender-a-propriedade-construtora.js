function Dog(name) {
    this.name = name;
}

// Altere apenas o código abaixo desta linha
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true
    }
    return false
}

/*
Tem uma propriedade especial do constructor localizada nas instâncias dos objetos duck e beagle que foram criados nos desafios anteriores:

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
Ambas as chamadas a console.log vão exibir true no console.

Note que a propriedade constructor é uma referência a função construtora que criou a instância. A vantagem da propriedade constructor é que se torna possível verificar essa propriedade para descobrir qual o tipo do objeto. Aqui está um exemplo de como isso poderia ser utilizado:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
Observação: já que a propriedade constructor pode ser sobrescrita (o que será abordado nos próximos dois desafios), geralmente é melhor utilizar o método instanceof para verificar o tipo de um objeto.

Escreva a função joinDogFraternity que recebe o parâmetro candidate e, utilizando a propriedade constructor, retorne true se o candidato é um Dog, e caso não seja, retorne false.
*/