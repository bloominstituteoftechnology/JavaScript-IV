// CODE here for your Lambda Classes
class Person {
    
    constructor(personProp){
        this.name = personProp.name;
        this.age = personProp.age;
        this.location = personProp.location;
        this.gender = personProp.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    
    constructor(instrucProp) {
        super(instrucProp);
        this.specialty = instrucProp.specialty;
        this.favLanguage = instrucProp.favLanguage; //Array of objects in an object
        this.catchPhrase = instrucProp.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    //Remember this is for students only
    grade(Student, subject){
        return `${Student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    
    constructor(studentProp) {
        super(studentProp);
        this.previousBackground = studentProp.previousBackground;
        this.className = studentProp.className;
        this.favSubjects = studentProp.favSubjects;     //Array of objects in an object
    }

    listsSubjects(){
        for (let i = 0; i < this.favSubjects.length; i++){
            console.log(this.favSubjects[i]);
        }
        // return this.favSubjects.forEach(item => Array.all(item));
    }

    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

}

class ProjectManager extends Instructor {
    
    constructor(pmProp) {
        super(pmProp);
        this.gradClassName = pmProp.gradClassName;
        this.favInstructor = pmProp.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`
    }

    debugsCode(Student, subject) {
        return `${Student.name}'s code on ${subject}`;
    }
}

//CREATE OBJECTS TO TEST:

const somePerson = new Person({
    name: 'Julia',
    age: 90,
    location: 'Washington',
    gender: 'female'
});

const mark = new Student({
    name: "Mark",
    age: 22,
    location: 'Chicago',
    gender: 'male',
    previousBackground: 'Unknown',
    className: 'CS132',
    favSubjects: ['JS', 'LESS', 'HTML', 'CSS', 'React']
})

const carissa = new Student({
    name: "Carissa",
    age: 30,
    location: 'Los Angeles',
    gender: 'female',
    previousBackground: 'Coding Dojo',
    className: 'CSPT2',
    favSubjects: ['C', 'CSS', 'React']
})

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: ['JavaScript', 'C', 'Delphi'],
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const kevin = new ProjectManager({
    name: 'Kevin',
    location: 'Atlanta',
    age: 44,
    gender: 'male',
    favLanguage: ['JavaScript', 'C', 'HTMLCSS', 'React'],
    specialty: 'Full Stack',
    catchPhrase: `Dull catchphrase`,
    gradClassName: 'CS1',
    favInstructor: "Dan"
});


//STUDENTS CALL OUTS
console.log("\n=======STUDENT - MARK - CALLOUTS HERE=======\n")
console.log(mark);
console.log(mark.listsSubjects());
console.log(mark.speak());
console.log(mark.PRAssignment("Javascript"));

console.log("\n=======STUDENT - CARISSA - CALLOUTS HERE=======\n")
console.log(carissa.sprintChallenge("LESS"));
console.log(carissa.speak());
console.log(carissa.listsSubjects());


// //INSTRUCTOR CALLOUTS
console.log("\n=======INSTRUCTOR CALLOUTS HERE=======\n")
console.log(fred.speak());
console.log(fred.demo("Knitting"));
console.log(fred.grade(mark, "HTML"));
console.log(fred.grade(carissa, "java"));
// console.log(fred.debugsCode(mark, "Ruby"));   //TRY this error - Returns an error, correct

// //PM CALLOUTS
console.log("\n=======PM CALLOUTS HERE=======\n")
console.log(kevin.speak());
console.log(kevin.demo("React"));
console.log(kevin.standUp("cspt2-kevin"));
console.log(kevin.debugsCode(fred, "JavaScript"));   //TRY this
console.log(kevin.debugsCode(mark, "JavaScript"));
console.log(kevin.debugsCode(carissa, "LESS"));
