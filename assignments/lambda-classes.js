// CODE here for your Lambda Classes
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
// #### Instructor
//



// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
//
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
//


//   #### Student
//
//   * Now we need some students!
//   * Student uses the same attributes that have been set up by Person
//   * Student has the following unique props:
//     * `previousBackground` i.e. what the Student used to do before Lambda School
//     * `className` i.e. CS132
//     * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
//   * Student has the following methods:
//     * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//     * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//     * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
//



//     #### Project Mananger
//
//     * Now that we have instructors and students, we'd be nowhere without our PM's
//     * ProjectManagers are extensions of Instructors
//     * ProjectManagers have the following uniqe props:
//       * `gradClassName`: i.e. CS1
//       * `favInstructor`: i.e. Sean
//     * ProjectManangers have the following Methods:
//       * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//       * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`


class Person {
    constructor(information) {
        this.name = information.name;
        this.age = information.age;
        this.location = information.location;
        this.gender = information.gender;
    }
    speak() {
        return(`Hello my name is ${ this.name }, I am from ${ this.location }`)
    }
}

class Instructor extends Person {
    constructor(person) {
        super(person);
        this.specialty = person.specialty;
        this.favLanguage = person.favLanguage;
        this.catchPhrase = person.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${ subject }`)
    }
    grade(student, subject) {
        console.log(`${ student.name } receives a perfect score on ${ subject }`)
    }
}

// Instructor # 1
const JonSnow = new Instructor({
    name: "Jon Snow",
    age: 37,
    location: "The Wall",
    gender: "male",
    specialty: "ice king slayer",
    favLanguage: "Python",
    catchPhrase: "Winter is coming"
})

// Instructor # 2
const DeadPool = new Instructor({
    name: "Wade Wilson",
    age: 28,
    location: "The Fourth Wall",
    gender: "male",
    specialty: "Java",
    catchPhrase: "Fourth wall break inside of a fourth wall break? That's like... 16 walls!"
})
console.log(JonSnow);
console.log(JonSnow.speak());
console.log(JonSnow.catchPhrase);
console.log(JonSnow.age);
console.log(DeadPool);
console.log(DeadPool.speak());
console.log(DeadPool.catchPhrase);
console.log(DeadPool.age);



class Students extends Person {
    constructor(students)
    {
        super(students);
        this.previousBackground = students.previousBackground;
        this.className = students.className;
        this.favSubjects = students.favSubjects;
    }
    listsSubjects(favSubjects) {
        console.log(this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${ student.name } has submitted a PR for ${ subject }`)
    }
    sprintChallenge(subject) {
        console.log(`${ student.name } has begun a sprint challenge on ${ subject }`)
    }

}

// class ProjectManagers extends Instructor {
//     constructor(gradClassName, favInstructor)
//     this.gradClassName = gradClassName;
//     this.favInstructor = favInstructor;
// }
