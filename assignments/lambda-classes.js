// CODE here for your Lambda Classes
class Person {
  constructor(personAttributes) {
      this.name = personAttributes.name;
      this.age = personAttributes.age;
      this.location = personAttributes.location;
      this.gender = personAttributes.gender;
  }

  speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}


class CharacterStats extends GameObject {
  constructor(csAttributes) {
    super(csAttributes);
    this.healthPoints = csAttributes.healthPoints;
  }

takeDamage() {
  return `${this.name} took damage.`
  }
}

function Person(personAttributes)  {

//methods

  speak () {
  	
  }
}

const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock'
});


