// CODE here for your Lambda Classes
class Person {
    constructor(obj){
        this.name = obj.name
        this.age = obj.age
        this.location = obj.location
        this.gender = obj.gender
    }
    speak(){ 
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`) 
    }
}

class Instructor extends Person{
    constructor(obj){
        super(obj)
        this.specialty = obj.specialty
        this.favLanguage= obj.favLanguage
        this.catchPhrase = obj.catchPhrase
    }

    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }

    grade(studentObj,subject){
        console.log(`${studentObj.name} receives a perfect score on ${subject}`)
    }
    mutateGrade(studentObj){
        studentObj.grade += (Math.random()*2 >1 ? Math.floor(Math.random()*25) : Math.floor(Math.random()*-25))
    }
}

class Student extends Person{
    constructor(obj){
        super(obj)
        this.previousBackground = obj.name
        this.className = obj.className
        this.favSubjects = obj.favSubjects
        this.grade = (()=>{
            return Math.floor(Math.random() * 100);
        })()
    }
    //logs out all of the student's favoriteSubjects one by one.
    listsSubjects(){ 
        this.favSubjects.forEach(e=>{
            console.log(e)
        })
    }
    PRAssignment(subject){ 
        console.log(`student.name has submitted a PR for ${subject}`)
    }
    sprintChallenge(student,subject){ 
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }

}

class ProjectManager extends Instructor{
    constructor(obj){
        super(obj)
        this.gradClassName = obj.gradClassName
        this.favInstructor = obj.favInstructor
    }
    standUp(channel){ 
        console.log(`${this.name} announces to ${channel}, chanel standy times!`)
    }
    debugsCode(studentObj, subject){ 
        console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}`)
    }
}

const jason = new Student({
    name: 'Json',
    location: 'Mass',
    age: 26,
    gender: 'male',
    previousBackground: 'Quantum Student',
    className: `CSPT3`,
    favSubjects: ['Quantum Mechanics','Machine Learning','Being Radical']
})

// testing the class objects
const cam = new Instructor({
name: 'Cam',
location: 'Utah',
age: 30,
gender: 'male',
favLanguage: 'JavaScript',
specialty: 'Front-end',
catchPhrase: `Don't forget the homies`
})

const brock = new  ProjectManager({
name: 'Brock',
location: 'Utah',
age: 26,
gender: 'male',
favLanguage: 'JavaScript',
specialty: 'Being a sick Project Manager',
catchPhrase: `If you guys ever need any help, I'm here for you!`,
gradClassName: "FSW13",
favInstructor: `Leonardo`
})

console.log(jason);
jason.listsSubjects()
jason.PRAssignment('JS IV');
jason.sprintChallenge('JS');
console.log(jason.grade)

console.log(cam)
cam.demo(`javascript`)
cam.grade(jason,`Js`)

console.log(brock)
brock.standUp(`fswpt3`)
brock.debugsCode(jason,'JsIV')

cam.mutateGrade(jason);
console.log(jason.grade)