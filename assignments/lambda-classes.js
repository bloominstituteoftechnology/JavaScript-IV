// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age=attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    greet () {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
} // parent

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLangauge = instructorAttributes.favLangauge;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${this.subject}`;
    }
    grade (student, subject) {
       return  `${student.name} receives a perfect score on {subject}`;
    }
} //instructor
 class Student extends Person {
     constructor (studentAttributes) {
         super(studentAttributes);
         this.previousBackground = studentAttributes.previousBackground;
         this.className = studentAttributes.className;
         this.favSubjects = studentAttributes.favSubjects;
     }
     listsSubjects () {
         return this.favSubjects;
     }
     PRAssignment (subject) {
return "student.name has submitted a PR for {subject}";
     }
     
 } //students
 class Project_Manager extends Person {
constructor (project_managerAttributes){
    super(project_managerAttributes);
    this.gradClassName = project_managerAttributes.gradClassName;
    this.favInstructor= project_managerAttributes.favInstructor;
}
standUp (slack_channel) {
    return `${name} announces to ${channel}, @channel standup times!`
}
debugsCode (student, subject) {
    return `${name} debugs ${student.name}'s code on {subject}`
}
 }
 const steverogers = new Instructor({
    name: "Steve",
    age: 30,
    location: 'NY',
    faction: 'Mage Guild',
    gender: "Male",
    specialty: 'redux',
    favLanguage: "CSS",
    catchPhrase: "No man left behind"
  });
 console.log(steverogers.age)
  console.log(steverogers.greet());
//  console.log(brian.standup('cs11'));
//  console.log(chang.grade(troy, "science"))
//  console.log(chang.grade(troy, "science"))
//  console.log(troy.PRAssignment("JavaScript"))
//  console.log(troy.speak());
//  console.log(brian.debugsCode(troy, "JavaScript"))
//  console.log(abed.listsSubjects())
//  console.log(troy.sprintChallenge("JavaScript"))
