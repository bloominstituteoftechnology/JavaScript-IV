// CODE here for your Lambda Classes




class Person {
    constructor (personTrait) {
        this.name = personTrait.name;
        this.age = personTrait.age;
        this.location = personTrait.location;
        this.gender = personTrait.gender;
    }
    speak() {
       console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}


class Instructor extends Person {
    constructor (instructorTrait) {
        super(instructorTrait);
        this.specialty = instructorTrait.specialty;
        this.favLanguage = instructorTrait.favLanguage;
        this.catchPhrase = instructorTrait.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    judge(student) {
        return student.grade + Math.random
        console.log(student.grade)
    }
}



class Student extends Person {
    constructor (studentTrait) {
        super(studentTrait);
        this.previousBackground = studentTrait.previousBackground;
        this.className = studentTrait.className;
        this.favSubjects = studentTrait.favSubjects;
        this.grade = 100;
    }
    listSubjects () {
        console.log(this.favSubjects)
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}



class ProjectManager extends Instructor {
    constructor (pmTrait) {
        super(pmTrait);
        this.gradClassName = pmTrait.gradClassName;
        this.favInstructor = pmTrait.favInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name} code on ${subject}`)
    }
}

const robbie = new Student({
    name: 'Robbie',
    age: 28,
    location: 'Maryland',
    gender: 'Male',
    previousBackground: 'Sales',
    className: 'FSWPT3',
    favSubjects: ['Coding', 'eating', 'reading']
})

const sneha = new ProjectManager({
    name: 'Sneha',
    age: 28,
    location: 'USA',
    gender: 'Female',
    specialty: 'Javascript',
    favLanguage: 'Binary',
    catchPhrase: 'Good evening everyone!',
    gradClassName: 'CS3',
    favInstructor: 'Cam'
})
console.log(sneha.judge(robbie))
