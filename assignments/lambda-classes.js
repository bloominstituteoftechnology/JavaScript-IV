// CODE here for your Lambda Classes
class Person{
    constructor(options){   
        this.name = options.name ;
        this.age = options.age ;
        this.location = options.location;
        this.gender = options.gender;
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(params) {
        super(params);
        this.specialty   = params.specialty  ;    
        this.favLanguage = params.favLanguage;        
        this.catchPhrase = params.catchPhrase;        
    }

    demo(subject){
        console.log(`Today we are learning about ${subject} `); 
    }
    grade(student, subject){
        console.log(` ${student.name} receives a perfect score on ${subject} `); 
    }
    adjustGrade(student){
        let newGrade = Math.floor(Math.random()*40) -20;
        student.grade += newGrade;
        console.log(` ${student.name}'s grade is adjusted by ${newGrade}.  Current grade is ${student.grade} `); 

    }

}

class Student extends Person{
    constructor(params) {
        super(params);
        this.previousBackground = params.previousBackground ;     
        this.className = params.className ;     
        this.favSubjects = params.favSubjects ;    
         this.grade = Math.floor(Math.random()*100);
    }

    listsSubjects(){
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects}`);
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for  ${subject}`)
    }

    printChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on  ${subject}`)
    }

    graduate(instructor){
        if(this.grade > 70){
         console.log(`Congratulation!  You graduate`);
        }
        else {
            while(this.grade < 70) {
            console.log(`your grade is ${this.grade}.  You're grade needs to be 70 or higher to graduate`);
            instructor.adjustGrade(this);
        //  console.log(`your grade is ${this.grade}.  You're grade needs to be 70 or higher to graduate`);
            }
            console.log(`Congratulation!  You graduate`);
        }
    }
}

class ProjectManager extends Instructor{
    constructor(params) {
        super(params);
        this.gradClassName = params.gradClassName;
        this.favInstructor = params.favInstructor;
       
    }

    standUp(slack){
        console.log(`${this.name} announces to ${slack}, @${slack} standy times!`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
    
}

// const person1 = new Person({'name':'Tom', 'age':30, 'location':"USA", 'gender':"M"});
const instructor1 = new Instructor({'name':'Tom', 'age':30, 'location':"USA", 'gender':"M",'specialty':"JS", 'favLanguage':"Phthon", "catchPhrase":"Peace!"});
// console.log(instructor1);
const student1 = new Student({'name':'Jerry', 'age':10, 'location':"USA", 'gender':"M",'specialty':"none", 'favLanguage':"basic", "catchPhrase":"Party!", 'previousBackground':'kinder','className':'CS101','favSubjects':['gym','music']});
// console.log(student1);
const pm1 = new ProjectManager({'name':'Jim', 'age':50, 'location':"Utha", 'gender':"M",'specialty':"what", 'favLanguage':"French", "catchPhrase":"PROJECT!",'gradClassName':"CS1", 'favInstructor':'Jen'});
// console.log(pm1);

// instructor1.demo("Math");
// instructor1.grade(student1,'Art');
// student1.listsSubjects();
// student1.PRAssignment('eco');
// pm1.standUp('fsw14');
// pm1.debugsCode(student1, "math");

student1.graduate(instructor1);
// instructor1.adjustGrade(student1);
// instructor1.adjustGrade(student1);
// pm1.adjustGrade(student1);