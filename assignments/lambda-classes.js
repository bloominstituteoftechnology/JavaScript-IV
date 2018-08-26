// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name ;
        this.age = obj.age ;
        this.location = obj.location ;
        this.gender = obj.gender ;

    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person {
    constructor(obj) {
        this.specialty = obj.specialty ;
        this.favLanguage = obj.favLanguage ;
        this.catchPhrase = obj.catchPhrase ;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(studentObj, subjectStr) {
        return `${studentObj.name0} recieves a perfect score on ${subjectStr}.`
    }
}

class Students extends Person {
    constructor(obj){
        this.previousBackround = obj.previousBackround ;
        this.className = obj.className ;
        this.favSubjects = obj.favSubjects ;

    }

    listsSubjects(){
        let index = obj.favSubjects.length - 1 ;
        for (let i = 0; i <= index ; i++) {
            console.log(obj.favSubjects[i]) ;
        }
    }

    PRAssignment(subjectArg){
        let pullText = `${student.name} has submitted a PR for ${subjectArg}.` ;
        console.log(pullText);
    }

    sprintChallenge(subjectArg){
        let sprintText = `${student.name} has begun sprint challenge on ${subjectArg}.` ;
        console.log(sprintText);
    }
}

class ProjectManager extends Instructor{
    constructor(obj){
        gradClassName = obj.gradClassName ;
        favInstructor = obj.favInstructor ;
    }

    standUp(slackArg){

        let standUpText = `${name} announces to ${slackArg}, @Channel stand up time!`

    }

    debugsCode(studentObj, subjectStr){
        
        debugTxtt = `${name} debugs ${student.name}${"'s"} code on ${subjectStr}.`

    }
}