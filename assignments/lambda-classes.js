// CODE here for your Lambda Classes
class Person    {
    constructor(personObject)   {
        this.name = personObject.name;
        this.age = personObject.age;
        this.location = personObject.location;
        this.gender = personObject.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
