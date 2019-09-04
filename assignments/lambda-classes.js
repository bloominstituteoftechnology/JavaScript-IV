// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${location}.`)
    }
}

class Instructor extends Person {
    constructor(instructAttrs){
        super(instructAttrs);
        this.specialty = instructAttrs.specialty;
        this.favLanguage = instructAttrs.favLanguage;
        this.catchPhrase = instructAttrs.catchPhrase;
        this.subject = instructAttrs.subject;
    }
    //need a demo function? set demo to a value?
    demo(subject){
        console.log(`Today we are learning about ${subject}!`);
    }
    //need a grade function? set grade to a value?
    grade(student, subject){
        console.log(`${student} receives a perfect score on ${subject}!`);
    }
    finalGrade(student, min, max){
        min = Math.ceil(0);
        max = Math.floor(100);
        return `${student}'s final grade is: ${Math.floor(Math.random() * (max - min)) + min}`; //th maximum is exclusive?? anf the minimum is inclusive??
    }
}

class Student extends Person {
    constructor(studentAtters){
        super(studentAtters);
        this.previousBackground = studentAtters.previousBackground;
        this.className = studentAtters.className;
        this.favSubject = studentAtters.favSubject; // an array here
        this.grade = studentAtters.grade;
    }
    listsSubjects(){
        console.log(`${this.name}'s favorite subjects are: ${this.favSubject}.`);
    } //method that logs out array [l1, l2, l3]??
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    } //method that receives a subject as an argument and console.logs out: `student.name has submitted a PR for {subject}`
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    } // similar to PRAssignment (accepts subject as a parameter, check) but logs out `student.name has begun sprint challenge on {subject}`
    graduate(){
        console.log(graduation);
    }
}

class ProjectManager extends Instructor{
    constructor(pmAtters){
        super(pmAtters);
        this.gradClassName = pmAtters.gradClassName;
        this.favInstructor = pmAtters.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}.`);
    }
}

const brit = new Instructor({
    name: 'Brit',
    age: 'none of your business',
    location: 'Canada',
    specialty: 'Web Dev',
    favLanguage: 'JS',
    catchPhrase: 'Ada!',
    subject: 'Web Development'
});

const mike = new Instructor({
    name: 'Mike',
    age: 40,
    location: 'Cali',
    specialty: 'Tacos',
    favLanguage: 'New Yorker',
    catchPhrase: "I'm walking here!",
    subject: 'Math'
});

const sean = new Student({
    name: 'Sean',
    age: 'also...none of your business',
    location: 'Virginia',
    specialty: 'human languages',
    favLanguage: 'Spanish',
    catchPhrase: '¡Jue......!',
    subject: 'Web Development stuff',
    previousBackground: 'ESOL teacher/interpreter/translator',
    className: 'Web Dev 23',
    favSubject: [
    ' Spanish ', 
    ' English ', 
    ' and French ',],
});

const matt = new Student({
    name: 'Matt',
    age: 28,
    location: 'Barcelona',
    specialty: 'Event planning',
    favLanguage: 'Catalan',
    catchPhrase: '¡Oopa!',
    subject: 'Political Science',
    previousBackground: 'Politics',
    className: 'Web Dev 23',
    favSubject: [
    ' Catalan ', 
    ' Political Science ', 
    ' and Math ',],
});


const reed = new ProjectManager({
    name: 'Reed',
    age: 'meh? 20something?',
    location: 'Texas',
    specialty: 'hassling us',
    favLanguage: 'Bostonian',
    catchPhrase: '🤦‍♂️',
    subject: 'How to hustle',
    gradClassName: 'Some Web Devs Before Us',
    favInstructor: 'Life'
});

const lucy = new ProjectManager({
    name: 'Lucy',
    age: 50,
    location: 'Korea',
    specialty: 'Teaching kindy',
    favLanguage: 'British English',
    catchPhrase: 'Oh, Love!',
    subject: 'Kindy',
    gradClassName: 'Some Web Devs Before Us',
    favInstructor: 'Ana Teacher'
});

const graduation = (brit.finalGrade() >= 70) ? 'You may graduate' : 'Go back to increase your score.';

console.log(brit);
console.log(brit.demo('Web Dev Fundamentals'));
console.log(brit.grade('Sean', 'JavaScript'));
console.log(brit.finalGrade('Sean'));
console.log(mike);
console.log(mike.demo('Tacos'));
console.log(mike.grade('Sean', 'Taco constructors'));
console.log(sean);
console.log(sean.listsSubjects());
console.log(sean.PRAssignment('All the FUNDAMENTALS!!'));
console.log(sean.sprintChallenge('Applied JS!'));
console.log(sean.graduate());
console.log(matt);
console.log(matt.listsSubjects());
console.log(matt.PRAssignment('Advanced Catalan!'));
console.log(matt.sprintChallenge('Political Science'));
console.log(reed);
console.log(reed.standUp("Reed's Channel"));
console.log(reed.debugsCode("Sean", 'JavaScript'));
console.log(lucy);
console.log(lucy.standUp("Lucy's Channel"));
console.log(lucy.debugsCode("Sean", 'Bootstrap'));