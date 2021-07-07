class Instructors extends Person{
    constructor (attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`)
    }
    grade(subject){
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person{
    constructor (attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubject = attributes.favSubject;
    }
    listsSubjects(){
        console.log(this.favSubject)
    }
    PRAssignment(subject){
        console.log(`${Student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge(subject){
        console.log(`${Student.name} has begun sprint challenge on ${subject}.`)
    }
}

class PM extends Instructors{
    constructor (attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(name){
        console.log(`${name} announces to channel, @Channel stand times!`)
    }
    debugsCode(name,studentName,subject){
        console.log(`${name}debugs ${studentName}'s code on ${subject}`)
    }
}