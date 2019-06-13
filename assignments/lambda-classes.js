// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${name}, I am from ${location}.`
    }
}

class Insturctor extends Person{
    constructor(insAttr){
        super(insAttr)
        this.specialty = insAttr.specialty
        this.favLanguage = insAttr.favLanguage
        this.catchPhrase = insAttr.catchPhrase
    }
    
    demo(){
        return `Today we are learning about ${subject}.`
    }
    
    grade(Student){
        return `${Student} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(stdAttr){
        super(stdAttr)
        this.className = stdAttr.className
        this.favSubject = stdAttr.favSubject
        this.previousBackground = stdAttr.previousBackground
    }

    listsSubjects(){
        return favSubject.array.forEach() 
    }

    sprintChallenge(Student, subject){
        return `${Student.name} has begun sprint challenge on ${subject}`
    }

    prAssignment(Student, subject){
        return `${Student.name} has submitted a PR for ${subject}`
    }
}

class ProjectManager extends Insturctor{
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
