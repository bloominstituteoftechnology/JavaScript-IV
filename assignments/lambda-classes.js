// CODE here for your Lambda Classes


// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}` //?

    }
}

console.log(Person.prototype.speak()); 

// ####
// Instructor

//     *
//     Now that we have a Person as our base class, we 'll build our Instructor class. *
//     Instructor uses the same attributes that have been set up by Person *
//     Instructor has the following unique props:
//     *
//     `specialty`
// what the Instructor is good at i.e.
// 'redux' *
// `favLanguage`
// i.e.
// 'JavaScript, Python, Elm etc.' *
// `catchPhrase`
// i.e.
// `Don't forget the homies` *
// Instructor has the following methods:
//     *
//     `demo`
// receives a `subject`
// string as an argument and logs out the phrase 'Today we are learning about {subject}'
// where subject is the param passed in .*`grade`
// receives a `student`
// object and a `subject`
// string as arguments and logs out '{student.name} receives a perfect score on {subject}'

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
       console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
console.log(Instructor.prototype.demo('javascript'));
console.log(Instructor.prototype.grade({name:'Josh'}, 'javascript'));

const josh = new Instructor({
    name: 'josh',
    gender: 'M',
    previousBackground: 'tech support',
    className: 'cs1',
    specialty: 'vanilla js',
    favLanguage: 'javascript',
    catchPhrase: 'Oh SNAP',
}); //?


// ####
// Student

//     *
//     Now we need some students!
//     *
//     Student uses the same attributes that have been set up by Person *
//     Student has the following unique props:
//     *
//     `previousBackground`
// i.e.what the Student used to do before Lambda School *
//         `className`
//     i.
//     e.CS132 *
//     `favSubjects`.i.e.an array of the student 's favorite subjects ['
// Html ', '
// CSS ', '
// JavaScript '] *
//     Student has the following methods:
//     *
//     `listsSubjects`
// a method that logs out all of the student 's favoriteSubjects one by one. *
//     `PRAssignment`
// a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}` *
//     `sprintChallenge`
// similar to PRAssignment but logs out `student.name has begun spring challenge on {subject}`

class Student extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listsSubjects(favSubjects) {
        let subjectList = this.favSubjects.forEach(subject => {
           console.log(subject);
       });
    }
    PRAssignment(subject) {
        `${this.name} has submitted a PR for ${subject}`; //?
    }
     sprintChallenge(subject) {
         `${this.name} has begun sprint challenge on ${subject}`; //?
     }

}

const jj = new Student(
    {name: 'jj', 
    gender: 'M', 
    previousBackground: 'nurse', 
    className: 'cs11', 
    favSubjects: ['javascript', 'python'], 
}); //?

jj.listsSubjects();
jj.PRAssignment('javascript'); 
jj.sprintChallenge('python');

// ####
// Project Mananger

//     *
//     Now that we have instructors and students, we 'd be nowhere without our PM'
// s
//     *
//     ProjectManagers are extensions of Instructors *
//     ProjectManagers have the following uniqe props:
//     *
//     `gradClassName`: i.e.CS1 *
//     `favInstructor`: i.e.Sean *
//     ProjectManangers have the following Methods:
//     *
//     `standUp`
// a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `
// debugsCode ` a method that takes in a student object and a subject and logs out ` {
//     name
// }
// debugs {
//     student.name
// }
// 's code on {subject}`

class projectManager extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel) {
     console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);

    }
}


console.log(jj.name); 

const ben = new projectManager({
    name: 'ben',
    gender: 'M',
    previousBackground: 'lego builder',
    className: 'cs1',
    specialty: 'vanilla js',
    favLanguage: 'javascript',
    catchPhrase: `Let's Flamingle!`,
    gradClassName: 'CS6',
    favInstructor: 'josh',
}); //? 

ben.standUp('flamingo'); 
ben.debugsCode(jj, 'javascript');