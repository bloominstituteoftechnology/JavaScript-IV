// CODE here for your Lambda Classes
class Person {
    constructor(personObj){
        this.name = personObj.name,
        this.location = personObj.location,
        this.age = personObj.age,
        this.gender = personObj.gender
    };
    
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }

    adjustGrade(student){
        const addOrSub = Math.random() < .7 ? 1 : -1;
        const adjustment = Math.ceil(15 * Math.random() * addOrSub);
        student.grade + adjustment >= 100 ? student.grade = 100 : student.grade +=  adjustment;
        return `${this.name} has adjusted ${student.name}'s grade by ${adjustment} points. ${student.name} has a new grade of ${student.grade}`;
    }
}

class Instructors extends Person {
    constructor(instructorObj){
        super(instructorObj),
        this.favLanguage = instructorObj.favLanguage,
        this.specialty = instructorObj.specialty,
        this.catchPhrase = instructorObj.catchPhrase
    }

    demo(subject){
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }

}

class Students extends Person {
    constructor(studentObj){
        super(studentObj),
        this.previousBackground = studentObj.previousBackground,
        this.className = studentObj.className,
        this.favSubjects = studentObj.favSubjects,
        this.grade = studentObj.grade
    }

    listSubjects(){
       this.favSubjects.forEach(s=>console.log(s));
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

    readyToGraduate(){
        const ready = `With a grade of ${this.grade}, ${this.name} is ready to graduate!`;
        const notReady = `${this.name} needs to put in some more work before being eligable for graduation.`;
        return this.grade >= 70 ? ready : notReady;
    }
}

class ProjectManagers extends Person {
    constructor(pmObj){
        super(pmObj),
        this.gradClassName = pmObj.gradClassName,
        this.favInstructor = pmObj.favInstructor
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const dan = new Instructors({name: 'Dan', location: 'SLC', age: 'Unknown', gender: 'M', favLanguage: 'JavaScript', specialty: 'ReactJS', catchPhrase: 'I love JS'})
const jesse = new Students({name: 'Jesse', location: 'St. Paul', age: 27, gender: 'M', previousBackground: 'COBOL', className: 'CSPT2', favSubjects: ['CSS', 'JavaScript'], grade: 50})
const julian = new ProjectManagers({name: 'Julian', location: 'Maryland', age: 'unknown', gender: 'M', gradClassName: 'CS6', favInstructor: 'Dan'})

console.log(dan.speak());
console.log(dan.demo('React'));
console.log(dan.grade(jesse, 'JSIV'));
console.log(jesse.listSubjects());
console.log(julian.standUp('cspt2_Julian'))
console.log(julian.debugsCode(jesse, 'React'));
console.log(dan.adjustGrade(jesse));
console.log(julian.adjustGrade(jesse));
console.log(dan.adjustGrade(jesse));
console.log(dan.adjustGrade(jesse));
console.log(julian.adjustGrade(jesse));
console.log(julian.adjustGrade(jesse));
console.log(julian.adjustGrade(jesse));
console.log(julian.adjustGrade(jesse));
console.log(dan.adjustGrade(jesse));
console.log(dan.adjustGrade(jesse));
console.log(jesse.readyToGraduate())