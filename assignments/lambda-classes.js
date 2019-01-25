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

const courtney = new Person({ 
name: 'Courtney', 
age: 24, 
location: 'Santa Barbara',
gender: 'Female'
})

//Instructors 

const elga = new Instructors ({ 
    name: 'Elga', 
    age: 38, 
    location: 'Phoenix',
    gender: 'Female',
    favLanguage: 'JavaScript',
    specialty: 'Everything',
    catchPhrase: `Silenco porfavor...`

    
   })
  
  const geraldo = new Instructors({
    name: 'Geraldo', 
    age: 37, 
    location: 'Seattle',
    gender: 'Male',
    favLanguage: 'Ruby',
    specialty: 'Building things that work',
    catchPhrase: 'Bingo!!!'
  })
  
  const ella = new Instructors({ 
    name: 'Ella', 
    age: 24, 
    location: 'Santa Barbara',
    gender: 'Female',
    favLanguage: 'Go',
    specialty: 'Dev Ops',
    catchPhrase: "It's Showtime!!!"
    })
  

  //Students 
  const sabrina = new Student ({ 
    name: 'Sabrina', 
    age: 23, 
    location: 'Tampa',
    gender: 'Female',
    previousBackground: 'Model',
    className: 'CS199',
    favSubject: 'Science'
   })
  
  const greg = new Student({
    name: 'Greg', 
    age: 56, 
    location: 'Unknown',
    gender: 'Male',
    previousBackground: 'English Teacher',
    className: 'CS199',
    favSubject: 'ALL'
   })
  
  const robert = new Student({ 
    name: 'Robert', 
    age: 33, 
    location: 'Austin',
    gender: 'Male',
    previousBackground: 'Unknown',
    className: 'CS199',
    favSubject: 'Preprocessing'
   })
  

                       
console.log(wes.speak())
console.log(steve.speak())
console.log(courtney.speak())
console.log(elga.speak())
console.log(elga.demo('JavaScript'))
console.log(elga.grade(sabrina, 'CSS'))
console.log(geraldo.speak())
console.log(geraldo.demo('LESS'))
console.log(geraldo.grade(greg, 'HTML'))
console.log(ella.speak())
console.log(ella.demo('React'))
console.log(ella.grade(robert, 'JavaScript'))
console.log(robert.speak())
console.log(robert.listsSubjects())
console.log(robert.PRAssignment(robert, 'JavaScript'))
console.log(robert.sprintChallenge(robert, 'React'))
console.log(greg.speak())
console.log(greg.listsSubjects())
console.log(greg.PRAssignment(greg, 'CSS'))
console.log(greg.sprintChallenge(greg, 'LESS'))