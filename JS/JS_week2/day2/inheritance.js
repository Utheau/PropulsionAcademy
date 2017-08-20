function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isAlive = true;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.greet = function() {
  console.log(`Hello this is ${this.fullName}`);
}

let bob = new Person('bob', 'Black');
// bob.greet();

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function Writer(firstName, lastName) {
  Person.call(this, firstName, lastName);
}

Writer.prototype = Object.create(Person.prototype);

Writer.prototype.pseudonym = function() {
  return `${this.firstName.reverse()} ${this.lastName.reverse()}`;
}

Writer.prototype.signBook = function() {
  console.log(`To my friend, from ${this.pseudonym()}`);
}

  let fante = new Writer('John', 'Fante');
// fante.greet();
// fante.signBook();

function Developer(firstName, lastName, codename) {
  Person.call(this, firstName, lastName);
  this.codename = codename;
}

Developer.prototype = Object.create(Person.prototype);

Developer.prototype.impress = function() {
  for(let i = 0; i < 5; i++) {
    let str = '';
    for(let j = 0; j < 10; j++) {
      if (Math.random() > 0.5) {
        str += '0';
      } else {
        str += '1';
      }
    }
    console.log(str);
  }
  console.log(`By: ${this.codename}`);
}

let John = new Developer('John', 'Jib', 'Greek Food Master');
// John.impress();

function Singer(firstName, secondName, melody) {
  Person.call(this, firstName, secondName);
  this.melody = melody;
}

Singer.prototype = Object.create(Person.prototype);

Singer.prototype.artisticName = function() {
  return `Fancy ${this.firstName} ${this.lastName}`;
}

Singer.prototype.sing = function() {
  for(let i = 0; i < 3; i++) {
    console.log(this.melody);
  }
}

let Gretchel = new Singer('Gretchel', 'Gill', 'Drain is rain');
// Gretchel.greet();
// Gretchel.sing();

function JuniorDeveloper(firstName, lastName, codename) {
  Developer.call(this, firstName, lastName, codename);
  this.isStruggling = true;
}

JuniorDeveloper.prototype = Object.create(Developer.prototype);

JuniorDeveloper.prototype.complain = function() {
  console.log(this.fullName().toUpperCase());
}

JuniorDeveloper.prototype.workHard = function() {
  for(let i = 0; i < 10; i++) {
    console.log(`${this.codename} is working very hard`);
  }
}

let Koss = new JuniorDeveloper('Koss', 'Fuss', 'Daddy Hacker');
// Koss.complain();
// Koss.workHard();
