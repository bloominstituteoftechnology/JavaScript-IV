// CODE here for your Lambda Classes

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock​​​​​` where `name` and `location` are the object's own props

class Person {
    constructor (atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
        this.gender = atts.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

const Mary = new Person ({
    name: "Mary",
    age: 20,
    location: "UK",
    gender: "Female"
})

const Sara = new Person ({
    name: "Sara",
    age: 30,
    location: "San Diego",
    gender: "Female"
})


// console.log(Sara.speak());
//console.log(Mary.speak());

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subect` string as an argument and logs out the phrase '​​​​​Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a student object and a subject string as arguments and logs out '​​​​​{student.name} receives a perfect score on {variables​​​​​}'


class Instructor extends Person {
    constructor(iAtts) {
        super(iAtts);
        this.specialty = iAtts.specialty;
        this.favLanguage = iAtts.favLanguage;
        this.catchPhrase = iAtts.catchPhrase;
    }

    demo (subject) {
        return '​​​​​Today we are learning about ${subject}.';
    }

    grade (obj, stuStr) {
        return '​​​​​${this.name} receives a perfect score on {this.variables​​​​​}';
    }
}

const Dave = new Instructor({
    specialty: 'React',
    favLanguage: "JavaScript",
    catchPhrase: "Automagically"
})

// console.log(Dave.specialty)
// console.log(Dave.demo("React"));
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
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun spring challenge on {subject}`

class Student extends Person {
    constructor(sAtts) {
        super(sAtts);
        this.previousBackground = sAtts.previousBackground;
        this.className = sAtts.className;
        this.favSubjects = sAtts.favSubjects;
    }

    listsSubjects (favSubjects) {
        for (let i = 0; i < favSubjects.length; i++)
            console.log(favSubjects[i]);
    }

    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge (subject) {
        console.log (`${this.name} has begun spring challenge on ${subject}`)
    }
}


const Sandy = new Student ({
    previousBackground: "Chef",
    className: "CS 10",
    favSubjects: ["JavaScript", "Bootstrap"]
})


console.log(Sandy.previousBackground)
console.log(Sandy.PRAssignment("Math"))
// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out `{​​​​​name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor(pAtts) {
        super(pAtts);
        this.gradClasName = pAtts.gradClasName;
        this.favInstructor = pAtts.favInstructor;
    }

    standUp (channel) {
        console.log(`${this.name} announces to slackChannel @${channel} standy times!​​​​​`);
    }

    // debugsCode (student, subect) {
    //     console.log(​​​​​`${this.name} debugs ${student} s  code on ${subject}`);
    // }
}

