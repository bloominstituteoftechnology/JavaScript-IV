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

     listSubjects(favSubject){ 
         return ${favSubject}
     }

     PRAssignment(student, subject){ 
         return `${student.name} has submitted a PR for ${subject}`
     }

     sprintChalleng(student, subject){ 
         return `${student.name} has begun sprint challenge on ${subject}`
     }
 }