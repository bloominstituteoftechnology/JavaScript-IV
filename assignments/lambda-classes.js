


// our DNA , this is like a base -class
class Person{
    constructor(props){
      this.name = props.name;
      this.age = props.age;
      this.location = props.location
    }

    speak(){
        // prototype
      return `Hello my name is ${this.name}, I am from ${this.location}`
    }
  }
  
//   Instructor  will inherit the person
    class Instructor extends Person{
      constructor(insProps){
        super(insProps); 
        this.specialty = insProps.specialty;
        this.favLanguage = insProps.favLanguage;
        this.catchPhrase = insProps.catchPhrase;
      }
      demo(subject){
        return `Today we are learin about ${subject}`
      }
      grade(name,subject){
        return `${name} receives  a perfect score on ${subject}`
      }
    }
  
  class Student extends Person{
    constructor(stuProps){
      super(stuProps);
      this.className = stuProps.className;
      this.favSubjects = stuProps.favSubjects;
    }
    lsitsSubjects(){
      this.favSubjects.forEach(lan => console.log(lan))
    }
    PRAssignment(subject){
      return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
      return `${this.name} has begun sprint challenge on ${subject}`
    }
  }
  
  class ProjectManager extends Instructor{
    constructor(pmProps){
      super(pmProps);
      this.gradClassName = pmProps.gradClassName;
      this.favInstructor = pmProps.favInstructor;
    }
    standUp(slackChannel){
      return `${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`
    }
    debugsCode(studentName,subject){
      return `${this.name} debugs ${studentName}'s code on ${subject} `
    }
  }
  
    let me = new ProjectManager({
      name:'Yasir',
      age:28,
      location: 'SF',
      specialty: 'Code Debugging',
      favLanguage: 'js',
      catchPhrase: 'Lets do it',
      gradClassName: 'WEP7PT',
      favInstructor: `JAshoa` 
  
    })
  