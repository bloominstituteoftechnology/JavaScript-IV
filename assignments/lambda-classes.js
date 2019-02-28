// CODE here for your Lambda Classes

class Person {
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`
    }
}
class Instructor extends Person {
    constructor(instructor){
        super(Instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
        this.subject = instructor.subject
    }
    demo(favSubjects){
        return `Today we are learning about ${favSubjects}`
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
    // Stretch Goal
gradeStudent(min,max) {
    return this.grade = (((Math.random()*100) - 3)+11);
}
}

class Student extends Person {
    constructor(student) {
        super(student);
        this.grade = student.grade;
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects; 
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    // Stretch Goal
    graduate() {
        if(this.grade > 70){
            return 'CONGRATS MAN!'
        }
        else {
            return 'Sorry BRO!'
        }
    }

}

class ProjectManager extends Instructor {
constructor(pm) {
    super(pm);
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
    this.channel = pm.channel;
    this.name = pm.name;
}

standUp() {
    return `${this.name} announces to ${this.channel}, @${this.channel} standy times!​​​​​ `
}
debugsCode(Student,subject) {
    return `${this.name} debugs ${Student.name} codes on ${subject}`
}
}

const cameron = new Instructor({
    specialty: 'what the Instructor is good at redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Dont forget the homies',

})
const mustafa = new Student({
    name: 'mustafa',
    age: 23,
    location: 'California',
    gender: 'M',
    previousBackground: 'M.E undergrad',
    className: 'fswpt3',
    favSubjects: 'Html, CSS, JavaScript',
    grade: 100,
})
const austin = new ProjectManager({
    gradClassName: 'fswpt3',
    name: 'Asutin',
    favInstructor: 'sean',
    channel: 'fswpt3_austin'
});

// INSTRUCTOR LOGS
console.log(cameron.specialty);
console.log(cameron.favLanguage);
console.log(cameron.catchPhrase);
console.log(cameron.demo('Html'));
console.log(cameron.grade(mustafa,'CSS'));

// STUDENT LOG
console.log(mustafa.className);
console.log(mustafa.favSubjects);
console.log(mustafa.previousBackground);
console.log(mustafa.listsSubjects());
console.log(mustafa.PRAssignment('CSS'));
console.log(mustafa.sprintChallenge('Html'));

// PM LOGS
console.log(austin.gradClassName);
console.log(austin.favInstructor);
console.log(austin.standUp());
console.log(austin.debugsCode(mustafa,'CSS'));


// Stretch Goal LOGS
console.log(mustafa.graduate());
console.log(cameron.gradeStudent());