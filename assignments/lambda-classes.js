// CODE here for your Lambda Classes
class Person {
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak(){
        // console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructorAttr){
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){ //receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        // console.log(`Today we are learning about ${subject}`)
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){ //receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(projectMgrAttr){
        super(projectMgrAttr);
        this.gradClassName = projectMgrAttr.gradClassName;
        this.favInstructor = projectMgrAttr.favInstructor;
    }
    standUp(channel){ //a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
        return `${this.name} announces to ${channel}, @channel standby times!`
    }
    debugsCode(student, subject){ //a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

class Students extends Person {
    constructor(studentAttr){
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listSubjects(favSubjectsArr){ //a method that logs out all of the student's favoriteSubjects one by one.
        return `${this.name}'s favorite subjects are ${favSubjectsArr[0]}, ${favSubjectsArr[1]}, ${favSubjectsArr[2]}`;
    }
    PRAssignment(subject){ //a method that receives a subject as an argument and logs out that the
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){ //similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

// ================ Instructor Instances ===============
const jiraiya = new Instructor({
    name: 'Jiraiya',
    age: 50,
    location: 'Hidden Leaf Village',
    gender: 'male',
    specialty: 'Summoning Jutsu',
    favLanguage: 'Java',
    catchPhrase: 'It\'s for my research.'
})



const orochimaru = new Instructor({
    name: 'Orochimaru',
    age: 100,
    location: 'Sound Village',
    gender: 'unknown',
    specialty: 'Forbidden Jutsu',
    favLanguage: 'Python',
    catchPhrase: 'He\'ll be back'
})



// ================ Project Manager Instances ===============
const kakashi = new ProjectManager({
    name: 'Kakashi',
    age: 29,
    location: 'Hidden Leaf Village',
    gender: 'male',
    gradClassName: 'FSW3',
    favInstructor: 'Sarutobi'
})

const guy = new ProjectManager({
    name: 'Guy',
    age: 30,
    location: 'Hidden Leaf Village',
    gender: 'male',
    gradClassName: 'FSW4',
    favInstructor: 'himself'
})

// ================ Project Manager Instances ===============
const naruto = new Students({
    name: 'Naruto',
    age: 18,
    location: 'Hidden Leaf Village',
    gender: 'male',
    previousBackground: 'Chef',
    className: 'FSW14',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
})

const sasuke = new Students({
    name: 'Sasuke',
    age: 20,
    location: 'Hidden Leaf Village',
    gender: 'male',
    previousBackground: 'Marketing',
    className: 'FSW14',
    favSubjects: ['Art', 'Dance', 'Music']
})

const rocklee = new Students({
    name: 'Rock Lee',
    age: 19,
    location: 'Hidden Leaf Village',
    gender: 'male',
    previousBackground: 'Personal Trainer',
    className: 'FSW14',
    favSubjects: ['JavaScript', 'Tai Jutsu', 'PE']
})


// ============= LOG CHECKER ==============
console.log(naruto.speak())

console.log(jiraiya.demo('Rasengan'))
console.log(orochimaru.grade(sasuke, 'Forbidden Jutsu'))

console.log(guy.standUp('#fsw14_guy'))
console.log(kakashi.debugsCode(naruto, 'JavaScript'))

console.log(naruto.listSubjects(naruto.favSubjects))
console.log(sasuke.PRAssignment('JavaScript IV'))
console.log(rocklee.sprintChallenge('React'))