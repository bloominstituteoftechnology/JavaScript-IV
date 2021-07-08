// CODE here for your Lambda Classes

// class People {
//     constructor (person) {
//        this.name = person.name;
//        this.age = person.age;
//        this.location = person.location;
//        this.gender = person.gender;
//     }
//     speak (){
//         return `Hello my name is ${this.name}, I am from ${this.location}.`
//     }
// }

// class Instructor extends People {  // child of People 
//     constructor (instructor) {
//         super (instructor)
//         this.favLanguage = instructor.favLanguage;
//         this.specialty = instructor.specialty;
//         this.catchPhrase = instructor.catchPhrase;
//     }
//     demo (subject){
//         return `Today we are learning about ${subject}.`
//     }
//     grade (student, subject){
//         return `${student.name} receives a perfect score on ${subject}.`
//     }
// }

// class Student extends People {  // child of People 
//     constructor (theStudent) {
//         super (theStudent)
//         this.previousBackground = theStudent.previousBackground;
//         this.className = theStudent.className;
//         this.favSubjects = theStudent.favSubjects;
//     } 
//     listSubjects (){
//         this.favSubjects.forEach((subject)=> {
//             console.log(subject)
//         });
//     }
//     PRassignment (subject){
//         return `${this.name} has submitted a PR for ${subject}`;
//     }
//     sprintChallenge (subject) {
//         return `${this.name} has begun sprint challenge on ${subject}`;
//     }

// }

// class ProjectManager extends Instructor{ // extends Instructor
//     constructor (pm) {
//         super (pm)
//         this.gradClassName = pm.gradClassName;
//         this.favInstructor = pm.favInstructor;
//     }
//     standUp (channel){
//        return  `${this.name} announces to ${channel}, @channel standby times!`
//     }
//     debugsCode (student, subject){
//         return `${this.name} debugs ${student.name}'s code on ${subject}`
//     }
// }

// stretch goals version 
// CODE here for your Lambda Classes

class People {
    constructor (person) {
       this.name = person.name;
       this.age = person.age;
       this.location = person.location;
       this.gender = person.gender;
    }
    speak (){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends People {  // child of People 
    constructor (instructor) {
        super (instructor)
        this.favLanguage = instructor.favLanguage;
        this.specialty = instructor.specialty;
        this.catchPhrase = instructor.catchPhrase;
    }
    demo (subject){
        return `Today we are learning about ${subject}.`
    }
    grade (student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
    gradeTest (student){
        // grade = Math.floor(Math.random () * 45) + 55;
        student.grade = student.grade = Math.floor(Math.random () * 45) + 55;
        // grade = this.grade
        return `${student.name} received a grade of ${student.grade}`
        grade.push(student.grade)
        
    }
}

class Student extends People {  // child of People 
    constructor (theStudent) {
        super (theStudent)
        this.previousBackground = theStudent.previousBackground;
        this.className = theStudent.className;
        this.favSubjects = theStudent.favSubjects;
        this.grade = theStudent.grade;
    } 
    listSubjects (){
        this.favSubjects.forEach((subject)=> {
            console.log(subject)
        });
    }
    PRassignment (subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate (grade){
        if (this.grade >= 70){
            return `${this.name} graduated!! Woohoo!! Lambda is the best!`
        } else {
            return `You will get this soon, but you can't graduate just yet, ${this.name}!`
        }
    }

}

class ProjectManager extends Instructor{ // extends Instructor
    constructor (pm) {
        super (pm)
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }
    standUp (channel){
       return  `${this.name} announces to ${channel}, @channel standby times!`
    }
    debugsCode (student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const cameron = new Instructor ({
    name: 'Cameron',
    location: 'SomeWhere, USA',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Alexa turned on my music`
})

const josh = new Instructor ({
    name: 'Josh',
    location: 'Salt Lake City',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `Hi, I am Josh` 
})

const jamar = new Student ({
    name: 'Jamar',
    location: 'NYC',
    age: 30,
    gender: 'male',
    // favLanguage: 'JavaScript',
    // specialty: 'Full-Stack',
    // catchPhrase: `Alexa turned on my music`
    previousBackground: 'International relations',
    className: 'FSWPT3',
    favSubjects: ['Html', 'CSS', 'JavaScript', 'node.js'],
    grade: 99
})

const karla = new Student ({
    name: 'Karla',
    location: 'Brooklyn',
    age: 25,
    gender: 'female',
    previousBackground: 'tech related',
    className: 'FSWPT3',
    favSubjects: ['JavaScript', 'Python'],
    grade: 91
})

const mustafa = new Student ({
    name: 'Mustafa',
    location: 'Bay Area',
    age: 22,
    gender: 'male',
    previousBackground: 'tech related',
    className: 'FSWPT3',
    favSubjects: ['css.LESS', 'CSS', 'JavaScript'],
    grade: 90
})

const don = new Student ({
    name: 'Don',
    location: 'Houston',
    age: 28,
    gender: 'male',
    previousBackground: 'musician',
    className: 'FSWPT2034',
    favSubjects: ['ruby', 'JavaScript'],
    grade: 50
})

const austin = new ProjectManager ({
    name: 'Austin',
    location: 'Central USA',
    age: 27,
    gender: 'male',
    gradClassName: 'FT3',
    favInstructor: 'Josh'
})

const brock = new ProjectManager ({
    name: 'Brock',
    location: 'Western Coast',
    age: 26,
    gender: 'male',
    gradClassName: 'FT3',
    favInstructor: 'Cameron'
})


console.log(cameron)
console.log(josh.favLanguage)
console.log(cameron.speak());
console.log(cameron.demo('JavaScriptIV'))
console.log(josh.grade(jamar, 'JavaScriptII'))
console.log(jamar)
console.log(jamar.favSubjects)
console.log(austin)
console.log(austin.standUp('FSWPT3'))
console.log(austin.debugsCode(jamar, 'JSIV homework'))
console.log(cameron.gradeTest(jamar))
console.log(austin.gradeTest(mustafa))
console.log(brock.standUp('FSWPT3'))
console.log(josh.gradeTest(karla))
console.log(jamar.graduate())
console.log(mustafa.graduate())
console.log(karla.graduate())
console.log(don.graduate())

var o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2
    }
};