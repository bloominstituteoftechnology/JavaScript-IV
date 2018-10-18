// CODE here for your Lambda Classes


// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak (){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor (instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    //* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    adjustGrade(student){
        student.grade += Math.round(Math.random()*40-20);
    }
}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor (studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
       // * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
        this.grade = Math.round(Math.random()*100);
    }
    listsSubjects (){
        this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment (subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
//   * Add a graduate method to a student.
//      * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//      * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
    graduate () {
        if (this.grade > 70){
            console.log(`Congrats ${this.name} you can graduate with a ${this.grade}%!`);
        }else{
            console.log(`Sorry ${this.name}, at ${this.grade}% you can not graduate yet.`);
        }
    }
}

// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManagers extends Instructor {
    constructor(PMAttributes){
        super(PMAttributes)
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }

}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',

  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const bob = new Instructor({
    name: 'Bob',
    location: 'The Office',
    age: 400,
    gender: 'male',

    favLanguage: 'HTML',
    specialty: 'Wood-cutting',
    catchPhrase: `get aftet it`
});

const jimbob = new Student({
    name: 'Jimbob',
    location: 'Nervana',
    age: 7,
    gender: 'male',
    previousBackground: "proffesional surfboard waxer",
    className: "FSW 2,000,000",
    favSubjects: [
        "skydiving", 
        "helmet making",
        "helmet testing"
    ]
});

const hellen = new Student({
    name: 'Hellen',
    location: '1950',
    age: 84,
    gender: 'female',
    previousBackground: "Home Economics Protester",
    className: "FSW -5245",
    favSubjects: [
        "Protesting", 
        "Making Signs",
        "Shouting"
    ]
});

const wilson = new ProjectManagers({
    name: 'Wilson',
    location: '2056',
    age: -345,
    gender: 'male',
    gradClassName: "FSW10",
    favInstructor: "bob",
})

const cory = new ProjectManagers({
    name: 'Cory',
    location: 'The Ether',
    age: 0,
    gender: 'female',
    gradClassName: "FSW-0",
    favInstructor: "fred",
})


bob.speak();
fred.speak();
bob.demo("interwebbing");
fred.demo("using bing to google");

jimbob.speak();
hellen.speak();
jimbob.listsSubjects();
hellen.listsSubjects();
jimbob.PRAssignment("math");
hellen.PRAssignment("science");
jimbob.sprintChallenge("psudo-selectors");
hellen.sprintChallenge("200meter dash");

bob.grade(jimbob, "skydiving");
fred.grade(hellen, "protesting");

wilson.standUp("#General");
cory.standUp("#Random");
wilson.debugsCode(jimbob, "googleing");
cory.debugsCode(hellen, "Terminal");
