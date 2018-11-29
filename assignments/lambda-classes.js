// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(instructorInfo){
        super(instructorInfo);
        
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
     }
  
     demo(subject){
        return `Today we learned about ${subject}.`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }

}

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    listSubjects(){
        console.log(this.favSubjects);
    }

    PRAssignment(subject){
console.log(`${student.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject){
        console.log(`${studnet.name} has begun sprint challenge on ${subject}.`)
    }
}

const Estevan = new Person({
    name : 'Estevan',
    age: '22',
    location: 'Riverside'

});

//Estevan.speak();


