
// ------------------------------------- Classes ------------------------------------- 

class Person {
    constructor(pAtts){
        this.name = pAtts.name;
        this.age = pAtts.age;
        this.location = pAtts.location;
        this.gender = pAtts.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructors extends Person {
    constructor(iAtts){
        super(iAtts);
        this.specialty = iAtts.specialty;
        this.favLanguage = iAtts.favLanguage;
        this.catchPhrase = iAtts.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect store on ${subject}`;
    }
}


class Students extends Person {
    constructor(sAtts){
        super(sAtts);
        this.previousBackground = sAtts.previousBackground;
        this.className = sAtts.className;
        this.favSubjects = sAtts.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(function(subject) {
            return subject;
        });
        }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructors {
    constructor(pmAtts){
        super(pmAtts);
        this.gradClassName = pmAtts.gradClassName;
        this.favInstructor = pmAtts.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// ------------------------------------- Student Objects ------------------------------------- 


const leighAnn = new Students({
    name: 'Leigh-Ann',
    age: 28,
    location: 'Arlington',
    gender: 'F',
    previousBackground: true,
    className: 'FSW16',
    favSubjects: [
        'CSS',
        'IoT',
        'JavaScript'
    ],
});

const jeff = new Students({

});

const jordann = new Students({

});

// ------------------------------------- Instructor Objects ------------------------------------- 

const saron = new Instructors({

});

const tyler = new Instructors({

});

// ------------------------------------- PM Objects ------------------------------------- 

const ali = new ProjectManagers({

});

const veni = new ProjectManagers({

});

console.log(leighAnn);
console.log(leighAnn.listsSubjects());
console.log(leighAnn.PRAssignment('React'));
console.log(leighAnn.sprintChallenge('Computer Science'));
