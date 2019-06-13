// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(name, location){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(insAttr){
        super(insAttr)
        this.specialty = insAttr.specialty
        this.favLanguage = insAttr.favLanguage
        this.catchPhrase = insAttr.catchPhrase
    }
    
    demo(subject){
        return `Today we are learning about ${subject}.`
    }
    
    grade(Student, subject){
        return `${Student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(stdAttr){
        super(stdAttr)
        this.className = stdAttr.className
        this.favSubjects = stdAttr.favSubjects
        this.previousBackground = stdAttr.previousBackground
    }

    listsSubjects(){
        return `${this.favSubjects}` 
    }

    sprintChallenge(subject){
        return `${Student.name} has begun sprint challenge on ${subject}`
    }

    prAssignment(subject){
        return `${Student.name} has submitted a PR for ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttr){
        super(pmAttr)
        this.gradClassName = pmAttr.gradClassName
        this.favInstructor = pmAttr.favInstructor
    }
    
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​`
    }

    debugsCode(Student, subject){
        return `${this.name} debugs ${Student.name}'s code on ${subject}`
    }
}

//Instructor//

const dan = new Instructor({
    name: 'Dan',
    age: 'Infinity',
    location: 'Denver',
    specialty: 'Relentless Debugger',
    favLanguage: 'JavaScript, Python, Elm, ReasonML, SmallTalk, Haskell, C#, Java, Rust, Go, Ruby, Crystal, Elixir, Lua, and Julia',
    catchPhrase: 'If you can do the thing, you can get paid to do the thing!',
});

//Project Manager//

const marguel = new ProjectManager({
    name: 'Marguel',
    age: 'Maybe 26',
    gradClassName: 'WEBPT2',
    favInstructor: 'Me?',
    location: 'California',
    specialty: 'React',
    favLanguage: 'JavaScript, Python, Elm etc.',
    catchPhrase: "Practice Flex Zombies !!!",
});

  const brandon = new ProjectManager({
    name: 'Brandon',
    age: '34',
    gradClassName: 'WEB18',
    favInstructor: 'Professor Lambda',
    location: 'Maine',
    specialty: 'Redux',
    favLanguage: 'JavaScript, C++, Python.',
    catchPhrase: "You shall not pass!",
});

    const mary = new ProjectManager({
    name: 'Mary',
    age: '24',
    gradClassName: 'WEB18',
    favInstructor: 'Josh Knell',
    location: 'New York',
    specialty: 'Express and Node.js',
    favLanguage: 'Javascript',
    catchPhrase: "That looks AWESOME",
});

//Students//

const isaiah = new Student({
    name: 'Isaiah',
    age: 18,
    location: 'Florida',
    previousBackground: 'High School last month',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const kevin = new Student({
    name: "Kevin",
    age: 28,
    location: "California",
    previousBackground: "Table Games Dealer",
    className: "WEB21",
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
    const nisa = new Student({
    name: 'Nisa',
    age: 25,
    location: 'Ohio',
    previousBackground: 'Debt Collector',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
// Test of Class Methods//

//Test of Person Methods//
//Instructor//
console.log(dan.speak('Speak method called')) 

//Project Managers//
console.log(marguel.speak('Speak method called'))
console.log(brandon.speak('Speak method called'))
console.log(mary.speak('Speak method called'))

// Students//
console.log(isaiah.speak('Speak method called'))
console.log(kevin.speak('Speak method called'))
console.log(nisa.speak('Speak method called'))

// Test of Instructor Methods//
console.log(dan.demo('Demo method called'))
console.log(dan.grade(isaiah, 'Grade method called'))
console.log(dan.grade(kevin, 'Grade method called'))
console.log(dan.grade(nisa, 'Grade method called'))

// Test of student Methods//
console.log(`Isaiah ${isaiah.listsSubjects(isaiah.favSubjects)} listsSubjects Method Called`)
console.log(`Kevin ${kevin.listsSubjects(kevin.favSubjects)} listsSubjects Method Called`)
console.log(`Nisa ${nisa.listsSubjects(kevin.favSubjects)} listsSubjects Method Called`)
console.log(isaiah.prAssignment('prAssignment Method Called'))
console.log(kevin.prAssignment('prAssignment Method Called'))
console.log(kevin.sprintChallenge('Sprintchallenge Method Called'))
console.log(isaiah.sprintChallenge('Sprintchallenge Method Called'))

//Test of Project Manager Methods
console.log(marguel.standUp('Standup Method Called'))
console.log(brandon.standUp('Standup Method Called'))
console.log(mary.standUp('Standup Method Called'))
console.log(marguel.debugsCode(isaiah, 'Debugscode Method Called'))
console.log(brandon.debugsCode(kevin, 'Debugscode Method Called'))
console.log(mary.debugsCode(nisa, 'Debugscode Method Called'))



//Testing of Object's Attributes
// Instructor Testing
console.log(dan.name)
console.log(dan.age)
console.log(dan.location)
console.log(dan.specialty)
console.log(dan.favLanguage)
console.log(dan.catchPhrase)

// Project Manager Testing 
console.log(marguel.name)
console.log(marguel.age)
console.log(marguel.gradClassName)
console.log(marguel.favInstructor)
console.log(marguel.location)
console.log(marguel.specialty)
console.log(marguel.favLanguage)
console.log(marguel.catchPhrase)

console.log(brandon.name)
console.log(brandon.age)
console.log(brandon.gradClassName)
console.log(brandon.favInstructor)
console.log(brandon.location)
console.log(brandon.specialty)
console.log(brandon.favLanguage)
console.log(brandon.catchPhrase)

console.log(mary.name)
console.log(mary.age)
console.log(mary.gradClassName)
console.log(mary.favInstructor)
console.log(mary.location)
console.log(mary.specialty)
console.log(mary.favLanguage)
console.log(mary.catchPhrase)


// ==== Student Testing ====

console.log(isaiah.name)
console.log(isaiah.age)
console.log(isaiah.location)
console.log(isaiah.previousBackground)
console.log(isaiah.className)
console.log(isaiah.favSubjects)

console.log(kevin.name)
console.log(kevin.age)
console.log(kevin.location)
console.log(kevin.previousBackground)
console.log(kevin.className)
console.log(kevin.favSubjects)

console.log(nisa.name)
console.log(nisa.age)
console.log(nisa.location)
console.log(nisa.previousBackground)
console.log(nisa.className)
console.log(nisa.favSubjects)

