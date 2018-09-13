// CODE here for your Lambda Classes
class Person {
    constructor(stuff) {
        this.name = stuff.name;
        this.age = stuff.age;
        this.location = stuff.location;
        this.gender = stuff.gender;
    }
    speak = () => `Hello my name is ${this.name}, I am from ${this.location}`
}

