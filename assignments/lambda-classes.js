class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
    }

class Instructor extends Person {
    constructor (instructattributes) {
        super (instructattributes);
        this.specialty = instructattributes.specialty;
        this.favLanguage = instructattributes.favLanguage;
        this.catchPhrase = instructattributes.catchPhrase;
        }

        demo(subject){
            return `Today we are learning about ${subject}`;
        }
        demo(){
            return `${student.name} receives a perfect score on ${subject}`
        }
    }

class Student extends Person {
    constructor (studentattributes) {
        super (studentattributes);
        this.previousBackground = studentattributes.previousBackground;
        this.favSubjects = studentattributes.favSubjects;
        this.catchPhrase = studentattributes.catchPhrase;
        }

        listsSubjects(){
            return `${this.favSubjects}`;
        }
        demo(){
            return `${student.name} receives a perfect score on ${subject}`
        }

         PRAssignment(subject) {
            return `${student.name} has submitted a PR for ${subject}`
        }

        sprintChallenge() {
            return `${student.name} begun sprint challenge on ${subject}`
        }
}

class ProjectManagers extends Instructor {
        constructor (pmattributes) {
            super (pmattributes);
            this.NewgradClassName = gradClassName;
            this.NewfavInstructor = favInstructor;
        }

        standup (channel) {
            return `${name} announces to ${channel}, @channel standy times!​​​​​`
        }

        debugsCode (subject) {
            return `${name} debugs ${student.name}'s code on ${subject}`
        }
}
    

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    // favLanguage: 'JavaScript',
    // specialty: 'Front-end',
    // catchPhrase: `Don't forget the homies`
})

const wilma = new Person({
    name: 'Wilma',
    location: 'Rosebed',
    age: 30,
    // favLanguage: 'Python',
    // specialty: 'Back-end',
    // catchPhrase: `Happy Birthday`,
})

console.log(fred.speak());
console.log(wilma.speak());