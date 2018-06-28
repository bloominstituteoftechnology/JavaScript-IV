// CODE here for your Lambda Classes

class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}
class Instructor extends Person{
    constructor(teach){
        super(teach);
        this.specialty = teach.specialty;
        this.favLanguage = teach.favLanguage;
        this.catchPhrase = teach.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){

        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(learn){
        super(learn);
        this.previousBackground = learn.previousBackground;
        this.className = learn.className;
        this.favSubjects = learn.favSubjects; //array
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}
class Project_Manager extends Instructor{
    constructor(guide){
        super(guide);
        this.gradClassName = guide.gradClassName;
        this.favInstructor = guide.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standup time!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const bob = new Instructor({
    'name' : 'Bob',
    'location' : 'Arizona',
    'age' : 35,
    'gender' : 'male',
    'favLanguage' : 'C++',
    'catchPhrase' : 'Yoyoyo',
})

const alice = new Student({
    'name' : 'Alice',
    'location' : 'New York',
    'age' : 28,
    'gender' : 'female',
    'previousBackground' : 'paralegal',
    'className' : 'CS11',
    'favSubjects' : ['python' , 'ruby' , 'c#']  
})

const pamela = new Project_Manager({
    'name' : 'Pamela',
    'location' : 'Michigan',
    'age' : 41,
    'gender' : 'female',
    'gradClassName' : 'CS3',
    'favInstructor' : 'Ryan',
})
const mary = new Instructor({
    'name' : 'Mary',
    'location' : 'Alabama',
    'age' : 48,
    'gender' : 'female',
    'catchPhrase' : 'Howdy\'dowdy',
    'favLanguage' : 'Java',
})
const james = new Student({
    'name' : 'James',
    'location' : 'Alaska',
    'age' : 24,
    'gender' : 'male',
    'previousBackground' : 'car salesman',
    'className' : 'CS11',
    'favSubjects': ['c++' , 'javascript', 'html']  
})
const thomas = new Project_Manager({
    'name' : 'Thomas',
    'location' : 'Nebraska',
    'age' : 35,
    'gender' : 'male',
    'gradClassName' : 'CS5',
    'favInstructor' : 'Mary',
})
// person: name, age, location, gender, speak()
// instructor: specialty, favLanguage, catchPhrase, demo(), grade ()
// student: previousBackground, className, favSubjects, listsSubjects(), PRAssignment(), sprintChallenge()
// project_manager: gradClassName, favInstructor, standUp(), debugsCode()

console.log(james.name)
console.log(james.listsSubjects())
console.log(mary.grade(james, 'python'))
console.log(alice.PRAssignment('java'))
console.log(bob.speak())
console.log(thomas.speak())
console.log(mary.demo('c++'))
console.log(alice.sprintChallenge('c#'))
console.log(pamela.standUp('channel2'))
console.log(pamela.debugsCode(alice,'javascript'))





// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.