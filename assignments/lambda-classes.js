// CODE here for your Lambda Classes


class Person {
    constructor(persProps) {
        this.name = persProps.name;
        this.age = persProps.age;
        this.location = persProps.location
        this.gender = persProps.gender;
        }
         speak() {
           return `Hello my name is ${this.name}, I am from ${this.location}`;
        }
}


class Instructor extends Person {
    constructor(instructProps) {
        super(instructProps);
        this.specialty = instructProps.specialty;
        this.favLanguage = instructProps.favLanguage;
        this.catchPhrase = instructProps.catchPhrase;
        }
        demo(subject) {
            console.log(`Today we are learning about ${subject}.`);
        } 
        grade(student, subject) {
            console.log(`${student.name} receives a perfect score on ${subject}`);
        }
}

class Student extends Person {
    constructor(studProps) {
        super(studProps);
        this.previousBackground = studProps.previousBackground;
        this.className = studProps.className;
        this.favSubjects = studProps.favSubjects;
    }
    listSubjects() {
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        })
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}


class projectManager extends Instructor {
    constructor(projmanProps) {
        super(projmanProps);
        this.gradClassName = projmanProps.gradClassName;
        this.favInstructor = projmanProps.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


const bob = new Person({
    name: "Bob",
    age: 30,
    location: "Iowa"
})

const megan = new Person({
    name: "Megan",
    age: 24,
    location: "South Africa"
})


const josh = new Instructor({
    name: "Josh Knell",
    age: 30,
    location: "Silicon Heaven, Utah",
    specialty: "Front End",
    favLanguage: "JavaScript",
    catchPhrase: "Call me Uncle Josh",

})

const ben = new projectManager ({
    name: "Ben Campbell",
    age: 27,
    location: "Heavenly Mexico",
    specialty: "React Awesomeness",
    favLanguage: "Spanish",
    catchPhrase: "I'm heading to Denver to relax.",
    gradClassName: "CS205",
    favInstructor: "Ben Nelson"
}) 

const kelley = new Student ({
    name: "Kelley",
    age: 25,
    location: "New Orleans",
    previousBackground: "Secretary",
    className: "CS11",
    favSubjects: ["Anatomy", "Computer Science", "JavaScript"]
})

const ryan = new Instructor({
    name: "Ryan",
    age: 30,
    location: "Somewhere, CA",
    specialty: "codin'",
    favLanguage: "JavaScript",
    catchPhrase: "...I have a cool red beard?",

})

const perry = new projectManager ({
    name: "perry",
    age: 49,
    location: "New York",
    specialty: "HTML",
    favLanguage: "English",
    catchPhrase: "Don't get discouraged",
    gradClassName: "CS20",
    favInstructor: "Josh"
}) 

const eric = new Student ({
    name: "Eric",
    age: 29,
    location: "Minnesota",
    previousBackground: "Punk Rocker",
    className: "CS -12",
    favSubjects: ["Anatomy", "Computer Science", "Calculus", "Taekwondo"]
})

