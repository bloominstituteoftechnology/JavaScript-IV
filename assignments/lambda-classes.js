// CODE here for your Lambda Classes

class Person {
    constructor(personInfo) {
        this.name = personInfo.name;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}