// First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(details) {
        this.name = details.name;
        this.age = details.age;
        this.location = details.location;
        this.gender = details.gender
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
};



//   * Now that we have a Person as our base class, we'll build our Instructor class.
//   * Instructor uses the same attributes that have been set up by Person
//   * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
//   * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 
//      'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out 
//      '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instDetails) {
        super(instDetails)
        this.specialty = instDetails.specialty;
        this.favLanguage = instDetails.favLanguage;
        this.catchPhrase = instDetails.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    };

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject} `
    };
};



// Three Person Class Examples:

const personOne = new Person({
    name: 'Bob',
    age: 30,
    location: 'Denver, CO',
    gender: 'M'

});

const personTwo = new Person({
    name: 'Jan',
    age: 35,
    location: 'Los Angeles, CA',
    gender: 'F'

});

const personThree = new Person({
    name: 'Will',
    age: 24,
    location: 'Tallahassee, FL',
    gender: 'M'

});

console.log(personOne.speak());
console.log(personTwo.speak());
console.log(personThree.speak());

// Two Instructor Class Examples:

personTwo.grade(figg, 'redux');