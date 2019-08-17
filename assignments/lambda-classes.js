// CODE here for your Lambda Classes
class Person{
    constructor(atrrs){
        this.name = atrrs.name;
        this.age = atrrs.age;
        this.location = atrrs.location;
    }
    speak(){
        return `hello my name is ${this.name}, i am from ${this.location}.`;
    }
};

const Clint = new Person({
    name:'Clint',
    age:19,
    location:'new york'
})

const Val = new Person({
    name:'Val',
    age:22,
    location:'New Mexico'
})
//=====================================================================================================================


class Instructor extends Person{
    constructor(inAtrrs){
        super(inAtrrs);
        this.specialty = inAtrrs.specialty;
        this.favLanguage = inAtrrs.favLanguage;
        this.catchPhrase = inAtrrs.catchPhrase;
    }
    demo(subject){
     return `today we are learning about ${subject}. `;
        }
        grade(student, subject){
            return `${student.name} receives a perfect score on ${subject}.`;
        }
}

const Ellie = new Instructor({
    name: "Ellie",
    age: 35,
    location:'utah',
    favLanguage: 'java',
    catchPhrase:'math is cool',
    subject:'java'
});
//=====================================================================================================================


class TeamLead extends Instructor{
    constructor (teamAtrrs){
        super(teamAtrrs);
        this.gradClassName = teamAtrrs.gradClassName;
        this.favInstructor = teamAtrrs.favInstructor;
        }
        standup(TL, channel){
            return `${TL.name} announces to ${channel} @ channel standy times!`;
            }
            debugscode(TL, student, subject){
             return `${TL.name} debugs ${student.name}'s code on ${subject}.`;
            }
};

const Charles = new TeamLead({
    name:'Charles',
    age:32,
    location:'Oklahoma',
    favLanguage: 'html',
    catchPhrase: 'peace',
    gradClassName: 'webpt9',
    favInstructor: 'josh knell'
})

//=====================================================================================================================


class Student extends Person{
    constructor(stuAttrs){
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
    }

    listSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignments(Student, subject){
        return `${Student.name} has submitted a PR for ${subject}`;

    }
    sprintChallenge(Student, subject){
        return `${Student.name} has begun their sprint challenge on ${subject}`;
    }
}

const Josh = new Student({
    name:'Josh',
    age:25,
    location:'Utah',
    previousBackground:'delivery driver',
    className:'webpt9',
    favSubjects:'reading, science, html,css, java  '
});







console.log(Clint.speak());
console.log(Charles.standup(Charles, "webpt9"));
console.log(Ellie.demo('css'));
console.log(Josh.listSubjects());
console.log(Josh.sprintChallenge(Josh, 'css'));
console.log(Josh.previousBackground);
console.log(Val.speak());
