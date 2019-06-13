// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${name}, I am from ${location}.`
    }
}

class Insturctor extends Person{
    constructor(insAttr){
        super(insAttr)
        this.specialty = insAttr.specialty
        this.favLanguage = insAttr.favLanguage
        this.catchPhrase = insAttr.catchPhrase
    }
    
    demo(){
        return `Today we are learning about ${subject}.`
    }
    
    grade(Student){
        return `${Student} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(stdAttr){
        super(stdAttr)
        this.className = stdAttr.className
        this.favSubject = stdAttr.favSubject
        this.previousBackground = stdAttr.previousBackground
    }

    listsSubjects(){
        return favSubject.array.forEach() 
    }

    sprintChallenge(Student, subject){
        return `${Student.name} has begun sprint challenge on ${subject}`
    }

    prAssignment(Student, subject){
        return `${Student.name} has submitted a PR for ${subject}`
    }
}

class ProjectManager extends Insturctor{
    constructor(pmAttr){
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName
        this.favInstructor = pmAttr.favInstructor
    }
    
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​`
    }

    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
    }
}

const john = new Instructor({
  name: 'John',
  location: 'Portland',
  age: 43,
  favLanguage: 'C++',
  specialty: 'Back-end',
  catchPhrase: `Winter is Coming`
});