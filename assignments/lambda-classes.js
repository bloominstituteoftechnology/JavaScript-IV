// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = "Jason";
        this.age = 33;
        this.location = "Chicago";
        this.gender = "Male";
        this.student = "FSW16 Grad!";
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location} `);
    }
}
const personnel = new Person("Jason");
personnel.speak();