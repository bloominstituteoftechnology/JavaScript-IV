// CODE here for your Lambda Classes
class Person {
   constructor (peopleInfo) {     
    this.name= peopleInfo.name;
    this.age = peopleInfo.age;
    this.location = peopleInfo.location;
    }  
    
    speak () {
            console.log( `Hello my name is ${this.name}, I'm from ${this.location}`)
    }
}

class Instructors extends Person {
    constructor (employee) {
        super(employee)
        specialty = employee.specality;
        favLanguage = employee.favLanguage;
        catchPhrase = employee.catchPhrase;
    }
    demo() {
        return `Today we are learning about {subject}`
    }
}
class Students extends Person {
    constructor (studentID) {
        super(studentID)
        previousBackground = studentID.previousBackground
        className = studentID.className
        favSubjects = studentID.favSubjects
        
        // methods
        // studentID.listsSubjects
        // studentID.PRAssignment
    }

demo() {
    return `${studentID.className} student.name has submitted a PR for {subject}`
    }
}

class ProjectManagers extends Person {
    constructor (ProjectManagers) {
        super(ProjectManagers) 
            gradClassName = ProjectManagers.gradClassName
            favInstructor = ProjectManagers.favInstructor
        
            standUp = programManager.standUp
            debugsCode = programManager.debugsCode
    }
    
demo() {
    return `Today we are learning about {subject}`
    }
}

const Dan = new Instructors ({
    name = "Dan",
    age = "30",
    location = "Dallas",
    specialty = "redux",
    favLanguage = "Javascript",
    catchPhrase = "Let's refocus",
})

const Mark = new Instructors ({
    name = "Dan",
    age = "30",
    location = "Atlanta",
    specialty = "redux",
    favLanguage = "Javascript",
    catchPhrase = "Where are my Rockstar!",
})

const Tina  = Students ({
    name = "Tina",
    age = "28",
    location = "LA",
    className = "UX/UI",
    previousBackground = "Teacher",
    favSubjects = "HTML"
 })

const Marcus = Students ({
    name = "Marcus",
    age = "35",
    location = "Lawton",
    className = "Full Stack Web-Development",
    previousBackground = "Marketing",
    gradClassName ="Lambda-Web21",
    favInstructor = "Ryan McLaughlin",
})

const Jacob = ProjectManagers ({
    name = "Jacob",
    age = "28",
    location = "Bay",
    gradClassName = "Albany",
    favInstructor = "Debugger",
    favLanguage = "Ebonics",
})

const RyanMcLaughlin = ProjectManagers ({
    name = "Jacob",
    age = "28",
    location = "PositivtyVille",
    specialty = "Explaining",
    favLanguage = "English"
})
