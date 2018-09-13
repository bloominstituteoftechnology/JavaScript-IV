// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hellow my ${this.name}, I am from ${this.location}`);
    }
}
class Instructor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = "React and Redux";
        this.favLanguage = "JavaScript";
        this.catchPhrase = "Don't forget the homies"
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}