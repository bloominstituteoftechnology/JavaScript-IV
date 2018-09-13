// CODE here for your Lambda Classes
class Person{
    constructor(personAttribute){
        this.name=personAttribute.name;
        this.age=personAttribute.name;
        this.location=personAttribute.name;
        this.gender= personAttribute.name;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
class Instructors extends Person{
    constructor(intAttr){
        super(intAttr);
        this.specialty=intAttr.specialty;
        this.favLanguage= intAttr.favLanguage;
        this.catchPhrase= intAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeAssignment(student){
        const plusOrMinus= function(){
            if(Math.random()>0.5){
                return -1;
            }
            else{
                return 1;
            }
        }
        student.grade= student.grade+(Math.random()*100);
    }
}
class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground= studentAttr.previousBackground;
        this.className= studentAttr.className;
        this.favSubjects= studentAttr.favSubjects;
        this.grade=Math.random()*100;
    }
    listSubjects(){
        return this.favSubjects.forEach(function(item){
            return item;
        });
    }
    PRAssigment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(Instructors){
        if(this.grade<70){
            while(this.grade <70){
                Instructors.gradeAssignment(this);
                console.log("score too low, do more assignments")
        }
        return `Re-Grading ...`;
        }
        else{
            return `Graduated`;
        }
    }
}
class ProjectManager extends Instructors{
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName=pmAttr.gradClassName;
        this.favInstructor=pmAttr.favInstructor;
    }
    standUp(slackChannel){
        return `${this.name} annouces to ${slackChannel}, @channel study times!`;
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}
