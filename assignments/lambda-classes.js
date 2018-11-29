// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructors extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name}, receives a perfect score on ${subject}.`
    }
}

class Students extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructors{
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on the ${subject}`;
    }
}

const lily = new Instructors ({
    name: 'Lily Sunn',
    age: 27,
    location: 'Boston',
    gender: 'F',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Ok ok ok... Lets get it!'
})


const mike = new Instructors ({
    name: 'Mike Howard',
    age: 57,
    location: 'New York',
    gender: 'M',
    specialty: 'Front End',
    favLanguage: 'HTML & CSS',
    catchPhrase: 'We got to work.'
})

const leianne = new Students ({
    name: 'Leianne Louis',
    age: 25,
    location: 'Naples',
    gender: 'F',
    previousBackground: 'Tech Support',
    className: 'FSW16',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const ally = new ProjectManagers ({
    name: 'Ally Mooon',
    age: 32,
    location: 'Michigain',
    gender: 'F',
    specialty: 'Python',
    favLanguage: 'Redux',
    catchPhrase: 'Lets go for it!',
    gradClassName: 'FSW10',
    favInstructor: 'Josh'
})
console.log(lily.demo('Applied Javasciprt'));
console.log(mike.grade(leianne, 'HTML'))
console.log(leianne.listsSubjects())
console.log(leianne.PRAssignment('Javascript IV'))
console.log(leianne.sprintChallenge('Javascript IV'))
console.log(ally.standUp('FSW16'))
console.log(ally.debugsCode(leianne, 'React'))