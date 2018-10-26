// CODE here for your Lambda Classes
class person {
    constructor(baseClass){
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
        this.gender = baseClass.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class instructor extends person{
    constructor(instructorProps){
        super(instructorProps)
        this.specialty = instructorProps.specialty;
        this.favLanguage = instructorProps.favLanguage;
        this.catchPhrase = instructorProps.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning ${subject}`)
    }
    grade(student, subject ){
        console.log(`${student.name} recieves a perfect score on ${subject}`)
    }
}
class student extends person{
    constructor(studentProps){
        super(studentProps);
        this.previousBackground = studentProps.previousBackground;
        this.className = studentProps.className;
        this.favSubjects = studentProps.favSubjects;
        this.listsSubjects = studentProps.listsSubjects;
    }
    PRAssignment(subject){
        console.log(`${student.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${student.name} has begun a sprint challenge on ${subject}`);
    }
}
class projectManager extends instructor{
    constructor(projectManagerProps){
        super(projectManagerProps)
        this.gradClassName = projectManagerProps.gradClassName;
        this.favInstructor = projectManagerProps.favInstructor;
    }
    standUp(channel){
        console.log(`${projectManager.name} announces to ${channel}, @channel standy times!`);
    }
} 