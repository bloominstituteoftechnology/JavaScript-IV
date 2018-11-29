// CODE here for your Lambda Classes


//=========== Base class

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}


//=========== Instructor class

class Instructor extends Person {
    constructor(instructAttribs) {
        super(instructAttribs);
        this.specialty = instructAttribs.specialty;
        this.favLanguage = instructAttribs.favLanguage;
        this.catchPhrase = instructAttribs.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}


//=========== Student class

class Student extends Person {
    constructor(studentAttribs) {
        super(studentAttribs);
        this.previousBackground = studentAttribs.previousBackground;
        this.className = studentAttribs.className;
        this.favSubjects = studentAttribs.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(element) {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`$this.name} has begun sprint challenge on ${subject}`);
    }
}

const Beth = new Instructor({
    'name': 'Beth',
    'location': 'Tempe, Arizona',
    age: 34,
    'gender': 'female',
    'favLanguage': 'C',
    'specialty': 'back-end',
    'catchPhrase': 'Mind your manners.'
})

const Paul = new Instructor({
    'name': 'Paul',
    'location': 'Cleveland, Ohio',
    age: 42,
    'gender': 'male',
    'favLanguage': 'JavaScript',
    'specialty': 'front-end',
    'catchPhrase': 'Guys, this is awesome!'
})

const Jack = new Instructor({
    'name': 'Jack',
    'location': 'Raleigh, North Carolina',
    age: 31,
    'gender': 'male',
    'favLanguage': 'Node',
    'specialty': 'Security',
    'catchPhrase': 'Keep you secrets close'
})

const Rachel = new Student({
    'name': 'Rachel',
    'location': 'Kalamazoo, Michigan',
    age: 34,
    'gender': 'female',
    'favLanguage': 'JavaScript',
    'specialty': 'front-end',
    'catchPhrase': 'Awesome!',
    'previousBackground' : 'Print and Graphic Design',
    'className': 'FSW16',
    'favSubjects': ['CSS', 'JavaScript', 'Database'],
})

const Kurt = new Student({
    'name': 'Kurt',
    'location': 'Pasedena, California',
    age: 28,
    'gender': 'male',
    'favLanguage': 'React',
    'specialty': 'front-end',
    'catchPhrase': 'What?!?!',
    'previousBackground' : 'Bartender',
    'className': 'FSW16',
    'favSubjects': ['JavaScript', 'HTML', 'React'],
})

const Rachel = new Student({
    'name': 'Pearl',
    'location': 'Washington, DC',
    age: 37,
    'gender': 'female',
    'favLanguage': 'HTML',
    'specialty': 'front-end',
    'catchPhrase': 'Come on guys!',
    'previousBackground' : 'Social Worker',
    'className': 'FSW16',
    'favSubjects': ['CSS', 'HTML', 'Less'],
})




console.log(Jack.gender);
console.log(Jack);