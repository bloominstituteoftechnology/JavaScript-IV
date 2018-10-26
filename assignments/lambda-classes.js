// CODE here for your Lambda Classes
// class Person {
//     constructor(attributes) {
//         this.name = attributes.name;
//         this.age = attributes.age;
//         this.location = attributes.location;
//         this.gender = attributes.gender;
//     }
//     speak () {
//         return 'Hello my name is ${this.name}, I am from ${this.location}.'
//     }
// }

// const pete = new Person ({
//     name: 'Pete',
//     age: 18,
//     location: 'Florida',
//     gender:'M',
// })

// const amy = new Person ({
//     name:'Amy',
//     age: 45,
//     location:'Maryland',
//     gender:'F',
// })

// console.log(pete)
// pete.speak()

// console.log(amy)
// amy.speak()

class Instructor extends Person {
    constructor(chdatt) {
        super(attributes);
        this.specialty = chdatt.specialty;
        this.favLanguage = chdatt.favLanguage;
        this.catchPhrase = chdatt.catchPhrase;
    }
    demo () {
        return 'Today we are learning about ${this.subject}.'
    }
    grade () {
        return '{student.name} receives a perfect score on {subject}.'
    }
}

const bill = new Instructor ({
    specialty = 'HTML',
    favLanguage = 'HTML/CSS',
    catchPhrase = 'More practice, better the coder',
})

// const jamie = new Instructor ({
//     specialty = 'Functional Components',
//     favLanguage = 'Ruby',
//     catchPhrase = 'Channel you inner geek',
// })

console.log(bill)
bill.demo()
bill.grade()

// class Student extends Person {
//     constructor(chdatt) {
//     super(attributes);
//     this.previousBackground = chdatt.previousBackground;
//     this.className = chdatt.className;
//     this.favSubjects = chdatt.favSubjects;
//     }
//     PRAssignment () {
//         return '{student.name} has submitted a PR for {subject}.'
//     }
//     sprintChallenge () {
//         return '{student.name} has begun sprint challenge on {subject}.'
//     }
// }


// class ProjectManagers extends Instructors {
//     constructor(attributes) {
//         super(attributes);
//         this.gradClassName = attributes.gradClassName;
//         this.favInstructor = attributes.favInstructor;
//     }
//     standUp () {
//         return '{name} announces to {channel}, @channel standby times!'
//     }
//     debugsCode () {
//         return '{name} debugs {student.name}s code on {subject}.'
//     }
// }