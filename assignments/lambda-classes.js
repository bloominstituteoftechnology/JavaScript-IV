// CODE here for your Lambda Classes.


class Person {
    constructor (attributes){ 
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
    this.gender = attributes.gender
    }
 
 speak () { 
   console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
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
         console.log(`Today we are learning about ${subject}`)
     }

     grade(student, subject){ 
         console.log(`${student.name} receives a perfect score on ${subject}'`)
     }
 }