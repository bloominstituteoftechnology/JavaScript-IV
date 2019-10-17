// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }
    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location} `
    }
    
}