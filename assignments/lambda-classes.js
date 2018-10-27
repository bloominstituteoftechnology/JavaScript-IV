// CODE here for your Lambda Classes


// Lambda personnel can be broken down into three different types of people.
// Instructors - extensions of Person
// Students - extensions of Person
// Project Managers - extensions of Instructors
// IMPORTANT - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

                    // const fred = new Instructor({
                    //     name: 'Fred',
                    //     location: 'Bedrock',
                    //     age: 37,
                    //     gender: 'male',
                    //     favLanguage: 'JavaScript',
                    //     specialty: 'Front-end',
                    //     catchPhrase: `Don't forget the homies`
                    //   });

//-------------------------------------------------------------------------------------------------------------------------------


// Person
// First we need a Person class. This will be our base-class
// Person receives name age location gender all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props


class Person { //start
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
} //end



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


class Instructor extends Person { //start
    constructor(obj) {
        super(obj);
        this.spec = obj.spec;
        this.fLang = obj.fLang;
        this.cPhrase = obj.cPhrase;
    }

    demo(subject) {
        return (`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        return (`${student} receives a perfect score on ${subject}`)
    }
} //end




// Student
// Now we need some students!
// Student uses the same attributes that have been set up by Person
// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
// listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
// PRAssignment a method that receives a subject as an argument and logs out that the 'student.name has submitted a PR for {subject}'
// sprintChallenge similar to PRAssignment but logs out 'student.name has begun sprint challenge on {subject}'


class Student extends Person { //start
    constructor(obj) {
        super(obj);
        this.pBg = obj.pBg;
        this.cName = obj.cName;
        this.fSub = obj.fSub;
    }
    
 

    listSubjects() {
        // forEach((x) => console.log(x));

        // for (let i=0; i < this.fSub.length; i++) {
        //   return this.fSub[i];
        // } 

        return this.fSub.join();

        // listSubjects() {
        //     this.map(() => this.fSub[i]);
        // }
    }

    
      
    
      
    PRAssignment(subject) {
        return (`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        return (`${this.name} has begun sprint challenge on ${subject}`);
    }

}//end






// Project Mananger
// Now that we have instructors and students, we'd be nowhere without our PM's
// ProjectManagers are extensions of Instructors
// ProjectManagers have the following uniqe props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean
// ProjectManangers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out '{name} debugs {student.name}'s code on {subject}'


class ProjectManagers extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(sName, subject) {
        return `${this.name} debugs ${sName}'s code on ${subject}`
    }
}



//--------------------------------------CREATE OBJECTS HERE-------------------------------------------------//

//Instructors
// Instructor has the following unique props:
// spec what the Instructor is good at i.e. 'redux'
// fLang i.e. 'JavaScript, Python, Elm etc.'
// cPhrase i.e. Don't forget the homies

//1

const timmy = new Instructor({
    name: 'Timmy',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    fLang: 'JavaScript',
    spec: 'Front-End',
    cPhrase: 'Don\'t forget the homies'
});

//2

const craig = new Instructor({
    name: 'Craig',
    location: 'Orlando',
    age: 28,
    gender: 'male',
    fLang: 'PHP',
    spec: 'Back-End',
    cPhrase: 'WA WA WA WA WA'
});

//3 

const frank = new Instructor({
    name: 'Frank',
    location: 'Philly',
    age: 56,
    gender: 'male',
    fLang: 'CSS',
    spec: 'Front-End',
    cPhrase: 'alksjdlaksjdalksdjalksdjalskdjasldkjasldkjas'
});



//student 
//Student has the following unique props:
// pBg i.e. what the Student used to do before Lambda School
// cName i.e. CS132
// fSub. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']

//1
const steve = new Student({
    name: 'Steve',
    location: 'L.A.',
    age: 21,
    gender: 'male',
    pBg: 'McDonalds',
    cName: 'cspt2',
    fSub: ['HTML', 'CSS', 'JavaScript']
});

//2
const taylor = new Student({
    name: 'Taylor',
    location: 'Houston',
    age: 24,
    gender: 'male',
    pBg: 'IT Tech Support',
    cName: 'cspt3',
    fSub: ['HTML', 'CSS']
});


//3
const miranda = new Student({
    name: 'Miranda',
    location: 'Houston',
    age: 24,
    gender: 'female',
    pBg: 'Sonic',
    cName: 'cspt3',
    fSub: ['HTML', 'CSS', 'PHP']
});



//Project Managers
// ProjectManagers have the following uniqe props:
// gradClassName: i.e. CS1
// favInstructor: i.e. Sean

//1
const tammy = new ProjectManagers({
    name: 'tammy',
    location: 'Virginia',
    age: 29,
    gender: 'female',
    fLang: 'JavaScript',
    spec: 'Front-End',
    cPhrase: 'LEEEEEEEEEEEEEEROYYYYYYYYYYYYY JENKINS',
    gradClassName: 'CS1',
    favInstructor: 'Steve'
});


//2
const karen = new ProjectManagers({
    name: 'Karen',
    location: 'New York',
    age: 27,
    gender: 'female',
    fLang: 'PHP',
    spec: 'Back-End',
    cPhrase: 'NOOOOOOOOOOOOOOODLE',
    gradClassName: 'CS1',
    favInstructor: 'Steve'
});



//-------------------------------TEST THAT IT BUILDS OBJECTS PROPERLY---------------------------------------------

console.log(timmy)
console.log(craig)
console.log(frank)
console.log(steve)
console.log(taylor)
console.log(tammy)
console.log(karen)


//------------------------------------CONSOLE LOG TESTS------------------------------------------------------------

// Person receives speak as a method.
// This method logs out a phrase 'Hello my name is Fred, I am from Bedrock' where name and location are the object's own props
//test speak
console.log(timmy.speak());
console.log(taylor.speak());
console.log(karen.speak());



// Instructor has the following methods:
// demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
// grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'   

//demo
console.log(timmy.demo('Javascript'));
console.log(craig.demo('PHP'));
console.log(frank.demo('CSS'));


//grade 

console.log(timmy.grade('Tyler', 'Javascript'));
console.log(craig.grade('kevin', 'PHP'));
console.log(frank.grade('veronica', 'CSS'));




// Student has the following unique props:
// previousBackground i.e. what the Student used to do before Lambda School
// className i.e. CS132
// favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']


//List Subjects
console.log(steve.listSubjects());
console.log(taylor.listSubjects());
console.log(miranda.listSubjects());


//PRAssignment
console.log(steve.PRAssignment('Javascript'));
console.log(taylor.PRAssignment('CSS'));
console.log(miranda.PRAssignment('PHP'));


//sprintChallenge
console.log(steve.sprintChallenge('Javascript'));
console.log(taylor.sprintChallenge('CSS'));
console.log(miranda.sprintChallenge('PHP'));



// ProjectManangers have the following Methods:
// standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
// debugsCode a method that takes in a student object and a subject and logs out '{name} debugs {student.name}'s code on {subject}'

//standUp
console.log(tammy.standUp('Javascript'));
console.log(karen.standUp('CSS'));

//debugsCode

console.log(tammy.debugsCode('Taylor', 'Javascript'));
console.log(karen.debugsCode('Kyle' ,'CSS'));
