// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age=attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    greet () {
        return 'Hello my name is Fred, I am from Bedrock'
    }
} // parent

class Instructor extends Person {
    construcor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLangauge = instructorAttributes.favLangauge;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${this.subject}`;
    }
    grade (subject, "subject") {
       return  `${student.name} receives a perfect score on {subject}`;
    }
} //instructor
 class Student extends Instructor {
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
 class Project_Manager extends Student {

 }

