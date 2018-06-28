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
 }

 class Student extends Person {
     constructor(args){
         super(args);
         this.previousBackground = args.previousBackground;
         this.className = args.className;
         this.listSubjects = args.subjects;
         this.PRAssignment = args.PRAssignment;
     }
     listSubjects(){
         return ``
        //  return `${this.name} `
     }
 }