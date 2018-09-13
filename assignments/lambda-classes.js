// // CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props




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



// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`


//Classes
class Person {
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak() {
        return `Hello my name is ${this.name}. I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(instructInfo){
        super(instructInfo);
        this.specialty = instructInfo.specialty;
        this.favLanguage = instructInfo.favLanguage;
        this.catchPhrase = instructInfo.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeChange (student) {
        student.graded += Math.random()*100-50;
        return student.graded;
    }
}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.graded = studentInfo.graded;
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listsSubjects () {
        return `${this.favSubjects}`;
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has has begun sprint challenge on ${subject}`;
    }
    graduate (instructor) {
        if(this.graded > 70){
            console.log( `~~Congrats! You graduate!~~`);
        }
        else {
            while(this.graded <70) {
                console.log (`Your grade is ${this.graded}. You need a 70 or higher to graduate. Try again!`);
                instructor.gradeChange(this);
            }
            console.log( `~~Congrats! You graduate!~~`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMInfo) {
        super(PMInfo);
        this.gradClassName = PMInfo.gradClassName;
        this.favInstructor = PMInfo.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Assignments
const jon = new Person({
    name: 'Jon Snow',
    location: 'Winterfell',
    age: 28,
    gender: 'male'
});
const ygritte = new Person({
    name: 'Ygritte',
    location: 'North of the Wall',
    age: 23,
    gender: 'female'
})


const meli = new Instructor({
    name: 'Melisandre',
    age: 250,
    location: 'Probably in the Fire',
    gender: 'female',
    specialty: 'deception',
    favLanguage: 'Asshai',
    catchPhrase: 'You can\'t die!'
})
const jamie = new Instructor({
    name: 'Jamie Lannister',
    age: 34,
    location: 'Casterly Rock',
    gender: 'male',
    specialty: 'being handsome',
    favLanguage: 'Sarcasm',
    catchPhrase: 'Where\'d my hand go?!'
})


const arya = new Student({
    name: 'Arya Stark',
    age: 16,
    location: 'Winterfell',
    gender: 'female',
    graded: 98,
    specialty: 'Switching faces',
    favLanguage: 'English',
    catchPhrase: 'The North remembers',
    previousBackground: 'Sword Training',
    className: 'Syrio\'s class',
    favSubjects: 'Poking others with Needle'
})
const bran = new Student({
    name: 'Bran Stark',
    age: 14,
    location: 'Winterfell',
    gender: 'male',
    graded: 78,
    specialty: 'Mind Control',
    favLanguage: 'English',
    catchPhrase: '*Stares Intently*',
    previousBackground: 'Training with very old children',
    className: 'It was in a tree...',
    favSubjects: 'Making others uncomfortable'
})

const tormund = new ProjectManager({
    name: 'Tormund',
    age: 42,
    location: 'North of the Wall',
    gender: 'male',
    specialty: 'Axes',
    favLanguage: 'Wilding',
    catchPhrase: 'Where\'s Brianne?',
    previousBackground: 'Wildling training',
    gradClassName: 'none',
    favInstructor: 'Meli'
})
const gendry = new ProjectManager({
    name: 'Gendry',
    age: '∞',
    location: 'King\'s Landing',
    gender: 'male',
    specialty: 'BlackSmith',
    favLanguage: 'English',
    catchPhrase: 'I didn\'t ask for any of this',
    previousBackground: 'Somehow really good at everything?',
    gradClassName: 'N/A',
    favInstructor: 'Jamie'
})


//Tests
console.log(gendry.speak());
console.log(meli.demo('magic'));
console.log(bran.listsSubjects());
console.log(arya.PRAssignment('White Walkers'));
console.log(bran.sprintChallenge('Prototypes'));
console.log(jamie.grade(arya, 'Murdering!'));
console.log(gendry.standUp('fsw14'));
console.log(tormund.debugsCode(bran, 'JavaScript'));
console.log(jamie.gradeChange(bran));
bran.graduate(jamie);


// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.

