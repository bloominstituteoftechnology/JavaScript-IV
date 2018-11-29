// CODE here for your Lambda Classes
class Person{
    constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
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




