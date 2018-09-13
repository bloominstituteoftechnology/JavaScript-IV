// CODE here for your Lambda Classes
class Person {
    constructor(personInfo){
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
    }// methods go here:
        speak(){
    returns `Hello, my name is ${this.name}, I am from ${this.location}`;
}
} // End Person class

class Instructor extends Person {
    constructor(instructorInfo){
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }// Methods go here:
        demo(subject){
            return `Today we are learning about ${subject}`;
        };

        grade(student, subject){
            return `${student.name} receives a perfect score on ${subject}`;
        }
}// End Instructor Class

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }// Methods go here:
        listsSubjects(){
            let list = this.favSubjects;
            list.forEach(element => {console.log(element)});
        }
    
        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}`;
        }
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`;
        }
}// End Student Class

class ProjectManagers extends Instructor{
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }// Methods go here:
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}// End ProjectManagers Class



// My Objects

const Josh = new Instructor({
    name: 'Josh',
    location: 'Zoom',
    age: 'lvl 9,000',
    gender: 'male',
    favLanguage: 'Elvish',
    specialty: 'Teaching',
    catchPhrase: 'I INVOKE YOU!'
});

const breakJosh = new Instructor({
    name: 'Break Josh',
    location: 'Zoom',
    age: 'Old enough',
    gender: 'male',
    favLanguage: 'Banjo',
    specialty: 'Shredding it on the Banjo',
    catchPhrase: 'Alright, come on back to your computer'
});

const hunter = new Student ({
    name: 'Hunter Smith',
    location: 'His mom\'s basement',
    age: 23,
    gender: 'male',
    previousBackground: 'Locksmith',
    className: 'FSW14',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const kam = new ProjectManagers ({
    name: 'Kam',
    location: 'the tetons',
    age: 'unknown',
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Fixing Problems',
    catchPhrase: 'Alright, let\'s do reverse alphabetical today',
    gradClassName: 'CS3monthsbeforemine',
    favInstructor: 'Podcasts'
});



//================= Method Testing ============================

//student methods
hunter.listsSubjects();
console.log(hunter.PRAssignment('prototypes'));
console.log(hunter.sprintChallenge('constructors'));

//PM methods
console.log(kam.standUp('fsw14_kam'));
console.log(kam.debugsCode(hunter, 'JavaScript arrays'));


//Instructor methods
console.log(breakJosh.demo('inheritance'));
console.log(breakJosh.grade(hunter, 'JavaScript Sprint Challenge'));



console.log(breakJosh.catchPhrase);
console.log(Josh.catchPhrase);
console.log(kam.catchPhrase);