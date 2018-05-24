// CODE here for your Lambda Classes
class Person {
    constructor(attribute) {
        this.name = attribute.name;
        this.age = attribute.age;
        this.location = attribute.location;
        this.gender = attribute.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }

}

class Instructor extends Person {
    constructor(insattribute){
        super(insattribute);
        
    }
}