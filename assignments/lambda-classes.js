// CODE here for your Lambda Classes

// Person

// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// Instructor

// Now that we have a Person as our base class, we'll build our Instructor class.
// Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
// specialty what the Instructor is good at i.e. 'redux'
// favLanguage i.e. 'JavaScript, Python, Elm etc.'
// catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
class Instructor extends Person {
    constructor(insProps) {
        super(insProps);
        this.specialty = insProps.specialty;
        this.favLanguage = insProps.favLanguage;
        this.catchPhrase = insProps.catchPhrase;
    }

    demo(string) {
        return `Today we are learning about ${string}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }

    gradeAssignment(student) {
        //roll the dice, if >0.5 then add point, else subtract point
        const adjustment = Math.random() >= .5 ? 1 : -1;

        //random the assignment grade from 1-10, then multiple with adjustment to get the correct sign.
        let point = Math.ceil(Math.random() * 10) * adjustment;

        student.grade += point;

        let statement = `${this.name} ${adjustment === 1 ? "add" : "subtract"} ${point} ${adjustment === 1 ? "to" : "from"} ${student.name}'s grade. ${student.name}'s grade is now ${student.grade}.`;
        console.log(statement);
    }

    //Check on a student, if a student's grade is not above 70 then keep grading assignment, else announce that student can graduate.
    // graduate(student) {
    //     while (student.grade < 70) {
    //         this.gradeAssignment(student);
    //         // console.log(this.gradeAssignment(student))
    //     }
    //     return `${student.name} can now graduate from Lambda School.`;
    // }
}
// Student

// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
// sprintChallenge similar to PRAssignment but logs out student.name has begun spring challenge on {subject}

// Project Mananger
class Student extends Person {
    constructor(stuProps) {
        super(stuProps);
        this.previousBackground = stuProps.previousBackground;
        this.classname = stuProps.classname;
        this.favSubjects = stuProps.favSubjects;
        this.grade = Math.floor(Math.random() * 100);
    }

    listsSubjects() {
        return this.favSubjects.join(', ');
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
    graduate(instructor) {
        //If grade is under 70 keep getting instructor to grade until graduate.
        while (this.grade < 70) {
            instructor.gradeAssignment(this);
        }
        return `${this.name} can now graduate from Lambda School!`;
    }
}
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following uniqe props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManangers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
// Stretch Problem
class ProjectManagers extends Instructor {
    constructor(pmProps) {
        super(pmProps);
        this.gradClassname = pmProps.gradClassname;
        this.favInstructor = pmProps.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

}

//Person's properties
// name
// age
// location
// gender

//Instructor's properties
// specialty
// favLanguage
// catchPhrase

//Student's properties
// previousBackground
// classname
// favSubjects

//PM's properties
// gradClassname
// favInstructor

const sean = new Person({
    name: 'Sean',
    age: '35',
    location: 'Lambda School',
    gender: 'Male'
})

const josh = new Instructor({
    name: 'Josh',
    age: '40',
    location: 'Lambda School',
    gender: 'Male',
    specialty: 'Web Development',
    favLanguage: 'JavaScript',
    catchPhrase: "Holiday? What's that?!"

})

const vu = new Student({
    name: 'Vu',
    age: '33',
    location: 'Orange County',
    gender: 'Male',
    previousBackground: 'Data Analyst',
    classname: 'CS11',
    favSubjects: ['Python', 'JavaScript']
})

const jason = new ProjectManagers({
    name: 'Jason',
    age: '45',
    location: 'East Coast',
    gender: 'Male',
    gradClassname: 'CS5',
    favInstructor: 'Josh Knell'
})

console.log(sean.speak());
console.log(josh.speak());
console.log(josh.favLanguage);
console.log(josh.demo('JavaScript'));
console.log(josh.grade(vu, 'JavaScript'));
console.log(vu.listsSubjects());
console.log(vu.PRAssignment('JavaScript'));
console.log(vu.sprintChallenge('JavaScript'));
console.log(vu.speak());
console.log(jason.speak());
console.log(jason.demo('Whiteboarding'));
console.log(jason.standUp('CS11'));
console.log(jason.debugCode(vu, 'today Challenge'));

// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.

console.log(vu.grade);
console.log(vu.graduate(josh));

