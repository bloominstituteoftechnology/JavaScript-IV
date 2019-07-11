// CODE here for your Lambda Classes

class Person{
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instrusctor extends Person{
    constructor(instructorAttrs){
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grade(instructorAttrs, subject){
        return `${instructorAttrs.name} receives a perfect score on ${subject}`;
    }
}



class Student extends Person{
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }

    listsSubjects(){
        return this.favSubjects;
    }

    PRAssignment(studentAttrs, subject){
        return `${studentAttrs.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(studentAttrs, subject){
        return `${studentAttrs.name} has begun sprint challenge on ${subject}.`;
    }
}


class Project_Manager extends Instrusctor{
    constructor(PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standup times!​​​​​`;
    }

    debugsCode(PMAttrs, subject){
        return `${this.name} debugs ${PMAttrs.name}'s code on ${subject}`;
    }

}



const fred = new Person({
    name: 'Fred',
    age: 37,
    location: 'Bedrock'
  });


  const bob = new Student({
    name: 'Bob',
    age: 23,
    location: 'New York',
    previousBackground: 'Student',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const tom = new Instrusctor({
    name: 'Tom',
    age: 43,
    location: 'Maryland',
    specialty: 'redux',
    favLanguage: ['Python', 'CSS', 'JavaScript'],
    catchPhrase: "Don't forget the homies"
    
  });

  const latham = new Project_Manager({
    name: 'Latham',
    age: 44,
    location: 'Washington D.C',
    specialty: 'management',
    favLanguage: ['C', 'CSS', 'JavaScript'],
    catchPhrase: "Don't forget the homies",
    gradClassName: 'CS1',
    favInstructor: 'Sean'    
  });

  console.log(tom.grade(bob, "JavaScript"));
  console.log("Instructor Speaciality: " + tom.specialty);
  console.log(bob.PRAssignment(bob, "CSS"));
  console.log(bob.speak());
  console.log(tom.speak());
  console.log(latham.speak());

  console.log(latham.standUp("WEBPT8"));
  console.log(latham.debugsCode( tom, "JavaScript-IV"));
