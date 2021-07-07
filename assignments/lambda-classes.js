// CODE here for your Lambda Classes
class Person{
    constructor(human){
        this.name = human.name;
        this.age = human.age;
        this.location = human.location;
        this.gender = human.gender
    }
    speak(){
        return (`hello my name is ${this.name} and i am from ${this.location}`)
    }
};

class Instructor extends Person{
    constructor(people){
        super(people)
        this.specialty = people.specialty
        this.favLanguage = people.favLanguage
        this.catchPhrase = people.catchPhrase
    }
    demo(){
        console.log(`Today we are learning about ${this.subject}`)
    }
    grade(){
        console.log(`${this.name} receives a perfect score on ${this.subject}`)
    }
};

class Student extends Instructor{
    constructor(student){
    super(student)
    this.className = student.className
    this.favSubjects = student.favSubjects
    }
    listsSubjects(){
        console.log(this.favSubjects)
    }
    PRAssignment(){
       console.log (`${this.name} has submitted a PR for ${this.subject}`)
    }
}
class ProjectManagers extends Student{
  constructor(pm){
    super(pm)
    this.gradClassName = pm.gradClassName
    this.favInstructor = pm.favInstructor
  }
  standUp(){
    console.log(`${this.name} announces to channel @channel standy times!​​​​​`)
  }
  debugsCode(){
    console.log(`${this.name} debugs ${this.name}'s code on ${this.subject}`)
  }
}

