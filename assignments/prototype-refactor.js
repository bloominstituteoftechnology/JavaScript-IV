// Here we have a functioning solutoin to your challenge from yesterday.
// Today your goal is to refactor all of this code to use ES6 Classes.

// Classes are NOT hoisted

class Parent {
  constructor(attributes) {
    console.log(attributes);
    this.age = attributes.age;
    this.name = attributes.name;
    this.location = attributes.location;
    this.phrase = attributes.phrase;
  }
  // Methods go here:
  speak() {
    console.log(`${this.name} says ${this.phrase}`)
  }
}// end of Parent class

class Child extends Parent {
  constructor(childAttributes) {
    super(childAttributes);
    this.toy = childAttributes.toy;
  }
  // Methods go here:
  play() {
    console.log(`${this.name} plays with a ${this.toy}`)
  }
}// end of Child class

class GrandChild extends Child {
  constructor(grandChildAttributes) {
    super(grandChildAttributes);
    this.babySupplies = grandChildAttributes.babySupplies;
  }
  // Methods go here:
  cry() {
    console.log(`${this.name} starts to cry`);
  }
  change() {
    console.log(`${this.name} needs a new ${this.babySupplies}`)
  }
}// end of GrandChild class

const fred = new Parent({
  'age': 55,
  'name': 'Fred',
  'location': 'Bedrock',
  'phrase': 'Yabba dabba DOOOO!',
  'toy': 'Big Rock'
});

const willma = new Parent({
  'age': 57,
  'name': 'Willma',
  'location': 'Bedrock',
  'phrase': 'Fred!'
});

const pebbles = new Child({
  'age': 27,
  'name': 'Pebbles',
  'location': 'Bedrock',
  'phrase': 'Ma Ma',
  'toy': 'rock doll'
});

const bambamjr = new GrandChild({
  'age': 2,
  'name': 'Bam Bam Jr.',
  'location': 'Bedrock',
  'phrase': 'BAM! BAM!',
  'toy': 'rock bat',
  'babySupplies': 'diaper'
});


console.log(pebbles.age);
console.log(willma.phrase);

fred.speak();
willma.speak();
pebbles.speak();
pebbles.play();
bambamjr.speak();
bambamjr.play();
bambamjr.cry();
bambamjr.change();
