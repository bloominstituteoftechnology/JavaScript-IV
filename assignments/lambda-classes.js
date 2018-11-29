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


speak(Beth);