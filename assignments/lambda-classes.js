// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.name;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}`
    }
    pointCalc(Student) {
        return Student.grade - Math.floor(Math.random() * 100)
    }
}

class Student extends Instructor {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }
    listsSubjects() {
        this.favSubjects.forEach((subjectListed) => {
            console.log(subjectListed);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(Student) {
        Student.grade += Student.pointCalc(Student);
        if (Student.grade > 100) {
            console.log(`${Student.name} aced the test`);
            return `${Student.name} has graduated!`;
        } else {
            Student.grade = Student.pointCalc(Student);
            console.log(`${Student.name} received a score of ${Student.grade}%`);
            return `go back and grade their assignments`;
        }
    }

}


class ProjectManagers extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}`;
    }
}

const instructor = new Instructor({
    'name': 'instructor name',
});

const student = new Student({
    'name': 'STUDENT NAME',
    'favSubjects': ['listsSubjects', 'METHOD', 'CALLED'],
    'grade': 100
})

const projectManager = new ProjectManagers({
    'name': 'PROJECT MANAGER NAME'
})


// console.log(instructor.demo("DEMO METHOD CALLED"));
// console.log(instructor.grade(student, "GRADE METHOD CALLED"));
console.log(instructor.pointCalc(student));
// student.listsSubjects();
// console.log(student.PRAssignment("Javascript"));
// console.log(student.sprintChallenge("ES6"));
// console.log(student.grade);
console.log(student.graduate(student));
// console.log(projectManager.standUp("web20_sprint"));
// console.log(projectManager.debugsCode(student, "DEBUGS CODE CALLED"));