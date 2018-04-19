// CODE here for your Lambda Classes

/**
 * ------- Person -------
 */
class Person {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
/**
 * ------- Instructor -------
 */
class Instructor extends Person {
    constructor(options){
        super(options)
        this.speciality = options.speciality;
        this.favLanguage = options.favLanguage;
        this.catchPhrase = options.catchPhrase;
    }
    demo(subject) {
        console.log(`'​​​​​Today we are learning about ${subject}'`);
    }
    grade(student, subject) {
        console.log(`'​​​​​${student.name} receives a perfect score on ${subject}'`);
    }
    changeGrade(student) {
        student.grade -= (Math.floor(Math.random() * Math.floor(2) === 1)) ? Math.floor(Math.random() * (5 - 1) + 1) : -Math.floor(Math.random() * (10 - 1) + 1);
        console.log(student.grade)
    }
}
/**
 * ------- Student -------
 */
class Student extends Person {
    constructor(options){
        super(options);
        this.previousBackground = options.previousBackground;
        this.className = options.className;
        this.favSubjects = options.favSubjects; //array
        this.grade = Math.floor(Math.random() * (100 - 1) + 1); // Assigns a random number in the range [1, 100]
    }
    listsSubjects(){
        this.favSubjects.forEach( subject => {
            console.log(subject);
        });
    }
    PRAssigment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    springChallenge(subject) {
        console.log(`${this.name} has begun spring challenge on ${subject}`);
    }
    graduate() {
        if (this.grade > 70) {
            return "CONGRATS: You are all a Software Engineer"
         } else {
             this.grade += Math.floor(Math.random() * ((100-this.grade) - 1) + 1);
             return "Keep on track, check with your PM to strength your Skills before grad.";
         }
        
    }
}
/**
 * ------- ProjectM -------
 */
class ProjectM extends Instructor {
    constructor(options){
        super(options);
        this.gradClassName = options.gradClassName;
        this.favInstructor = options.favInstructor;
    }
    standUp(chanel) {
        console.log(`${this.name} announces to ${chanel}, @chanel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

/**
 * ------- INSTANCES -------
 */
/** ------- Instructor ------- */
const josh = new Instructor({
    name: 'Josh',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const pedro = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: 'Docs, refer to documentation!'
});
  
/** ------- Student ------- */
const jean = new Student({
      name: 'Jean',
      location: 'Madrid',
      age: 36,
      gender: 'male',
      previousBackground: 'Some HTML, CSS and JS',
      className: 'CS10',
      favSubjects: ['Javascript', 'React', 'Node']
});
const sarah = new Student({
    name: 'Sarah',
    location: 'England',
    age: 39,
    gender: 'female',
    previousBackground: 'Antropology',
    className: 'CS11',
    favSubjects: ['Humanism', 'Gestalt']
});
    
/** ------- Project Manager ------- */    
const cole = new ProjectM({
    name: 'Cole',
    location: 'California',
    age: 30,
    gender: 'female',
    favLanguage: 'C',
    specialty: 'Back-end',
    catchPhrase: `Refer to syllabus`
});
const pepito = new ProjectM({
    name: 'Pepito',
    location: 'Colombia',
    age: 57,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'React',
    catchPhrase: 'Instantiate yourself!'
});

/**
 * ------- PLAY GORUND -------
 */
/** ------- Instructor ------- */
// josh
console.log(josh);
console.log(josh.demo("JS"));
console.log(josh.grade(jean, "JS"));
// pedro
console.log(pedro);
/** ------- Student ------- */
// jean
console.log(jean);
console.log(jean.listsSubjects());
console.log(jean.PRAssigment("Node"));
console.log(jean.springChallenge("React"));
// sarah
console.log(sarah);
/** ------- Project Manager ------- */   
// cole
console.log(cole);
console.log(cole.standUp("Struggling-Brains"));
console.log(cole.debugsCode(sarah, 'JS'));
// pepito
console.log(pepito);


/** ------- Stretch Challenge ------- */
// ADD method to Instructor && Project Manager
console.log(jean.grade);
console.log(josh.changeGrade(jean));
console.log(jean.grade);
console.log(josh.changeGrade(jean));
console.log(jean.grade);

console.log(sarah.grade);
console.log(josh.changeGrade(sarah));
console.log(sarah.grade);
console.log(josh.changeGrade(sarah));
console.log(sarah.grade);

// ADD method to Student
console.log(jean.grade);
console.log(jean.graduate());
console.log(jean.grade);
console.log(sarah.grade);
console.log(sarah.graduate());
console.log(sarah.grade);
