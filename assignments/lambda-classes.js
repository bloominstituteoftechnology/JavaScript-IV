// CODE here for your Lambda Classes
/**
 * Person: name, age, location, gender; speak('')
 * ** Instructor: specialty, favLang, catchphrase; demo(), grade()
 * 
 * 
 */

 class Person {
     constructor(args){
        this.age = args.age;
        this.name = args.name;
        this.location = args.location;
        this.gender = args.gender;
     }

     speak(){
         return `Hello my name is ${this.name}, I am from ${this.location}`;
     }
 }

 class Instructor extends Person {
     constructor(args){
        super(args);
        this.specialty = args.specialty;
        this.favLanguage = args.favLanguage;
        this.catchPhrase = args.catchPhrase;
        this.subject = args.subject;
        this.student = args.student;
     }
     demo(){
         return `Today we are learning about ${this.subject}`;
     }
     grade(){
         return `${this.student.name} receives a perfect score.`;
     }
     adjustGrade(student){
         let min = Math.ceil(1), max = Math.floor(100);
         console.log(`${Math.floor(Math.random() * (max - min)) + min}`);
     }
 }

 class Student extends Instructor {
     constructor(args){
         super(args);
         this.previousBackground = args.previousBackground;
         this.className = args.className;
         this.favSubjects = args.favSubjects;
         this.grade = args.grade;
     }
     listSubjects(){
         this.favSubjects.forEach((sub)=>{
             console.log(sub);
         })
     }
     PRAssignment(){
        console.log(`${this.name} has submitted a PR for ${this.subject}`);
     }
     sprintChallenge(){
         console.log(`${this.name} has begun sprint challenge on ${this.subject}`);
     }
 }

 const erik = new Student({
    name: 'Erik', 
    subject: 'P5JS',
    favSubjects: ['html', 'js'],
    grade: 99
});

class ProjectManager extends Instructor {
    constructor(args){
        super(args);
        this.gradeClassName = args.gradeClassName;
        this.favInstructor = args.favInstructor;
        this.channel = args.channel;
    }
    standUp(){
        console.log(`${this.name} announces to ${this.channel}, @channel standy times!`);
    }
    debugsCode(){
        console.log(`${this.name} debugs ${this.student}'s code on ${this.subject}`);
        
    }
}

const ornette = new Instructor({
    name: 'Ornette'
})
console.log(erik.grade);

ornette.adjustGrade(erik.grade)

const amon = new ProjectManager({
    name: 'Amon',
    gradeClassName: 'CS12',
    favInstructor: 'Lulu Bananas',
    channel: 'HAckMastahZ',
    student: 'Erik',
    subject: 'D3JS',
})
amon.debugsCode();
// amon.standUp()