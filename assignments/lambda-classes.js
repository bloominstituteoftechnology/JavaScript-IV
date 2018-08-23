// CODE here for your Lambda Classes

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }

    // `demo` receives a `subject` string as an argument and logs out the phrase 
    // 'Today we are learning about {subject}' where subject is the param passed in.
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    // `grade` receives a `student` object and a `subject` string as arguments and 
    // logs out '{student.name} receives a perfect score on {subject}'
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }

    // `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            console.log(`One favorite subject is: ${subject}`);
        });
    }

    // `PRAssignment` a method that receives a subject as an argument and logs out that the 
    // `student.name has submitted a PR for {subject}`
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    // `sprintChallenge` similar to PRAssignment but logs out 
    // `student.name has begun sprint challenge on {subject}`
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }

    // `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, 
    // @channel standy times!​​​​​
    standUp(channel) {
        return `${this.name} announces to ${channel}: #${channel} standy times!​​​​​`;
    }

    // `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs 
    // {student.name}'s code on {subject}`    
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const AustenA = new Person ({
    name: "Austen Allred",
    age: 35,
    location: "San Francisco",
    gender: "Male",
});

AustenA.speak();

const Colin = new Student ({
    name: "Colin Dismuke",
    age: 31,
    location: "Houston",
    gender: "Male",
    previousBackground: "Ocean Engineer",
    className: "CSPT2",
    favSubjects: ["Neural networks", "CFD", "financial engineering"],
});

console.log(Colin.speak());
console.log(Colin.listsSubjects());
console.log(Colin.PRAssignment("Python"));
console.log(Colin.sprintChallenge("React"));

const John = new ProjectManager ({
    name: "John Spraul",
    age: 25,
    location: "Moon",
    gender: "Male",
    specialty: "Software Engineering",
    favLanguage: "React",
    catchPhrase: "It's dark!",
    gradClassName: "CS??",
    favInstructor: "Dan",
});

const Dan = new Instructor ({
    name: "Dan Frehner",
    age: 35,
    location: "Wyoming",
    gender: "Male",
    specialty: "Web Development",
    favLanguage: "JavaScript",
    catchPhrase: "La Croix!",
});

console.log(John.speak());
console.log(Dan.speak());
console.log(John.standUp("pm_standup_john"))
console.log(John.debugsCode(Colin, "CSS"))
console.log(Dan.demo("LESS"));
console.log(Dan.grade(Colin, "Responsive Web Design"));