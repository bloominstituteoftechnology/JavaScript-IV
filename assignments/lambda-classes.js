// CODE here for your Lambda Classes
class person{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${name}, I am from ${location}.`
    }
}

class insturctor extends person{
    constructor(insAttr){
        super(insAttr)
        this.specialty = insAttr.specialty
        this.favLanguage = insAttr.favLanguage
        this.catchPhrase = insAttr.catchPhrase
    }
    
    demo(){
        return `Today we are learning about ${subject}.`
    }
    
    grade(student){
        return `${student} receives a perfect score on ${subject}`
    }
}

class student extends person{
    constructor(stdAttr){
        super(stdAttr)
        this.className = stdAttr.className
        this.favSubject = stdAttr.favSubject
        this.previousBackground = stdAttr.previousBackground
    }
    listsSubjects(){

    }
    sprintChallenge(subject){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
    prAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`
    }
}

class projectManager extends insturctor{
    constructor(pmAttr){
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName
        this.favInstructor = pmAttr.favInstructor
    }
    
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​`
    }

    debugsCode(student){
        return `${this.name} debugs ${student.name}'s code on ${student}`
    }
}

