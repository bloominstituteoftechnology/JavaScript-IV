class Person {
    constructor(PERattributes) {
        this.name = PERattributes.name;
        this.age = PERattributes.age;
        this.location = PERattributes.location;
        this.gender = PERattributes.gender;
    }
    speak() {console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(INSattributes) {
        super(INSattributes);
        this.specialty = INSattributes.specialty;
        this.favLanguage = INSattributes.favLanguage;
        this.catchPhrase = INSattributes.catchPhrase;
    }
    demo(subject) {console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(PERattributes) {
        super(PERattributes);
        this.previousBackground = PERattributes.previousBackground;
        this.className = PERattributes.className;
        this.favSubjects = PERattributes.favSubjects;
    }
    listsSubjects() {this.favSubjects.forEach(item => console.log(item))
    }
    PRAssignment(subject) {console.log (`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {console.log (`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(PMattributes) {
        super(PMattributes);
        this.gradClassName = PMattributes.gradClassName;
        this.favInstructor = PMattributes.favInstructor;
    }
    standUp(channel) {console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode(student, subject) {console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const Josh = new Instructor ({
    name: 'Josh',
    age: '35',
    location: 'WestCoast',
    gender: 'M',
    specialty: 'Lambda',
    favLanguage: 'JavaScript',
    catchPhrase: '5 minute break'
})
const Ryan = new Instructor ({
    name: 'Ryan',
    age: '34',
    location: 'Somewhere',
    gender: 'M',
    specialty: 'FSW',
    favLanguage: 'Unknown',
    catchPhrase: 'Okay'
})
const Jacob = new Student ({
    name: 'Jacob',
    age: '29',
    location: 'Atlanta',
    gender: 'M',
    previousBackground: 'Food Service',
    className: 'FSW16',
    favSubjects: ['CSS', 'HTML', 'JavaScript']
})
const LambdaJoe = new Student ({
    name: 'Joe',
    age: '25',
    location: 'Lambda',
    gender: 'M',
    previousBackground: 'Landscaper',
    className: 'FSW15',
    favSubjects: ['C++', 'Python', 'Java']
})
const Lavon = new ProjectManager ({
    name: 'Lavon',
    age: 'Unknown',
    location: 'WestCoast',
    gender: 'F',
    specialty: 'Helping Students',
    favLanguage: 'All Of Them',
    catchPhrase: 'Hi guys'
})
const PMJean = new ProjectManager ({
    name: 'Jean',
    age: '38',
    location: 'Alaska',
    gender: 'F',
    specialty: 'Reading too fast',
    favLanguage: 'Python',
    catchPhrase: 'Hurry up'
})



PMJean.speak()
Josh.demo('CSS')
Ryan.grade(LambdaJoe, 'HTML')
Jacob.listsSubjects()
Jacob.PRAssignment('JavaScript')
Jacob.sprintChallenge('JavaScript')
PMJean.standUp('channel')
Lavon.debugsCode(LambdaJoe,'C++')

