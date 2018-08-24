// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
}

class Instructors extends Person {
    constructor (instructorsObj) {
        super (instructorsObj);
        this.specialty = instructorsObj.specialty;
        this.favLanguage = instructorsObj.favLanguage;
        this.catchPhrase = instructorsObj.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}!`;
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };
}

class Students extends Person {
    constructor (studentsOptions) {
        super (studentsOptions);
        this.previousBackground = studentsOptions.previousBackground;
        this.className = studentsOptions.className;
        this.favSubjects = studentsOptions.favSubjects;
    }
    listsSubjects() {        
        return this.favSubjects.forEach(item => {console.log(item)});
    };
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    };
}

class ProjectManagers extends Instructors {
    constructor (pmOptions) {
        super (pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    };
}

//Testing

const wayne = new Students ({
    name: 'Wayne T Johnson',
    age: 54,
    location: 'Toms River, NJ',
    gender: 'Male',
    previousBackground: 'Bartender',
    className: 'CSPT2',
    favSubjects: ['Javascript', 'Less', 'Html'],
});

const margie = new Students ({
    name: 'Margie N Kelley',
    age: 47,
    location: 'College Park, MD',
    gender: 'Female',
    previousBackground: 'Bank Teller',
    className: 'CSPT2',
    favSubjects: ['CSS','Javascript', 'UI/UX Design'],
});

const brian = new Students ({
    name: 'Brain L Alberts',
    age: 43,
    location: 'New York, NY',
    gender: 'Male',
    previousBackground: 'Accountant',
    className: 'CSPT2',
    favSubjects: ['CSS','Javascript', 'React'],
});

const will = new Instructors ({
    name: 'Will E Gomez',
    age: 21,
    location: 'Dothan, AL',
    gender: 'Male',
    specialty: 'Web Development',
    favLanguage: 'Javascript',
    catchPhrase: 'I love Lambda swag!!!',
});

const heidi = new Instructors ({
    name: 'Heidi W Sung',
    age: 45,
    location: 'Alamogordo, NM',
    gender: 'Female',
    specialty: 'IOS',
    favLanguage: 'Swift',
    catchPhrase: "I don't believe it!",
});

const juliet = new Instructors ({
    name: 'Juliet A Hines',
    age: 28,
    location: 'Detroit, MI',
    gender: 'Female',
    specialty: 'Web Development',
    favLanguage: 'Python',
    catchPhrase: "You'll like it, not a lot but you'll like it",
});

const jack = new ProjectManagers ({
    name: 'Jack J Campbell',
    age: 30,
    location: 'Louisville, KY',
    gender: 'Male',
    specialty: 'Web Development',
    favLanguage: 'Javascript',
    catchPhrase: 'Computer says no',
    gradClassName: 'CS201',
    favInstructor: 'Will E Gomez',
});

const wesley = new ProjectManagers ({
    name: 'Wesley A Vasquez',
    age: 35,
    location: 'Crown Point, IN',
    gender: 'Male',
    specialty: 'Scoring Goles',
    favLanguage: 'React',
    catchPhrase: 'Here you go again',
    gradClassName: 'CS60',
    favInstructor: 'Dan The Man',
});

const marc = new ProjectManagers ({
    name: 'Marc E Prince',
    age: 31,
    location: 'Jacksonville, FL',
    gender: 'Male',
    specialty: 'Web Development',
    favLanguage: 'PHP',
    catchPhrase: 'Did I do that?',
    gradClassName: 'CS21',
    favInstructor: 'Benjamin Franklin',
});

console.log(margie.name); // Margie N Kelley
console.log(brian.speak()); // Hello my name is Brain L Alberts, I am from New York, NY.
console.log(margie.PRAssignment('Javascript')); // Margie N Kelley has submitted a PR for Javascript.
console.log(brian.sprintChallenge('React')); // Brain L Alberts has begun sprint challenge on React.
console.log(wayne.gender); // Male
console.log(will.demo('Responsive Design')); // Today we are learning about Responsive Design!
console.log(heidi.grade(wayne, 'Html')); // Wayne receives a perfect score on Html
console.log(marc.location); // Jacksonville, FL
console.log(jack.debugsCode(margie, 'Code Challenge')); // Jack J Campbell debugs Margie N Kelley's code on Code Challenge
console.log(wesley.standUp('CSPT2-Team-Wesley!')); // Wesley A Vasquez announces to CSPT2-Team-Wesley!, CSPT2-Team-Wesley! standy times!​​​​​`
console.log(jack.grade(brian, 'JS-IV')); // Brain L Alberts receives a perfect score on JS-IV`
console.log(marc.speak()); // Hello my name is Marc E Prince, I am from Jacksonville, FL.