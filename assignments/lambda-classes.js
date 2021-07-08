// // CODE here for your Lambda Classes
// ## `lambda-classes` - We need a roster of Lambda School personnel. Build it!

// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

class Person {
    constructor(personAttributes) {
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.gender = personAttributes.gender;
    this.location = personAttributes.location;
    }
    speak () {
        return `Hello, my name is ${this.name}. I am from ${this.location}.`;
    }
}

// #### Instructor
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs)
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }
    demo(str) {
        return `Today we are learning about ${str}!`;
    }
    grade(student, str) {
        return `${student.name} receives a perfect score on ${str}.`;
    }
    gradedScore(student) {
       return student.grade - Math.ceil(Math.random()*20-10);
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
    constructor(studentAttrs){
        super(studentAttrs)
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = Math.ceil(Math.random()*100);
    }

    listsSubjects () {
        return `${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, ${this.favSubjects[2]}, and ${this.favSubjects[3]}.`;
    }

    PRAssignment(str) {
        return `${this.name} has submitted a PR for ${str}.`;
    }

    sprintChallenge(str) {
        return `${this.name} has begun the sprint challenge on ${str}.`;
    }

    graduate(){
        if (this.grade > 70) {
        return `${this.name} is ready to graduate from Lambda School! Bring on the party!`}
        else if (this.grade < 70) {
        return `${this.name} needs to join an MBP and work out the kinks before graduating.`
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

class ProjectManager extends Instructor {
    constructor(pmAttrs){
        super(pmAttrs)
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }

    standUp(str){
        return `${this.name} announces to ${str}, @channel standy times!`;
    }

    debugsCode(student, str){
        return `${this.name} debugs ${student.name}'s code on ${str}.`;

    }
}

const josh = new Instructor({
    name: 'Josh',
    age: 34,
    location: 'Utah',
    gender: 'Male',
    specialty: 'Banjo',
    favLanguage: 'JavaScript',
    catchPhrase: 'Isn\'t that amazing?'
});

const ryan = new Instructor({
    name: 'Ryan',
    age: 30,
    location: 'Training Kit',
    gender: 'Male',
    specialty: 'Funny comments while teaching',
    favLanguage: 'React',
    catchPhrase: 'I am an animal of course'
});

const marious = new ProjectManager({
    name: 'Marious',
    age: 27,
    location: 'Alabama',
    gender: 'Male',
    specialty: 'Being helpful',
    favLanguage: 'JavaScript',
    catchPhrase: 'I have some resources for you!',
    gradClassName: 'CS10',
    favInstructor: 'Josh Knell'
});

const caitlin = new ProjectManager({
    name: 'Caitlin',
    age: 25,
    location: 'Florida',
    gender: 'Female',
    specialty: 'Keeping everything running smoothly',
    favLanguage: 'Python',
    catchPhrase: 'Here\'s a Zoom link!',
    gradClassName: 'CS9',
    favInstructor: 'Dustin Myers'
});

const christie = new Student({
    name: 'Christie',
    age: 23,
    location: 'Somewhere in the States',
    gender: 'Female',
    previousBackground: 'Barista',
    className: 'FSW16',
    favSubjects: [`JavaScript`, `not HTML`, `not CSS`, `probably going to like React`],
});

const rhiannon = new Student({
    name: 'Rhiannon',
    age: 32,
    location: 'Austin',
    gender: 'Female',
    previousBackground: 'Lawyer',
    className: 'Auditor',
    favSubjects: 'Sass',
});
// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) 
// that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
// * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.

console.log(josh.grade(christie, 'JavaScript'));
console.log(ryan.catchPhrase);
console.log(marious.debugsCode(christie, 'JavaScript'));
console.log(caitlin.standUp('Team Marious'));
console.log(christie.listsSubjects());
console.log(rhiannon.PRAssignment('JavaScript'));
console.log(rhiannon.speak());
console.log(josh.demo('refactoring prototypes'));
console.log(rhiannon.sprintChallenge('JavaScript IV'));
console.log(christie.grade);
console.log(rhiannon.grade);
console.log(marious.gradedScore(christie));
console.log(rhiannon.graduate());
console.log(christie.graduate());