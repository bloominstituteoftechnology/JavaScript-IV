// CODE here for your Lambda Classes

// Generic Person class

class Person {
    constructor(personData) {
        this.name = personData.name;
        this.age = personData.age;
        this.location = personData.location;
        this.gender = personData.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

/// Instructor class

class Instructor extends Person {
    constructor(instructorData) {
        super(instructorData);
        this.specialty = instructorData.specialty;
        this.favLanguage = instructorData.favLanguage;
        this.catchPhrase = instructorData.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        `${student} receives a perfect score on ${subject}`
    }
}

// Meet The Instructors

const rayKurzweil = new Instructor({
    'name': 'Ray Kurzweil',
    'age': 70,
    'location': 'San Mateo',
    'gender': 'male',
    'specialty': 'machine learning',
    'favLanguage': 'LISP',
    'catchPhrase': 'Inventing is a lot like surfing: you have to anticipate and catch the wave at just the right moment.'
})

const bob = new Instructor({
    'name': 'Rob Robinson',
    'age': 5,
    'location': 'Salton Sea',
    'gender': 'male',
    'specialty': 'card counting apps',
    'favLanguage': 'JavaScript',
    'catchPhrase': 'Blackjack is way easier if you use my card counting app.'
})

//bob.demo("card-counting with JavaScript")
//console.log(rayKurzweil['catchPhrase'])

// Generic Person people

const undertaker = new Person({
    'name': 'The Undertaker',
    'age': 99,
    'location': 'Death Valley',
    'gender': 'male',
})

undertaker.speak();

const hotrod = new Person({
    'name': 'Rowdy Roddy Piper',
    'age': 60,
    'location': 'Oregon',
    'gender': 'male',
})

hotrod.speak();

