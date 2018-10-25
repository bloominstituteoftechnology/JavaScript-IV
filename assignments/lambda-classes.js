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
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(student) {
        super(student);
        this.grade = student.grade;
        this.className = student.className;
        this.favSubjects = student.favSubjects; 
    }
    listsSubjects() {
        return `${student.favSubjects}`
    }
    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
        if(gradeStudent() < 70){
            return 'graduate'
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
debugsCode(Student,favSubjects) {
    return `${this.name} debugs ${Student.name} codes on ${favSubjects}`
}
gradeStudent() {
    return Math.random(this.grade);
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
    grade = 100,
})
const austin = new ProjectManager({
    gradClassName: 'fswpt3',
    name: 'Asutin',
    favInstructor: 'sean',
    channel: 'fswpt3_austin'
});


console.log(austin.gradClassName);
console.log(austin.favInstructor);
console.log(austin.standUp());
console.log(austin.debugsCode(mustafa,'CSS'));
