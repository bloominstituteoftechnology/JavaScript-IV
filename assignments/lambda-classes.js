// CODE here for your Lambda Classes

class PersonClass {
    constructor(attributes) {
        this.name = attributes.name,
            this.age = attributes.age,
            this.location = attributes.location
    };
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    };
};

class Instructor extends PersonClass {
    constructor(prefs) {
        super(prefs),
            this.specialty = prefs.specialty,
            this.favLanguage = prefs.favLanguage,
            this.catchPhrase = prefs.catchPhrase
    };
    demo(subject) {
        return `Today we are learning about ${subject} where subject is the param passed in`
    };
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    };
    assignScore() {
        return Math.floor(Math.random() * Math.floor(100));
    }
}


class Student extends PersonClass {
    constructor(knowledge) {
        super(knowledge),
            this.previousBackground = knowledge.previousBackground,
            this.className = knowledge.className,
            this.favSubjects = knowledge.favSubjects,
            this.grade = knowledge.grade
    };
    listsSubjects() {
        return `${this.name}'s favorite subjects are ${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    graduate() {
            this.grade = Math.floor(Math.random() * Math.floor(100));
          
        if (this.grade > 70) {
            return  `Congratulations you graduate Lambda with a ${this.grade}%`
        } 
        else {
            return  `Sorry you failed to graduate because ${this.grade}% is not passing`
        }
    }

}

class ProjectManager extends Instructor {
    constructor(specialty) {
        super(specialty),
            this.gradClassName = specialty.gradClassName,
            this.favInstructor = specialty.favInstructor
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel} @channel standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const ObiWan = new Instructor({
    name: 'Obi Wan',
    location: 'Tatooin',
    age: 84,
    favLanguage: 'Condecending',
    specialty: 'Training Sith Lords',
    catchPhrase: `I have the high ground`
});

const Yoda = new ProjectManager({
    name: 'Yoda',
    location: 'Afterlife',
    age: 637,
    favLanguage: 'Metaphors',
    specialty: 'The force',
    catchPhrase: `Do or do not. There is no try.`,
    gradClassName: 'Too long ago to remember',
    favInstructor: 'Mace Windu was my BOI'
});

const Emporer = new ProjectManager({
    name: 'Palpaltine',
    location: 'The Heart of a volcano',
    age: 137,
    favLanguage: 'Cackling',
    specialty: 'The Dark Side',
    catchPhrase: `Do It!!!!`,
    gradClassName: 'Darth Plagus',
    favInstructor: 'Myself HAHAHAHA'
});

const Luke = new Student({
    name: 'Luke',
    location: 'Who Cares?',
    age: 70,
    previousBackground: "Building sand castles",
    className: 'Yodas school for the gifted',
    favSubjects: ['Running through trees', 'Flipping over rocks', 'Carrying Yoda like a baby'],
    grade: 80
});

console.log(Luke);
console.log(Emporer.standUp("SithLords"))
console.log(ObiWan.speak())


console.log(Yoda.assignScore())
console.log(Luke.graduate());