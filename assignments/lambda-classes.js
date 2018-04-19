// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors

class Person {
    constructor(){

    }
}

class Instructors extends Person {
    constructor(){

    }
}

class Students extends Person {
    constructor(){

    }
}

class ProjectManager extends Instructors {
    constructor(){

    }
}

// Objects

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const fred = new Student({
    name: 'Alice',
    location: 'Jonhson',
    age: 27,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: ``
});

const fred = new Student({
    name: 'Pete',
    location: 'William',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: ``
});

const fred = new ProjectManager({
    name: 'Jess',
    location: 'Rock',
    age: 34,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: ``
});
