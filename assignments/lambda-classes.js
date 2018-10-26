// CODE here for your Lambda Classes



/*
    #### Person

    * First we need a Person class. This will be our `base-class`
    * Person receives `name` `age` `location` `gender` all as props
    * Person receives `speak` as a method.
    * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props   
*/

/* Person Class */
class Person {

    // Person Constructor
    constructor(person) {
        this.name = person.name;
        this.age = person.age;
        this.location = person.location;
        this.gender = person.gender;
    }
    // Person speak function
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

/*

#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
  * 
*/

class Instructor extends Person {
    // Instructor Constructor
    constructor(instructor) {
        super(instructor);
        this.specialty = instructor.specialty;
        this.favLanguage = instructor.favLanguage;
        this.catchPhrase = instructor.catchPhrase;
    }
    // Instructor demo subject function
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    // Instructor grade student function
    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
  * 
*/

class Student extends Person {

    // Student Constructor
    constructor(student) {
        super(student);
        this.previousBackground = student.previousBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;
    }
    // List favSubject function
    
    listSubjects() {
        const favList = this.favSubjects.map(subject => console.log(subject));
    }
    
    // Pull Request Submission function
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    // Spring Challenge status function
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challange on ${subject}.`
    }
}


/*
#### Project Mananger

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following uniqe props:
* `gradClassName`: i.e. CS1
* `favInstructor`: i.e. Sean
* ProjectManangers have the following Methods:
* `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
* `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
* 
*/

class ProjectManager extends Instructor {

    // Project Manager Constructor 
    constructor(manager) {
        super(manager);
        this.gradClassName = manager.gradClassName;
        this.favInstructor = manager.favInstructor;
    }
    // StandUp accouncement function
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    // Debugs accouncement function
    debugsCode(student, subject) {
        return `${this.name} debugs ${student}'s code on ${subject}`;
    } 
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    catchPhrase: `Don't forget the homies`,
    favLanguages: 'JavaScript',
    specialty: 'Front-end',
  });

const jane = new Student({
    name: 'Jane',
    location: 'Rockville',
    age: 53,
    gender: 'female',
    catchPhrase: 'Catch you laterz',
    className: 'CS132',
    favSubjects: ['Ruby', 'JavaScript', 'PHP'],
});

const jimmy = new ProjectManager({
    name: 'Jimmy',
    location: 'Houston',
    age: 105,
    gender: 'male',
    gradClassName: 'C1',
    favInstructor: 'Fred',
    catchPhrase: `Get those stand-up forms, people!`
});


console.log(fred.name);
console.log(fred.demo('Ju-Ju coding'));
console.log(fred.grade('Jane', 'JavaScript'));
console.log(jimmy.debugsCode('jane', 'Ruby'));
console.log(jane.listSubjects());
console.log(jane.PRAssignment('PHP'));
console.log(jane.sprintChallenge('JavaScript'));
console.log(jimmy.standUp('lol'));