// CODE here for your Lambda Classes
//  First we need a Person class. This will be our `base-class`
//  Person receives `name` `age` `location` `gender` all as props
//  Person receives `speak` as a method.
//  This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
//    # Instructor
//
//  Now that we have a Person as our base class, we'll build our Instructor class.
//   Instructor uses the same attributes that have been set up by Person
//
//   Instructor has the following unique props:
//   `specialty` what the Instructor is good at i.e. 'redux'
//   `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   `catchPhrase` i.e. `Don't forget the homies`
//   Instructor has the following methods:
//   `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//   `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
//
//      # Student
//
//   Now we need some students!
//   Student uses the same attributes that have been set up by Person
//   Student has the following unique props:
//   `previousBackground` i.e. what the Student used to do before Lambda School
//   `className` i.e. CS132
//   `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
//   Student has the following methods:
//   `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
//   `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
//
//        # Project Mananger
//
//      Now that we have instructors and students, we'd be nowhere without our PM's
//      ProjectManagers are extensions of Instructors
//      ProjectManagers have the following uniqe props:
//        `gradClassName`: i.e. CS1
//        `favInstructor`: i.e. Sean
//      ProjectManangers have the following Methods:
//      `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//      `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

class Person {
    constructor (person_attributes) {
        this.name = person_attributes.name;
        this.age = person_attributes.age;
        this.location = person_attributes.location;
        this.gender = person_attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
    }
    class Instructor extends Person{
    constructor (instructor_attributes){
        super(instructor_attributes);
        this.specialty = instructor_attributes.specialty;
        this.favLanguage = instructor_attributes.favLanguage;
        this.catchPhrase = instructor_attributes.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }
    grade (studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
    }
    }
    class Student extends Person {
    constructor (student_attributes) {
        super(student_attributes);
        this.previousBackground = student_attributes.previousBackground;
        this.classname = student_attributes.classname;
        this.favSubjects = student_attributes.favSubjects;
    }
    listSubjects() {
        this.favSubjects.forEach(function(element){
        console.log(`${element}\n`);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}
    class ProjectManager extends Instructor {
    constructor (projectManager_attributes) {
        super(projectManager_attributes);
        this.gradClassName = projectManager_attributes.gradClassName;
        this.favInstructor = projectManager_attributes.favInstructor;
    }
    standUp (slackChannel){
        return `${this.name} announces to ${slackChannel}, at @channel standy times!`;
}
    debugsCode (studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    }
}
const RickyBobby = new Instructor({
    name: 'RickyBobby',
    age: 40,
    location: 'Talahassee',
    gender: 'male',
    specialty: 'Nascar',
    favLanguage: 'Broken English',
    catchPhrase: 'If you aint first your last'
});
const MasterChief = new Instructor({
    name: 'MasterChief',
    age: 160,
    location: 'Earth',
    gender: 'male',
    specialty: 'killing aliens',
    favLanguage: 'Python',
    catchPhrase: 'Get up, SO I CAN KILL YOU AGAIN!'
    });
const IronMan = new Student({
    name: 'Tony Stark',
    age: 30,
    location: 'New York',
    gender: 'male',
    previousBackground: 'Mechanic',
    classname: 'AI programming',
    favSubjects: ['astrophysics', 'hulk stuff', 'cars']
});
const JackSparrow = new Student({
    name: 'Jack',
    age: 43,
    location: 'The Islands',
    gender: 'male',
    previousBackground: 'pirate',
    classname: 'Online Security',
    favSubjects: ['history', 'cannons', 'canibals']
});
const Glados = new ProjectManager({
    name: 'Glados',
    age: 999,
    location: 'Lego Dimensions',
    gender: 'female',
    specialty: 'Portals',
    favLanguage: 'Binary',
    catchPhrase: 'Im not angry. Just go back to the testing area.',
    gradClassName: 'Testing',
    favInstructor: 'MasterChief'
});
const Claptrap = new ProjectManager({
    name: 'Claptrap',
    age: 12,
    location: 'Borderlands',
    gender: 'male',
    specialty: 'Pointless Missions',
    favLanguage: 'Nonsense',
    catchPhrase: 'Look out everybody! Things are about to get awesome!',
    gradClassName: 'CS105',
    favInstructor: 'RickyBobby'
});
console.log(RickyBobby.name);
console.log(MasterChief.specialty);
console.log(RickyBobby.speak());
console.log(RickyBobby.demo('Front-End Development'));
console.log(MasterChief.grade(JackSparrow, 'Web Security'));
console.log(IronMan.favSubjects);
console.log(IronMan.listSubjects());
console.log(JackSparrow.PRAssignment('history of objects'));
console.log(IronMan.sprintChallenge('JavaScript IV'));
console.log(Glados.name);
console.log(Glados.speak());
console.log(Claptrap.catchPhrase);
console.log(Claptrap.standUp('hired'));
console.log(Claptrap.debugsCode(IronMan, 'recursion'));