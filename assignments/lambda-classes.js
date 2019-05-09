// CODE here for your Lambda Classes

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(name, age, location, gender) {
        this.name = name,
        this.age = age,
        this.location = location,
        this.gender = gender
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

// Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase) {
        super (name, age, location, gender);
        this.specialty = specialty,
        this.favLanguage = favLanguage,
        this.catchPhrase = catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`
    }
}

// Create an Instructor instance called Gabe
const gabe = new Instructor('Gabe', 37, 'Bedrock', 'male', 'Front-end', 'JavaScript', `Don't forget the homies`);

// Test outputs
console.log(gabe.name);
console.log(gabe.age);
console.log(gabe.location);
console.log(gabe.gender);
console.log(gabe.specialty);
console.log(gabe.favLanguage);
console.log(gabe.catchPhrase);
console.log(gabe.demo('JavaScript'));
console.log(gabe.grade('React.js'));

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
    constructor(name, age, location, gender, previousBackground, className, favSubjects) {
        super(name, age, location, gender),
        this.previousBackground = previousBackground,
        this.className = className,
        this.favSubjects = favSubjects
    }
    listsSubjects() {
        this.favSubjects.forEach(subject => console.log(subject))
        // Alternative method (add extra parameter 'index' to the function)
        // this .favSubjects.forEach(subject, index) {
        //     let subjectList = '';
        //     subjectList += (index > 0 ? "\n":"")+subject;
        //         or
        //     subjectList += (index > 0 ? ", ":"")+subject;
        // }
        // return subjectList;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

// Create a Student instance called Jose
const jose = new Student ('Jose', 25, 'Lagos', 'male', 'digital nomad', 'WEBEU2', ['Html', 'CSS', 'JavaScript'])

// Test outputs
console.log(`${jose.name} is currently learning his third favorite subject which is ` + jose.favSubjects[2]);
console.log(`${jose.name} used to be a ${jose.previousBackground} before joining Lambda School `);
console.log(jose.className);
console.log(jose.favSubjects);
jose.listsSubjects();
console.log(jose.PRAssignment('JavaScript IV'));
console.log(jose.sprintChallenge('JavaScript'));

// - Test instances of each class
// - MVP challnege for lambda-classes complete


// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following unique props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManagers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(name, age, location, gender, specialty, favLanguage, catchPhrase, gradClass, favInstructor) {
        super(name, age, location, gender, specialty, favLanguage, catchPhrase),
        this.gradClass = gradClass,
        this.favInstructor = favInstructor
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

// Create a PM instance called Maxime
const maxime = new ProjectManager('Maxime', 30, 'Paris', 'male', 'Back-end', 'Python', 'Continue to work hard like you do', 'WEBEU1', 'Gabe');

// Test Outputs
console.log(maxime.name);
console.log(maxime.catchPhrase);
console.log(maxime.gradClass);
console.log(maxime.favInstructor);
console.log(maxime.standUp('webeu2_maxime'));
console.log(maxime.debugsCode(jose,'Javascript'));