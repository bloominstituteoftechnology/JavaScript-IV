// CODE here for your Lambda Classes

function Person(personAttributes)  {
  this.name = personAttributes.name;
  this.age = personAttributes.age;
  this.location = personAttributes.location;
  this.gender = personAttributes.gender;
//methods

  speak () {
  	return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock'
});


