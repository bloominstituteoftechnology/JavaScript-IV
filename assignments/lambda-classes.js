// CODE here for your Lambda Classes

//PERSON class
class Person {
  constructor(person) {
    this.name = person.name
    this.age = person.age
    this.location = person.location
    this.gender = person.gender
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`
  }
}

//INSTRUCTOR class
class Instructor extends Person{
  constructor(instructor) {
    super(instructor)
    this.specialty = instructor.specialty
    this.favLanguage = instructor.favLanguage
    this.catchPhrase = instructor.catchPhrase
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`
  }
}

//STUDENT class
class Student extends Person{
  constructor(student) {
    super(student)
    this.previousBackground = student.previousBackground
    this.className = student.className
    this.favSubjects = student.favSubjects
  }
  listsSubjects(){
    this.favSubjects.forEach(subject => {
      return subject
    });
  }

  PRAssignment() {
    return `${this.name} has submitted a PR for ${this.className}`
  }

  sprintChallenge() {
    return `${this.name} has begun sprint challenge on ${this.favLanguage}`
  }
}

//PROJECT MANAGER
class ProjectManager extends Instructor{
  constructor(pm){
    super(pm)
    this.gradClassName = pm.gradClassName
    this.favInstructor = pm.favInstructor
  }

  standUp(){
    return `${this.name} debugs ${Student.name}'s code on SUBJECT`
  }

  debugsCode(student) {
    return `${this.name} debugs ${student.name}'s code on SUBJECT`
  }
}

//TEST OBJECTS

//instructor
const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const dan = new Instructor({
  name: 'Dan',
  location: 'Salt Lake City',
  age: 29,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Data Science',
  catchPhrase: `To infinity and beyond!` 
});

const ellen = new Instructor({
  name: 'Ellen',
  location: 'Indianapolis',
  age: 31,
  gender: 'female',
  favLanguage: 'Java',
  specialty: 'Databases',
  catchPhrase: `Four score and seven years ago` 
});

console.log(fred.speak())
console.log(dan.demo('LESS'))
console.log(ellen.grade(wanda, 'Responsive Web Design-II'))

// //PROJECT MANAGER
const john = new ProjectManager({
  name: 'John',
  location: 'St. Louis',
  age: 42,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Here goes nothing.`,
  gradClassName: 'FSW-12',
  favInstructor: 'Fred' 
})

const melissa = new ProjectManager({
  name: 'Melissa',
  location: 'New Orleans',
  age: 35,
  gender: 'female',
  favLanguage: 'C++',
  specialty: 'Operating Systems',
  catchPhrase: `Be there or be square!`,
  gradClassName: 'FSW-13',
  favInstructor: 'Dan'  
})

const robert = new ProjectManager({
  name: 'Robert',
  location: 'Miami',
  age: 20,
  gender: 'male',
  favLanguage: 'C#',
  specialty: 'Gaming',
  catchPhrase: `To the moon, Alice!`,
  gradClassName: 'FSW-11',
  favInstructor: 'Ellen'  
})

console.log(john.standUp())
console.log(melissa.debugsCode(john))
console.log(robert.age)

// //STUDENT Objects
const wanda = new Student({
  name: 'Wanda',
  location: 'St. Louis',
  age: 35,
  gender: 'female',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `From the Earth to the Moon`,
  previousBackground: 'Video Production',
  className: 'FSW-14',
  favSubjects: ['English Literature', 'Web Development'] 
});

const adam = new Student({
  name: 'Adam',
  location: 'Boise',
  age: 38,
  gender: 'male',
  favLanguage: 'Bootstrap',
  specialty: 'Front-end',
  catchPhrase: `It's me!`,
  previousBackground: 'Insurance',
  className: 'FSW-14',
  favSubjects: ['Kids', 'Programming', 'Insurance'] 
});

const sean = new Student({
  name: 'Sean',
  location: 'Los Angeles',
  age: 40,
  gender: 'male',
  favLanguage: 'React',
  specialty: 'Web Apps',
  catchPhrase: `I build web apps?`,
  previousBackground: 'Waiter',
  className: 'iOS-1',
  favSubjects: ['Apple', 'Acting'] 
});

console.log(wanda.listsSubjects())
console.log(wanda.PRAssignment())
console.log(adam.sprintChallenge())
console.log(sean.favSubjects)
