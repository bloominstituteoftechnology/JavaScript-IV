// CODE here for your Lambda Classes
class Person{
    constructor(personAttribute){
        this.name=personAttribute.name;
        this.age=personAttribute.age;
        this.location=personAttribute.location;
        this.gender= personAttribute.gender;
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
        var plusOrMinus=0;
            if(Math.random()>0.5){
                plusOrMinus= -1;
            }
            else{
                plusOrMinus= 1;
            }
        const randomScore= Math.floor((Math.random()*100)*plusOrMinus);
        student.grade= student.grade+randomScore;
        return student.grade;
    }

}

class Student extends Person{
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground= studentAttr.previousBackground;
        this.className= studentAttr.className;
        this.favSubjects= studentAttr.favSubjects;
        this.grade=Math.floor(Math.random()*100);
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
    graduate(Instructor){
       while(this.grade<70){
           Instructor.gradeAssignment(this);
           console.log('SCORE TOO LOW')
           console.log(`${Instructor.name} give ${this.name} more assignments to do`);
       }
        return `${this.name} graduated. Job offers comming`;   
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
const newStudent = new Student({
    favSubjects: ['math','history','physics'],
    name: 'Bruce',
    previousBackground:'electrical engineering',
    className: 'FSW14',
    age: 26,
    location: 'Washington DC',
    gender:'male',
    grade:60
  });
  const newInstructor = new Instructors({
    favSubjects: ['JavaScript','Python','C#'],
    name: 'Josh',
    catchPhrase:'alllrightttt...come on back',
    specialty: 'teaching',
    age: 26,
    location: 'Where is Josh from again?',
    gender:'male'
  });
console.log(newStudent.speak());
console.log(newInstructor.speak());
console.log(newStudent.grade);
console.log(newStudent.graduate(newInstructor));