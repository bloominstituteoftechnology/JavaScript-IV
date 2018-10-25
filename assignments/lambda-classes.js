// CODE here for your Lambda Classes
// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
    list() {
        console.log(`${this.favSubjects}`);
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
//   * 
   
class Instructor extends Person {
       constructor(instructorAttributes) {
       super(instructorAttributes);
       this.specialty = instructorAttributes.specialty;
       this.favLanguage = instructorAttributes.favLanguage;
       this.catchPhrase = instructorAttributes.catchPhrase;
     }
     demo(subject) {
         console.log(`Today we are learning about ${this.subject}`)
     }
     grade(student) {
         console.log(`${student.name} receives a perfect score on ${this.subject}`)
     }
   }

   const instructor = new Person({
       name: 'Anika',   
       age: 40,
       location: 'Indiana',
       gender: 'Female',
       specialty: 'redux',
       favLanguage: 'Javascript',
       catchPhrase: 'Don\'t forget the homies'
   });

   console.log(instructor.name);


//    #### Student

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


const student = new Person({
    name: 'K\'naan',   
    age: 22,
    location: 'Vulcan',
    gender: 'Male',
    previousBackground: 'massage therapy',
    className: 'CS132',
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript',
    ],
    listSubjects: console.log(function() {
        console.log(`${this.favSubjects}`),
    PRAssignment: function(subject) {
        console.log(`${this.name} has submitted PR for ${subject}`)}
    sprintChallenge:

})


// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

const projectmanager = new Instructor({
    name: 'Maclovia',   
    age: 30,
    location: 'California',
    gender: 'Female',
    gradClassName: 'CS1',
    favInstructor: 'Sean',
    standUp:
    debugsCode:
})