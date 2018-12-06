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

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.speciality = "redux";
        this.favLanguage = "Python";
        this.cathPhrase = "coding is life";

    }
    demo() {
        console.log(`Today we are learning about ${this.subject}`);

    }
    grade() {
        console.log(`${this.name} receives a perfect scoe on ${this.subject}`);
    }
}
const staff = new Instructor("Josh");
staff.demo();
staff.grade();
