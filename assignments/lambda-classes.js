


class Person {
    constructor(baseclass) {
        this.age = baseclass.age;
        this.name = baseclass.name;
        this.location = baseclass.location;
        this.gender = baseclass.gender;
    }
    speak(){
        return `Hello my name is Fred, I am from Bedrock, where ${this.name} and ${this.location}`
    
    }
}
    
class Instructor extends Person {
    constructor(Aclass) {
        super(Aclass);
        this.speciality = Aclass.speciality;
        this.favLanguage = Aclass.favLanguage;
        this.catchPhrase = Aclass.catchPhrase;
    }
    demo(){
        return `Today we are learning about ${this.subject}`
    }
    grade (){
        return `${this.name} receives a perfect score on ${this.variables}`
    }
}

class Student extends Person {
    constructor(students){
    super(students);
    this.previousBackground = students.previousBackground;
    this.className = students.className;
    this.favSubjects = students.FavSubjects;
    }
    listsSubjects (){
        return `${this.favSubjects[0]},${this.favSubjects[1]},${this.favSubjects[2]}`
    }
    PRAssignment (){
        `${student.name} has submitted a PR for ${subject}`
    }
    sprintchallenge (){
        `${student.name} has begun spring challenge on ${subject}`}
    }





