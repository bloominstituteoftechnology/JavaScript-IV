// CODE here for your Lambda Classes
Person
First we need a Person class. This will be our base-class
Person receives name age location gender all as props
Person receives speak as a method.
This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props


class Person{
    constructor(obj){
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}



const fred = new Person({
  name: 'Fred',
  age: 37,
  location: 'Bedrock',
  gender: 'male',
  // favLanguage: 'JavaScript',
  // specialty: 'Front-end',
  // catchPhrase: `Don't forget the homies`
});

