// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubject = studentAttributes.favSubject;
    }

    listsSubjects(){
        this.favSubject.forEach(fav => {
            console.log(fav);
        });
        
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManagers extends Instructor {
    constructor(projectManagerAttributes){
        super(projectManagerAttributes)
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const brittney = new Person({
    name: 'Brittney',
    location: 'Newfoundland',
    age: 27,
    gender: 'female',
    // specialty: "HTML",
    // favLanguage: "Spanish",
    // catchPhrase : "What's Up"
})


const will = new Instructor({
    name: 'Will',
    location: 'California',
    age: 40,
    gender: 'male',
    specialty: "JS",
    favLanguage: "French",
    catchPhrase : "Boss Man Rules"
});

const sam = new Student({
    name: 'Sam',
    location: 'Maine',
    age: 25,
    previousBackground: "customer service",
    className: "FSW 16", 
    favSubject: ["HTML", "CSS", "JS"]
});

const mike = new ProjectManagers({
    name: 'Mike',
    location: 'Vermont',
    age: 32,
    gradClassName: "FSW 16",
    favInstructor: "Will"
});

console.log(will.demo("JS"));
console.log(sam.listsSubjects());
console.log(mike.debugsCode(sam, "CodPen"));
console.log(will.grade(sam, "final project"));
console.log(sam.speak());
console.log(sam.PRAssignment("JS IV project"));
console.log(sam.sprintChallenge("JavaScript week"));
console.log(mike.standUp("fsw 16"));