// CODE here for your Lambda Classes.


class Person {
    constructor (attributes){ 
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
    this.gender = attributes.gender
    }
 
 speak() { 
   return `Hello my name is ${this.name}, I am from ${this.location}`
   }
 }

 class Instructors extends Person{ 
     constructor(instAttributes) {
          super(instAttributes)
          this.speciality = instAttributes.speciality
          this.favLanguage = instAttributes.favLanguage
          this.catchPhrase = instAttributes.catchPhrase
     }

     demo(subject) { 
        return `Today we are learning about ${subject}`
     }

     grade(student, subject){
         return `${student.name} receives a perfect score on ${subject}`
     }
 }

 class Student extends Person{ 
     constructor(studAttributes){ 
         super(studAttributes)
         this.previousBackground = studAttributes.previousBackground
         this.className = studAttributes.className
         this.favSubject = studAttributes.favSubject
     }

     listSubjects(){ 
         return `${this.favSubject}`
     }

     PRAssignment(student, subject){ 
         return `${student.name} has submitted a PR for ${subject}`
     }

     sprintChalleng(student, subject){ 
         return `${student.name} has begun sprint challenge on ${subject}`
     }
 }

 class ProjectManagers extends(Instructors){ 
     constructor(PMAttributes){
     super(PMAttributes)
     this.gradClassName = PMAttributes.gradClassName
     this.favInstructor = PMAttributes.favInstructor
     }

     standup(channel){ 
         return ` ${name} announces to ${channel}, @channel standy times!​​​​​`
         
     }

     debugsCode(student, subject){ 
         return `${name} debugs ${student.name}'s code on ${subject}`
     }


 }

 //Persons 
 
const wes = new Person ({ 
  name: 'Wes', 
  age: 32, 
  location: 'Morro Bay',
  gender: 'Male'
  
 })

const steve = new Person({
  name: 'Steve', 
  age: 27, 
  location: 'Portland',
  gender: 'Male'
})

const ella = new Person({ 
name: 'Ella', 
age: 24, 
location: 'Santa Barbara',
gender: 'Female'
})
                       
console.log(wes.speak())
console.log(steve.speak())
console.log(ella.speak())
 