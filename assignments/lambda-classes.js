// CODE here for your Lambda Classes
class Person{
    constructor(personInfo){
        this.name=personInfo.name;
        this.age=personInfo.age;
        this.location=personInfo.location;
        this.gender=personInfo.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name} and I'm from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(instructorInfo){
        super(instructorInfo);
        this.specialty=instructorInfo.specialty;
        this.favLanguage=instructorInfo.favLanguage;
        this.catchPhrase=instructorInfo.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student} gets a perfect grade in a${subject}`);
    }
}


class Student extends Person{
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground=studentInfo.previousBackground;
        this.className=studentInfo.className;
        this.favSubjects=studentInfo.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(function (item){
            console.log(item);
        });
        }
    PRAssignment(subject){
        console.log(`${this.name} submitted a PR request for subject ${subject}`)
    }
    sprintChallenge(suject){
        console.log(`${this.name} has begun a sprint challenge for ${subject}`)
    }

    };

class ProjectManager extends Instructor{
    constructor(pmInfo){
        super(pmInfo);
        this.gradClassName=pmInfo.gradClassName;
        this.favInstructor=pmInfo.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel} the standup times`);
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s project on ${subject}`)

    }
}

