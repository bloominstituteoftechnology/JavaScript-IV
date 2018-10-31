// // CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
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
    constructor(InstructorProps) {
        super(InstructorProps)
        this.specialty = InstructorProps.specialty;
        this.favLanguage = InstructorProps.favLanguage;
        this.catchPhrase = InstructorProps.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student} receives a perfect grade on ${subject}.`;
    }
    changeGrade(student) {
        this.student.grade = this.student.grade.bind(this);
        let rand = Math.random()*5;
        if (rand < 2 || rand > 4.5) {
            rand = -Math.abs(rand);
        }
        let num = Math.round(rand);
        this.student.grade += num;
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
    constructor (StudentProps) {
        super(StudentProps)
        this.previousBackground = StudentProps.previousBackground;
        this.className = StudentProps.className;
        this.favSubjects = StudentProps.favSubjects;
        this.grade = StudentProps.grade;
    }
    listsSubjects() {
        let i = 0;
        let favs = this.favSubjects.split(' ');
        while (i < favs.length) {
            console.log(favs[i]);
            i++;
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
    graduate(){
        if (this.grade >= 70) return `${this.name} is ready to graduate`;
        else return `${this.name} is not ready to graduate`;
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
class ProjectManager extends Instructor {
    constructor (PMProps) {
        super(PMProps)
        this.gradClassName = PMProps.gradClassName;
        this.favInstructor = PMProps.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, '@channel standy times!'`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

let Kathryn = new Student ({
    name: 'Kathryn',
    age: 30,
    location: 'Durham, NC',
    gender: 'F',
    previousBackground: 'marketing',
    className: 'CSPT1',
    favSubjects: 'Node, Express, React',
    grade: 90
})

let Ben = new Instructor ({
    name: 'Ben',
    age: 35,
    location: 'DC',
    gender: 'M',
    specialty: 'Redux',
    favLanguage: 'Python',
    catchPhrase: 'Props!'
})

let Jackie = new ProjectManager ({
    name: 'Jackie',
    age: 23,
    location: 'Utah',
    gender: 'F',
    specialty: 'Node',
    favLanguage: 'JavaScript',
    catchPhrase: 'stand up time!',
    gradClassName: 'CSFT3',
    favInstructor: 'Ben'
})

// ### Tests
console.log(Kathryn);
console.log(Kathryn.listsSubjects());
console.log(Kathryn.PRAssignment('user-interface'));
console.log(Kathryn.sprintChallenge('React'));
console.log(Ben);
console.log(Ben.demo('LESS'));
console.log(Ben.grade('Kathryn', 'Redux'));
console.log(Jackie);
console.log(Jackie.debugsCode('Mary', 'Redux'))
console.log(Jackie.standUp('CSFT12'));

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) 
    // that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.
