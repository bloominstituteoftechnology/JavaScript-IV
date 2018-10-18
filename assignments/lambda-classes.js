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

/*
=== student ===
Inherit? Person -> Student

* previousBackground
* favSubjects
* className
    
* listsSubjects() // prototype method -> returns each subject one by one

* PRAssignment(subject) // prototype method -> returns `${this.name} has submitted a PR for ${subject}`

* sprintChallenge(subject) // prototype method -> returns `${this.name} has begun sprint challenge on ${subject}`

*/

class Student extends Person {
    // Class Initializer and Attributes
    constructor(props) {
        super(props);
        this.favSubjects = props.favSubjects;
        this.className = props.className;
        this.previousBackground = props.previousBackground;
        this.grade = 0;
    }

    // Class methods
    listsSubjects() {
        for (let i = 0; i < this.favSubjects.length; i++) {
            console.log(`${i + 1}: ${this.favSubjects[i]}`);
        }
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

/*
    === Project Manager ===
    Inherit? Person -> Instructor -> Project Manager

    * gradClassName
    * favInstructor
        
    * standUp(channel) // prototype method -> returns `${this.name} announces to ${channel}, @channel standy times!​​​​​`

    * debugsCode(student, subject) // prototype method -> returns `${this.name} debugs {student.name}'s code on {subject}`
*/


class ProjectManager extends Instructor {
    // Class Initializer and Attributes
    constructor(props) {
        super(props)
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    // Class methods
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel Stand Up Time!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
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

// Confirm Existance
console.log(batman);

console.log('Batman Specialty:', batman.specialty);
console.log('Batman Favorite Language:', batman.favLanguage);
console.log('Batman Catch Phrase:', batman.catchPhrase);

console.log(joker);

console.log('Joker Specialty:', joker.specialty);
console.log('Joker Favorite Language:', joker.favLanguage);
console.log('Joker Catch Phrase:', joker.catchPhrase);

// Make them do stuff
console.log(batman.speak());
console.log('Batman Demo:', batman.demo('the Obstacle course'));
console.log('Batman Grade:', batman.grade({
    name: 'Robin'
}, 'Hacking'));


console.log(joker.speak());
console.log('Joker Demo:', joker.demo('PIES!!'));
console.log('Joker Grade:', joker.grade({
    name: 'Harley Quinn'
}, 'Tumbling'));


// ==Student Tests==
// --Create Objects--

const robin = new Student({
    name: 'Robin',
    age: 14,
    location: 'North America',
    gender: 'm',
    className: 'Vigilante',
    previousBackground: 'Circus Acrobat',
    favSubjects: [
        'Hacking',
        'Hand-to-Hand Combat',
        'Motorcycle Practice'
    ]

});

const harley = new Student({
    name: 'Harley Quinn',
    age: 25,
    location: 'North America',
    gender: 'f',
    className: 'Menace',
    previousBackground: 'Psychiatrist',
    favSubjects: [
        'How to Be a Pyro',
        'Taunting & Mocking',
        'Playing With Hyenas'
    ]
});

// Confirm Existance
console.log(robin);

console.log('Robin Class:', robin.className);
console.log('Robin Background:', robin.previousBackground);
console.log('Robin Subjects:', robin.favSubjects);
console.log('Robin Grade:', robin.grade);

console.log(harley);

console.log('Harley Class:', harley.className);
console.log('Harley Background:', harley.previousBackground);
console.log('Harley Subjects:', harley.favSubjects);
console.log('Harley Grade:', harley.grade);



// Make them do stuff
console.log(robin.speak());
console.log('Robin lists subjects', robin.listsSubjects());
console.log(robin.PRAssignment('Hacking'));
console.log(robin.sprintChallenge('Hand to Hand Combat'));

console.log(harley.speak());
console.log('Harley Quinn lists subjects', harley.listsSubjects());
console.log(harley.PRAssignment('Taunting & Mocking'));
console.log(harley.sprintChallenge('Playing with Hyenas'));



// ==PM Tests==
// --Create Objects--

const alfred = new ProjectManager({
    name: 'Alfred',
    age: 56,
    location: 'Gotham City',
    gender: 'm',
    specialty: 'Military Intelligence',
    favLanguage: 'Sarcasm',
    catchPhrase: 'Right away sir',
    gradClassName: 'You\'ll never know',
    favInstructor: 'Batman, if I must choose'
});


// Confirm Existance
console.log(alfred);

console.log('Alfred Specialty:', alfred.specialty);
console.log('Alfred Favorite Language:', alfred.favLanguage);
console.log('Alfred Catch Phrase:', alfred.catchPhrase);
console.log('Alfred Grad Class:', alfred.gradClassName);
console.log('Alfred Fav Instructor:', alfred.favInstructor);


// Make them do stuff
console.log(alfred.speak());
console.log('Alfred Demo:', alfred.demo('Keeping things Clean'));
console.log('Alfred Grade:', alfred.grade(robin, 'Hacking'));
console.log('Alfred Grade:', alfred.grade(harley, 'Tumbling'));
console.log(alfred.standUp('Whipper-Snappers'));
console.log(alfred.debugsCode(robin, 'Hacking'));