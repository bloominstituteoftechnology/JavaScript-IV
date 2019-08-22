// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.newName = attributes.newName
        this.newAge = attributes.newAge
        this.newLocation = attributes.newLocation
    }
    speak(){
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}` 
    }
}

class Instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.newSpecialty = redux
        this.newFavLanguage = Javascript
        this.newCatchPhrase = Ehhhh
    }
    demo(){
        return `Today we are learning about ${subject}`  //Need to add a subject string as an argument
    }
    grade(){
        return `${student.name} receives a perfect score on {subject}`  //Need to add student as an object and a subject string as arguments
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = McDonalds
        this.className = Web23
        this.favSubjects = HTML
    }
    listsSubjects(){  //need a method that logs out all of the student's favoriteSubjects one by one

    }
    PRAssignment(){  //need a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}

    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor{
    constructor(ProjectManagersAttritubes){
        super(ProjectManagersAttritubes);
        this.gradClassName = Web20
        this.favInstructor = Steven
    }
    standUp(){
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(){
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
}