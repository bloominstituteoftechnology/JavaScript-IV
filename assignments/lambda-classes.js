// CODE here for your Lambda Classes

class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    } 
    changeGrade(student) {
        let gradeChange = Math.floor(Math.random() * 25);
        if(student.grade + gradeChange > 100) {
            student.grade -= gradeChange;
        } else {
            student.grade += gradeChange;
        }
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    graduate(student){
        if(student.grade >= 70) {
            console.log(`${student.name} has graduated with a grade of ${student.grade}!`);
        } else {
            console.log(`${student.name} has a grade of ${student.grade} and cannot graduate right now.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstrtuctor = projectManagerAttributes.favInstrtuctor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//Person -- name, age, location
//Instructor extends person -- specialty, favLanguage, catchPhrase
//Student extends person -- previousBackground, className, favSubjects
//ProjectManager extends Instructor -- gradClassName, favInstructor

const josh = new Instructor({
    name: 'Josh',
    location: 'Salt Lake City',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: "Try Googling it!"
  });

  const jediJosh = new Instructor({
    name: 'JediJosh',
    location: 'Jedi Temple',
    age: 55,
    favLanguage: 'Assembly',
    specialty: 'The Force',
    catchPhrase: "May the force be with you."
  });

  const banjoJosh = new Instructor({
    name: 'Banjo Josh',
    location: 'Salt Lake City',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'Teaching',
    catchPhrase: "Now that's freakin' awesome."
  });

const tai = new ProjectManager({
    name: "Tai",
    age: 25,
    location: "Virginia",
    specialty: "React",
    favLanguage: "JavaScript",
    catchPhrase: "See ya'll tomorrow, have a good day!",
    gradClassName: "CS11",
    favInstrtuctor: josh
});


const zach = new ProjectManager({
    name: "Zach",
    age: 31,
    location: "Florida",
    specialty: "Redux",
    favLanguage: "JavaScript",
    catchPhrase: "Da da da da da!",
    gradClassName: "CS11",
    favInstrtuctor: jediJosh
});

const chance = new Student({
    name: "Chance",
    age: 22,
    location: "Kansas City",
    previousBackground: "A perpetual student of life",
    className: "FSW14",
    favSubjects: ["JavaScript", "English", "Math"],
    grade: 85
})

const david = new Student({
    name: "David",
    age: 35,
    location: "NYC",
    previousBackground: "Bartender turned hacker",
    className: "FSW12",
    favSubjects: ["Python", "Cyber Security", "Science"],
    grade: 80
})

chance.speak();
josh.demo("React");
banjoJosh.grade(chance, "JavaScript");
david.listsSubjects();
david.PRAssignment("Cyber Security");
chance.sprintChallenge("Redux");
tai.standUp("FSW14-tai");
zach.debugsCode(david, "C#");

josh.changeGrade(chance);
console.log(chance.grade);

chance.graduate(chance);






