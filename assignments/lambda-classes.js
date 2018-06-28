// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age= props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        console.log (`Hello my name is ${this.name}, I amd from ${this.location}`);
    };
}



class Instructor extends Person {
    constructor(iprops){
        super(iprops);
        this.specialty = iprops.specialty;
        this.favLanguage = iprops.favLanguage;
        this.catchPhrase = iprops.catchPhrase;
    }

    demo(subject){
        console.log (`Today we are learning about ${subject}`);
    }
    grade(student , subject){
        console.log (`${student.name} receives a perfect score on ${subject}`);
    }
}



class Student extends Person {
    constructor(sprops){
        super(sprops);
        this.previousBackground = sprops.previousBackground;
        this.className = sprops.className;
        this.favSubjects = sprops.favSubjects;
    }
    listSubjects(){
        console.log(`${this.favSubjects}`)
    };
    PRAssignments(subject){
        console.log (`${this.name} has submitted a PR for ${subject}`);
    };

    sprintChallenge(subject){
        console.log (`${this.name} has begun sprint challenge on ${subject}`);
    };
}


class ProjectManager extends Instructor{
    constructor(pmprops){
        super(pmprops);
        this.gradClassName = pmprops.gradClassName;
        this.favInstructor = pmprops.favInstructor;
    }
standUp(channel){
console.log(`${this.name} announces to ${channel}, @${channel} standby times! `)
}

debugsCode(student,subject) {
    console.log (`${this.name} debugs ${student.name}'s code on ${subject}`);

};
}


const jimbo = new Person ({
    name : "Jimbo",
    age: 45,
    location: "Boston",
    gender: 'GQ',
})
jimbo.speak()


const naaz = new Student ({
    name : "naaz",
    age: 30,
    location: "Boston",
    gender: 'GQ',
    previousBackground: 'Business',
    className: 'cs12',
    favSubjects: 'somestuff, morestuff, catstuff',
})
naaz.listSubjects()
naaz.PRAssignments('cc')
naaz.sprintChallenge('JS')



const josh = new Instructor ({
    name : "Josh",
    age: 40,
    location: "cali",
    gender: 'M',
    specialty: 'tech',
    favLanguage: 'JS',
    catchPhrase: 'Its not magic',
})
josh.demo('js')
josh.grade(naaz,'js')


const nate = new ProjectManager ({
    name : "NateDawg",
    age: 13,
    location: "boonies",
    gender: 'M',
    specialty: 'games',
    favLanguage: 'JS',
    catchPhrase: 'scope is like a limo',
    gradClassName: 'CS4?',
    favInstructor: "Josh",
})

nate.standUp('cs12_nate');
nate.debugsCode(naaz,'js')