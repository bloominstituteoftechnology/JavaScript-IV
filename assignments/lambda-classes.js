// CODE here for your Lambda Classes
class Person{
    constructor(personInfo){
        this.name=personInfo.name;
        this.age=personInfo.age;
        this.location=personInfo.location;
        this.gender=personInfo.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name} and I'm from ${this.location}`);
    }
}

const bob={
name:'bob',
age:"24",
location:"cincinnati",
gender:"m",
}

let bobAnswer=new Person(bob);
bobAnswer.speak();

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
        console.log(`${student.name} gets a perfect grade in a${subject}`);
    }
    changeGrade(student){
        student.grade=student.grade +Math.floor((Math.random()*10));
    }
}

const instructorOne={
    name:'roger',
    age:"37",
   location:"France",
   gender:"m",
   specialty:"redux",
   favLanguage:"javascript",
   catchPhrase:"yabba dabba doo",
}

const instructorOneAnswer=new Instructor(instructorOne);
console.log(instructorOneAnswer);
instructorOneAnswer.demo("math");


class Student extends Person{
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground=studentInfo.previousBackground;
        this.className=studentInfo.className;
        this.favSubjects=studentInfo.favSubjects;
        this.grade=studentInfo.grade;
    }
    listsSubjects(){
        this.favSubjects.forEach(function (item){
            console.log(item);
        });
        }
    PRAssignment(subject){
        console.log(`${this.name} submitted a PR request for subject ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun a sprint challenge for ${subject}`)
    }
    graduate(){
        if(this.grade<70) {console.log(`Your grade is ${this.grade} better do some more work!`)

    }else{console.log("congrats you passed!")}}

    };

    const susan={
        name:'susan',
        age:"63",
       location:"New York City",
       gender:"f",
       previousBackground:"soccer coach",
       className:"CSPT3",
       favSubjects:["lunch","recess","spelling"],
       grade:1,
    }

    const susanAnswer=new Student(susan);
    console.log(susanAnswer);
    susanAnswer.listsSubjects();
    susanAnswer.PRAssignment("math");
    susanAnswer.sprintChallenge("math");

    instructorOneAnswer.grade(susanAnswer, "math");

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

const captainAmerica={
    name:'Steve Rogers',
    age:"100",
   location:"unknown",
   gender:"m",
   specialty:"shield",
   favLanguage:"fists",
   catchPhrase:"do the right thing",
   gradClassName:"CS1",
   favInstructor:"Dan Frehner"
}
const captainAmericaAnswer=new ProjectManager(captainAmerica);
captainAmericaAnswer.standUp("#random");
captainAmericaAnswer.debugsCode(susanAnswer,"math");