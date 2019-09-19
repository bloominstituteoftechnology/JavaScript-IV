// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
    this.name = attributes.name,
    this.age = attributes.age,
    this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(InstructorAttributes){
    super(InstructorAttributes);
    this.specialty = InstructorAttributes.specialty,
    this.favLanguage = InstructorAttributes.favLanguage,
    this.catchPhrase = InstructorAttributes.catchPhrase
    }
    demo(_subject){
        return `Today we are learning about ${this.subject}`
    }
    grade(_student, _object){
        return `${this.student.name} receives a perfect score on ${this.subject}`;
    }



}

class Student extends Instructor{
    constructor(StudentAttributes){
    super(StudentAttributes);   
    this.previousBackground = StudentAttributes.previousBackground,
    this.className = StudentAttributes.className,
    this.favSubjects = StudentAttributes.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
    PRAssignment(_name, _subject){
        return `${this.student.name} has submitted a PR for ${this.subject}`;
    }


}







}

class ProjectManager extends Student{
    constructor(ProjectManagerAttributes){
    super(ProjectManagerAttributes);



    }





}

