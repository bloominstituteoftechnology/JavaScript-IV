/*
    === Person ===
    * name
    * age
    * location
    * gender


    * speak() // prototype method -> returns a log of `Hello my name is ${this.name}, I am from ${this.location}`
*/

class Person {
    // Class Initializer and Attributes
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    // Class Methods
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


/*
    === Instructor ===
    Inherit? Person -> Instructor

    * specialty
    * favLanguage
    * catchPhrase
	
    * demo(subject) // prototype method -> returns `Today we are learning about ${subject}`
    
    * grade(student, subject) // prototype method -> returns `${student.name} receives a perfect score on ${subject}`
*/

class Instructor extends Person {
    // Class Initializer and Attributes
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }

    // Class methods
    demo(subject) {
        return `Today we will be learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}


// *** === Tests === ***


// ==Person Tests==
// --Create Objects--

const adam = new Person({
    name: 'Adam',
    age: 28,
    location: 'North America',
    gender: 'm'
});

const eve = new Person({
    name: 'Eve',
    age: 25,
    location: 'Africa',
    gender: 'f'
});

// Make them do stuff
console.log(adam);
console.log(adam.speak());

console.log(eve);
console.log(eve.speak());


// ==Instructor Tests==
// --Create Objects--

const batman = new Instructor({
    name: 'Batman',
    age: 28,
    location: 'Gotham City',
    gender: 'm',
    specialty: 'Computer Science',
    favLanguage: 'Python',
    catchPhrase: 'Why? Because I\'m Batman'
});

const joker = new Instructor({
    name: 'Joker',
    age: 28,
    location: 'Gotham City',
    gender: 'm',
    specialty: 'Foolery',
    favLanguage: 'Sarcasm',
    catchPhrase: 'SMILE !!'
});

// Make them do stuff
console.log(batman);
console.log(batman.speak());
console.log(batman.demo('the Obstacle course'));
console.log(batman.grade({
    name: 'Robin'
}, 'Hacking'));

console.log(joker);
console.log(joker.speak());
console.log(joker.demo('PIES!!'));
console.log(joker.grade({
    name: 'Harley Quinn'
}, 'Tumbling'));