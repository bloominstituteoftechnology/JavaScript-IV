// CODE here for your Lambda Classes

// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person{
    constructor(props){
        this.name = props.name,
        this.age = props.age,
        this.location = props.location
        this.gender = props.gender
    }
    speak(){
        console.log( `Hello my name is ${this.name}, I am from ${this.location}`);
    }
}


// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
//     specialty what the Instructor is good at i.e. 'redux'
//     favLanguage i.e. 'JavaScript, Python, Elm etc.'
//     catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
//     demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//     grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty,
        this.favLanguage = props.favLanguage,
        this.catchPhrase = props.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}


// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
//     previousBackground i.e. what the Student used to do before Lambda School
//     className i.e. CS132
//     favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
//     listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
//     PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
//     sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}


class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground,
        this.className = props.className,
        this.favSubjects = props.favSubjects
    }
    listsSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}


// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following uniqe props:
//     gradClassName: i.e. CS1
//     favInstructor: i.e. Sean
// ProjectManangers have the following Methods:
//     standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//     debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}

class ProjectManagers extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName,
        this.favInstructor = props.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }

}
// Instructors:
const instructor = new Instructor({
    name: 'Instructor',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const instructor2 = new Instructor({
    name: 'Instructor2',
    location: 'LA',
    age: 35,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Second instructors test phrase!`
  });

  // Students:
  const student = new Student({
    name: 'Student',
    location: 'New York',
    age: 22,
    gender: 'male',
    previousBackground: "Runner",
    className: "FSW16",
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });
  const student2 = new Student({
    name: 'Student2',
    location: 'Saetle',
    age: 25,
    gender: 'female',
    previousBackground: "Dancer",
    className: "FSW16",
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });
// Project Managers:
const pmanager = new ProjectManagers({
    name: 'ProjectManager',
    location: 'Florida',
    age: 40,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'PM test phrase!',
    gradClassName: "FSW16",
    favInstructor: 'Josh'
});
const pmanager2 = new ProjectManagers({
    name: 'ProjectManager',
    location: 'Florida',
    age: 40,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'PM test phrase!',
    gradClassName: "FSW16",
    favInstructor: 'Sean'
});

  console.log(instructor.speak());
  console.log(instructor.demo("JavaScript"));
  console.log(pmanager.speak());
  console.log(student.speak());
  console.log(student.PRAssignment("JavaScript"));
  console.log(pmanager.standUp("FSW16"));
  console.log(pmanager.debugsCode(student, "JavaScript"));
  console.log(instructor.grade(student, "JavaScript"));
  
