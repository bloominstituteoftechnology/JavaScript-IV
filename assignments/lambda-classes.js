// #### Person
class Person {
    constructor (personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    this.gender = personAttributes.gender;
    }
speak () {
     return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
    }



// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

// #### Instructor
class Instructor extends Person{
    constructor (instructorAttributes){
    super (instructorAttributes);
     this.specialty = instructorAttributes.specialty;
     this.favLanguage = instructorAttributes.favLanguage;
     this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject){
       return  `Today we are learning about ${subject}`;
    }
    grade (student,subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}
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
class Student extends Person{
    constructor (studentAttributes){
        super(studentAttributes);
     this.previousBackground = studentAttributes.previousBackground;
     this.className = studentAttributes.className;
     this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects (){
       const favlists = this.favSubjects.map(subject => subject);
       return favlists;
       }
    
    PRAssignment (subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

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
//   * 
//   * #### Project Mananger
class ProjectManagers extends Instructor{
    constructor(PMAttributes){
        super(PMAttributes);
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor;
    }
    standup (channel) {
       return ` ${name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode () {
return `${name} debugs ${student.name}'s code on ${subject}`
    }
}
 

//   * Now that we have instructors and students, we'd be nowhere without our PM's
//   * ProjectManagers are extensions of Instructors
//   * ProjectManagers have the following uniqe props:
//     * `gradClassName`: i.e. CS1
//     * `favInstructor`: i.e. Sean
//   * ProjectManangers have the following Methods:
//     * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//     * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

