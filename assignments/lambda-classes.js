// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender
    }

    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(subject) {
        console.log(`${this.name} receives a perfect score on ${subject}`)
    }


    unfairGrading(studentObject) {
        studentObject.grade += Math.random() * 20;
        studentObject.grade -= Math.random() * 20;
        console.log(`${studentObject.name}'s grade is ${studentObject.grade}`);
    }

}

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = studentInfo.grade;
    }

    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }

    PRAssignment() {
        console.log(`${this.name} has submitted a PR for ${this.className}`)
    }
    
    graduate(arrAnime) {
        if(this.grade>70) {
            console.log("You passed! Go watch some anime as a reward!")
        }
        
        else {
            console.log(`${arrAnime[Math.floor(Math.random() * arrAnime.length)]} is great, but you need to finish your work`)
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(projectManagerInfo) {
        super(projectManagerInfo);
        this.gradClassName = projectManagerInfo.gradClassName;
        this.favInstructor = projectManagerInfo.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel stand up time!`)
    }

    debug(studentObject, subject) {
        console.log(`${this.name} debugs ${studentObject.name}'s code on ${subject}`)
    }
}

const Sean = new Student({
    name: 'Sean',
    age: 22,
    location: 'Connecticut',
    gender: 'male',
    previousBackground: 'Internet',
    className: 'CSPT3',
    favSubjects: 'Javascript',
    grade: 70
})

const Austin = new ProjectManagers({
    name:'Austin',
    age:'Young',
    location:'Earth',
    gender:'Probably male',
    gradClassName:'Ahead of me somewhere',
    favInstructor:"Dunno, maybe Josh Knell?"
});

const animeArray = ['Fate/Zero', 'Attack on Titan', 'Konosuba', `Jojo's Bizarre Adventure`, `No Game No Life`];

Austin.unfairGrading(Sean);
Sean.graduate(animeArray);