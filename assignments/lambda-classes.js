// CODE here for your Lambda Classes

//Person Class (base class)

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


//Person objects

const kyle = new Person({
    name: 'Kyle',
    age: 28,
    location: 'Chicago',
    gender: 'M'
});

// console.log(kyle.name);
// kyle.speak();

const garrett = new Person({
    name: 'Garrett',
    age: 30,
    location: 'Chicago',
    gender: 'M'
})

// console.log(garrett.age);
// garrett.speak();

//Instructor Class
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

//Instructor objects

const josh = new Instructor({
    name: "Josh",
    age: 30,
    location: "Utah",
    gender: 'M',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: 'Caveman it!'
})

// console.log(josh.location);
// console.log(josh.age);
// console.log(josh.specialty);
// console.log(josh.catchPhrase);
// josh.demo('HTML');
// josh.grade(kyle, 'JavaScript');

const diandra = new Instructor({
    name: "Diandra",
    age: 22,
    location: "Bisbee",
    gender: 'F',
    specialty: 'Math',
    favLanguage: 'JavaScript',
    catchPhrase: 'Good evening!'
})

console.log(diandra.name);
console.log(diandra.favLanguage);
console.log(diandra.gender);
diandra.demo('JavaScript');
diandra.grade(garrett, 'JavaScript');