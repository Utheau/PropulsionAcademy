let Pet = function(name) {
  this.name = name;
}

Pet.prototype.yellName = function() {
  console.log(this.name.toUpperCase() + '!!!');
}

let Mammal = function(name) {
  Pet.call(this, name);
}

Mammal.prototype = Object.create(Pet.prototype);

Mammal.prototype.walk = function() {
  console.log(this.name + ' is going for a walk');
}

let Dog = function(name, owner) {
  Mammal.call(this, name);
  this.owner = owner;
  this.sound = 'woof';
}

Dog.prototype = Object.create(Mammal.prototype);

Dog.prototype.bark = function() {
  console.log(`${this.owner}, woof woof!!!`);
}

let Cat = function(name, owner) {
  Mammal.call(this, name);
  this.owner = owner;
}

Cat.prototype = Object.create(Mammal.prototype);

Cat.prototype.spoon = function() {
  console.log(this.owner + ' GET OUT!');
}

let firstPet = new Pet('Buk');
firstPet.yellName();

let firstMammal = new Mammal('Fante');
firstMammal.yellName();
firstMammal.walk();

let doggy = new Dog('Hornby', 'Laurent');
doggy.yellName();
doggy.walk();
doggy.bark();

let markov = new Cat('Markov', 'Bogdan');
markov.yellName();
markov.walk();
markov.spoon();
