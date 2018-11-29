// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


