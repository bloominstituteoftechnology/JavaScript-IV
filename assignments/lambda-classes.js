// CODE here for your Lambda Classes
class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
};

class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions);
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`
    }
    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    grading (student, max, min) { // This is the code I wrote for the stretch task that randomly adds/subtracts points
        max = 20;
        min = -20;
        return student.grade - Math.random() * (max-min) + max
    }
}

class Student extends Person {
    constructor (studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = Math.floor(Math.random() * 100) + 1 // This is the code I wrote for the stretch task that randomly assigned grades to students.
    }
    listsSubjects () {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduation () { // This is the code I wrote for the stretch task that graduates students.
        if (this.grade > 70 ) {
            return 'Congratulations on graduating from Lambda!  Good luck finding employment!  Refer to us often!'
        } else {
            return `I guess it's more pull requests for you!`
        }
}
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
};

let amy = new Student ({
    'name': 'Amy Victoria Shackles',
    'age': 28,
    'location': 'Seattle, Washington',
    'gender': 'Female',
    'previousBackground': 'QA Specialist',
    'className': 'CS10',
    'favSubjects': ['CSS', 'Ruby', 'JavaScript', 'Anything to do with debugging']
})

let chaz = new Student ({
    'name': 'Charles (Chaz) III',
    'age': 23,
    'location': 'Berlin, Germany',
    'gender': 'Male',
    'previousBackground': 'Burger King',
    'className': 'CS10',
    'favSubjects': ['Bootstrap', 'CSS', 'jQuery']
})

let penelope = new Student ({
    'name': 'Penelope',
    'age': 30,
    'location': 'Tacoma, Washington',
    'gender': 'Female',
    'previousBackground': 'CEO of a Fortune 500 (that is her cover story, anyway)',
    'className': 'CS10',
    'favSubjects': ['CSS', 'CSS', 'CSS']
})

let josh = new Instructor ({
    'name': 'Josh Knell',
    'age': 34,
    'location': 'Utah',
    'gender': 'Male',
    'specialty': 'Kick-ass web design',
    'favLanguage': 'JavaScript',
    'catchphrase': 'Never use IDs!'
})

let jenifer = new Instructor ({
    'name': `Jenifer James`,
    'age': 38,
    'location': 'London, England',
    'gender': 'Female',
    'specialty': 'Multi-tasking',
    'favLanguage': 'Java',
    'catchphrase': `Rep, rep, rep.`
})

let josep = new Instructor ({
    'name': `Josep (Murder) McNalley`,
    'age': 37,
    'location': 'Nobody knows',
    'gender': 'Male',
    'specialty': 'Coming up with epic analogies',
    'favLanguage': 'Python',
    'catchphrase': `Never trust a Greek horse! (He doesn't understand the Trojan Horse story)`
})

let cole = new ProjectManager ({
    'name': 'Cole',
    'age': 30,
    'location': 'next to a whiteboard in a land far, far away',
    'gender': 'Female',
    'specialty': 'Reassuring struggling students that they can actually code',
    'favLanguage': 'Any - Cole is a language horder',
    'catchPhrase': 'Shoot, I forgot to get end of video music!',
    'gradClassName': 'CS5',
    'favInstructor': 'Ryan',
})

let jonathan = new ProjectManager ({
    'name': 'Jonathan Greene',
    'age': 18,
    'location': 'New York City',
    'gender': 'Male',
    'specialty': 'Logic puzzles and mind games',
    'favLanguage': "Rubix Cube (he's convinced it's a language)",
    'catchPhrase': `I've made a horrible MediaStreamTrackEvent`,
    'gradClassName': 'CS3',
    'favInstructor': 'Sean',
});

let stace = new ProjectManager ({
    'name': 'Stace',
    'age': 24,
    'location': 'San Antonio, Texas',
    'gender': 'Female',
    'specialty': 'Murdering robots (AKA: finding bugs)',
    'favLanguage': 'Lisp',
    'catchPhrase': `Where's the mute button?`,
    'gradClassName': 'CS4',
    'favInstructor': 'Sean',
});

console.log(stace.age);
console.log(stace.favInstructor);
console.log(stace.specialty)
console.log(stace.standUp('CS10-help'))
console.log(stace.debugsCode(amy, 'CSS'))
console.log(amy);
console.log(chaz)
console.log(penelope)
console.log(josh)
console.log(jenifer)
console.log(josep)
console.log(cole)
console.log(jonathan)
console.log(stace)
console.log(cole.speak())
console.log(chaz.listsSubjects())
console.log(penelope.PRAssignment('JavaScript-III'))
console.log(chaz.sprintChallenge('User Interface'))
console.log(josh.demo('Bootstrap'))
console.log(jenifer.grade(amy, 'Javascript-IV'))
console.log(cole.standUp('CS10'))
console.log(amy.grade)
console.log(josep.grading(amy))
console.log(amy.graduation())






