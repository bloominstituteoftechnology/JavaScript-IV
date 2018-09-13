//=====================================================================================
//  CLASSES
//=====================================================================================
class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.gender = personAttrs.gender;
    }// End of Person Constructor
    // Person Methods
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}// End of Person Class

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }// End of Instructor Constructor
    // Instructor Methods
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeProject(student) {
        const chance = Math.random();
        const grade = Math.ceil(Math.random() * 5);
        if (chance > .3) {
            return student.grade += grade;
        }   else {
            return student.grade -= grade;
        }
    }
}// End of Instructor Class

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }// End of Student Constructor
    // Student Methods
    listsSubject(subjects) {
        return ``;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
        if(this.grade > 70) {
            return `${this.name} can now graduate!`;
        }   else {
            return `${this.name} can not graduate :(`
        }
    }
}// End of Student Class

class ProjectManagers extends Instructor {
    constructor(projectManagersAttrs) {
        super(projectManagersAttrs);
        this.gradClassName = projectManagersAttrs.gradClassName;
        this.favInstructor = projectManagersAttrs.favInstructor;
    }// End of ProjectManagers Constructor
    // ProjectManagers Methods
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }

}// End of ProjectManagers Class

//=====================================================================================
//  OBJECTS CREATED
//=====================================================================================

const josh = new Instructor({
    name: 'Josh',
    age: 28,
    location: 'Utah',
    gender: 'M',
    specialty: 'HTML and CSS',
    favLanguage: 'Python',
    catchPhrase: 'Ye',
});
const harry = new Instructor({
    name: 'Harry',
    age: 25,
    location: 'Florida',
    gender: 'M',
    specialty: 'UI/UX',
    favLanguage: 'CSS',
    catchPhrase: 'uhhhhh',
});
const brandon = new Student({
    name: 'Brandon',
    age: 20,
    location: 'Olathe, KS',
    gender: 'M',
    previousBackground: 'I was working as an automotive tech',
    className: 'FSW14',
    favSubjects: ['HTML', 'CSS', 'JS',],
    grade: 90,
});
const anthony = new Student({
    name: 'Anthony',
    age: 19,
    location: 'Olathe, KS',
    gender: 'M',
    previousBackground: 'I was a Uni student',
    className: 'FSW14',
    favSubjects: ['HTML', 'CSS', 'JS',],
    grade: 30,
});
const cesar = new ProjectManagers({
    name: 'Cesar',
    age: 23,
    location: 'Somewhere',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'JS',
    catchPhrase: 'ye',
    gradClassName: 'CS10',
    favInstructor: 'Josh',
});
const jake = new ProjectManagers({
    name: 'Jake',
    age: 26,
    location: 'Somewhere',
    gender: 'M',
    specialty: 'Redux',
    favLanguage: 'JS',
    catchPhrase: 'Bruh',
    gradClassName: 'CS11',
    favInstructor: 'Josh',
});

//=====================================================================================
//  CONSOLE LOG TESTS
//=====================================================================================
// Object Test
console.log(josh);
console.log(harry);
console.log(cesar);
console.log(jake);
console.log(brandon);
console.log(anthony);
// Graduate method tested;
console.log(brandon.graduate());
console.log(anthony.graduate());
// Instructor Method test
console.log(josh.demo('JS'));
console.log(josh.grade(brandon, 'JS'));
console.log(josh.gradeProject(brandon));
console.log(josh.gradeProject(brandon));
// Person Method test
console.log(josh.speak());
console.log(brandon.speak());
console.log(cesar.speak());
// Project Managers Method test
console.log(cesar.standUp('FSW14 Cesar'));
console.log(cesar.debugsCode(brandon, 'JS'));
console.log(cesar.gradeProject(brandon));
// Student Method test 
console.log(brandon.PRAssignment());
console.log(brandon.sprintChallenge('JS'));
console.log(brandon.graduate());