// CODE here for your Lambda Classes

class Person{
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}


class Instructor extends Person{
    constructor(instrAttr){
        super(instrAttr)
        this.specialty = instrAttr.specialty;
        this.favLanguage = instrAttr.favLanguage;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        return `${student.name} recieves a perfect score on ${subject}`
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });



class Student extends Person{
    constructor(studAttr){
        super(studAttr)
        this.previousBackground = studAttr.previousBackground;
        this.className = studAttr.className;
        this.favSubjects = studAttr.favSubjects;
    }
    listSubjects(){
        return (this.favSubjects)

    }
    PRAssignment(subject){
        return `${this.name} has begun spring challenge on ${subject}`
    }
}

const bambam = new Student({
    name: 'Bam Bam',
    location: 'Bedrock',
    age: 9,
    gender: 'male',
    previousBackground: 'bangin everthing',
    className:'4th Grade',
    favSubjects: ['jerking one out','hitting it raw','pushing the turd thru']
  });

  class ProjectManager extends Instructor{
      constructor(pmAttr){
          super(pmAttr)
          this.gradeClassName = pmAttr.gradeClassName;
          this.favInstructor = pmAttr.favInstructor;
      }
      standUp(channel){
          return `${this.name} announces to ${channel},@channel standy times!`
      }
      debugsCode(student,subject){
          return `${this.name} debugs ${student.name}'s code on ${subject}`
      }
  }

  const perry = new ProjectManager({
      name: 'Perry A',
      location: 'Strong Island',
      age: 45,
      gender: 'male',
      favLanguage: 'JavaScript',
      specialty: 'Front-end',
      catchPhrase: `Don't worry about it...`,
      gradeClassName : "C11",
      favInstructor : 'Josh Nelly'
  })

  //Testing Instructor - Fred
  console.log(fred.name)
  console.log(fred.location)
  console.log(fred.age)
  console.log(fred.gender)
  console.log(fred.favLanguage)
  console.log(fred.specialty)
  console.log(fred.catchPhrase)
  console.log(fred.demo('hittin it raw'))
  console.log(fred.grade(bambam,'hittin it raw'))

  //Testing Student - Bam Bam 
  console.log(bambam.name)
  console.log(bambam.location)
  console.log(bambam.age)
  console.log(bambam.gender)
  console.log(bambam.previousBackground)
  console.log(bambam.className)
  console.log(bambam.favSubjects)
  
  //********** List is not really working *************
  bambam.listSubjects()
  console.log(bambam.PRAssignment('hitting it raw'))

  //Testing PM
  console.log(perry.gradeClassName)
  console.log(perry.favInstructor)
  console.log(perry.standUp('cs11'))
  console.log(perry.debugsCode(bambam,'hitting it raw'))