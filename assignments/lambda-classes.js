// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak () {
        return `Hellp, my name is ${this.name}, I am from ${this.location} `
    }
    
}

class Instructor extends Person {
    constuctor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    };

    grade (subject) {
        return `${student.name} recieves a perfect score on ${subject}`
    }

}

class student extends Person {
    constructor(props)  {
    super(props);
    this.previousBackground = props.previousBackground;
    this.classname = props.classname;
    this.favSubjects = props.favSubjects;
    }
    listsSubjects () {
        return `${this.favSubjects}`;
    }
  
    PRAssignment (subject2) {
        return `${this.name} has submitted a PR for ${subject2}.`;
  }
  
     sprintChallenge(subject3) {
         return `${this.name} has begun sprint challenge on ${subject3}.`;
     }

} 

class ProjectManagers extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
  }

  standUp(name, channel) {
    return `${name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode (name, studobj) { 
      return `${name} debugs ${this.name}'s code on ${studobj}.`;
  }
}




