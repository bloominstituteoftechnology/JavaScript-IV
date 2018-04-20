// CODE here for your Lambda Classes
// Person Class
class Person{
    constructor(personAttributes){
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}// Person 

const bashir = new Person({
    name : 'bashir',
     age : 29 , 
     location : "Nigeria"
    })

console.log(bashir)
console.log(bashir.speak())

// Instructor Class 
class instructor extends Person{
    constructor(instructorAttributes){
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}//Instructor 

const josh = new instructor({
    name : 'Josh',
    age : 33,
    location : "san fransisco",
    specialty : "React",
    favLanguage : "Javascript",
    catchPhrase : "Don't forget the homies"

})

console.log(josh)
console.log(josh.demo('ES6 Class'))
console.log(josh.grade({name : "sanusi"},'ES6 classes'))
// Student Class
class Student extends Person{
    constructor(studentAttributes){
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        let subjects = this.favSubjects.forEach(function(e){
            console.log(e)
        })
        // let subjects = this.favSubjects.forEach((e) => console.log(e));
         return subjects
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}`
    }

}// Student

const sanusi = new Student({
    name : 'Sanusi',
     age : 29 , 
     location : "USA",
     previousBackground : "Mathematic and Computer science",
     className : 'CS10',
     favSubjects : ['Scope and Closure', 'type and Coesion','object orientation','ES6 Classes']

    })

    console.log(sanusi)
    console.log(sanusi.speak())
    console.log(sanusi.listsSubjects())



// // Project Manager Class 
// class ProjectManager extends instructor{
//     constructor(pmAttributes){
//         super(PMattributes)
//         this.gradClassName = pmAttributes.gradClassName;
//         this.favInstructor = pmAttributes.instructor;
//     }
//     standUp(channel){
//         return `${this.name} announces to ${channel}, @${channel} standy times!​​​​​`
//     }
//     // debugsCode(student,subject){
//     //     return `${​​​​​this.name} debugs ${student.name}'s code on ${subject}`
//     // }
// }//Project 


