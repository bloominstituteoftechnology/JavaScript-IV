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
        this.newSpecialty = instructorAttributes.specialty
        this.newFavLanguage = instructorAttributes.favLanguage
        this.newCatchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`  //Need to add a subject string as an argument
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on {subject}`  //Need to add student as an object and a subject string as arguments
    }
}

class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground
        this.className = studentAttributes.className
        this.favSubjects = studentAttributes.favSubjects
    }
    listsSubjects(){  //need a method that logs out all of the student's favoriteSubjects one by one

    }
    PRAssignment(){  //need a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
        return `${student.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(){
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManagers extends Instructor{
    constructor(ProjectManagersAttritubes){
        super(ProjectManagersAttritubes);
        this.gradClassName = ProjectManagersAttritubes.gradClassName
        this.favInstructor = ProjectManagersAttritubes.favInstructor
    }
    standUp(){
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student){
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
}

const Steve = new Person({
    name: 'Steve',
    age: 41,
    location: 'Seattle',
})

const Brit = new Instructor({
    specialty: 'teaching',
    favLanguage: 'JavaScript',
    catchPhrase: 'Ehhhh',
})

const Skippy = new Student({
    previousBackground: 'McDonalds',
    className: 'Web23',
    favSubjects: 'HTML',
})

const Tyler = new ProjectManagers({
    gradClassName: 'Web1',
    favInstructor: 'Shanaynay',
})
