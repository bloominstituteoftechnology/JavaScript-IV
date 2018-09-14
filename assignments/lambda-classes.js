// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name =  attributes.name;
        this.age =  attributes.age;
        this.location =  attributes.location;
        this.gender =  attributes.gender;
        attributes.speak = function(){
            return `Hellow my name is ${this.name}, I am from ${this.location}.`;
        }
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage =  instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
        instructorAttributes.demo = function(subject){
            console.log(`Today we are learning about ${subject}`);
        };
        instructorAttributes.grade =  function(student, subject){
            console.log(`${student.name} receives a perfect score on ${subject}`);
        }
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = [studentAttributes.favSubjects];

        studentAttributes.listsSubjects = function () {
            this.favSubjects.forEach(function (subject){
                    console.log(subject);
                });

        };
        studentAttributes.PRAssignment = function(subject){
            console.log(`${Student.name} has submitted a PR for ${subject}`);
        };
        studentAttributes.sprintChallenge = function(subject){
            console.log(`${Student.name} has begun sprint challenge on ${subject}`);
        }
    }
}