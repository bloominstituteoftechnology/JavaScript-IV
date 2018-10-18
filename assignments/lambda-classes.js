// CODE here for your Lambda Classes
class Person{
    constructor(Pers){
    this.name = pers.name;
    this.age = pers.age;
    this.location = pers.location;
    this.gender = pers.gender;
    }
speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
     }
    }

class Instructor extends Person{
    constructor(inst){
        this.specialty = inst.specialty;
        this.favLanguage = inst.favLanguage;
        this.catchPhrase = inst. catchPhrase;
    }
    demo(){
        console.log(`Today we are learning about ${this.subject}`);
    }
    grade(){
        console.log(`${this.student.name} receives a perfect score on ${this.subject}`);
    }
    
}


class Student extends Person{
    constructor(stud){
        this.previousBackground = stud.previousBackground;
        this.className = stud.className;
        this.favSubjects = stud.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(){
        console.log(`${this.name} has submitted a PR for ${this.subject}`);
    }
    sprintChallenge(){
    console.log();
    }
}

class ProjectManagers extends Instructor{
    constructor(pm){
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp(){
        console.log(`${this.name} announces to ${this.channel} @channel standy times!`);
    }
    debugsCode(){
        console.log(`${this.name} debugs ${this.student.name}'s code on ${this.subject}`);
    }
}

const student = new Student({
    name: 'Chase',
    age: '20',
    gender: 'M',
    location: 'Texas',
    previousBackground: 'C++ in college',
    className: 'FSW15',
    favSubjects: ['HTML', 'CSS'],
});

const instructor = new Instructor({
    name: 'josh',
    age: '30',
    gender: 'M',
    favLanguage: 'JavaScript',
    specialty: 'I-know-it-all',
    catchPhrase: 'LEARN-IT',
});

const projectmanager = new ProjectManagers({
    name: 'kamal',
    age: '25',
    gender: 'M',
    favLanguage: 'Java',
    specialty: 'Helping-the-clueless',
    catchPhrase: 'Make-more-meaningful-commits',
    gradClassName: 'CS1',
    favInstructor: 'josh',
});


console.log(student);

console.log(instructor);

console.log(pm);

instructor.speak();
instructor.demo('JS');
instructor.grade(student, 'JS');

student.speak();
student.listSubject();
student.prAssignment('C++');
student.sprintChallenge('JSVI');

pm.speak();
pm.standUp('FSW15');
pm.debugsCode(student, 'CSS');