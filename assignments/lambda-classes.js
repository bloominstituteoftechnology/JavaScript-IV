// CODE here for your Lambda Classes

class Person {

    constructor(allPeps){
       this.name =allPeps.name;
       this.age = allPeps.age;
       this.location = allPeps.location;
       this.gender = allPeps.gender;
    }
    speak() {

        console.log(`Hello  my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {

    constructor(instructors){
        super(instructors);
        this.speciality = instructors.speciality;
        this.favLanguage = instructors.favLanguage;
        this.catchPhrase = instructors.catchPhrase;
    };

    demo(subject) {
       console.log(`Today we are learning about ${this.subject}`);

    }
    grade(student, subject)
    {
        console.log(`${students.name} recieves a perfect score on ${this.subject}`)
    }

}
class Students extends Person {
    constructor (student){
        super(student);
        this.prevBackground = student.prevBackground;
        this.className = student.className;
        this.favSubjects = student.favSubjects;  
    }
    listsSubjects(){
        console.log(`This list of subjects ${this.favSubjects}`)

    }
    PRAssignment(subject){
        console.log(`${this.name}, as submitted a PR for ${this.subject}`)
    }
    
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${this.subject} `)
    }

}

class ProjectManagers extends Instructor {

    constructor(pmInstructor){
        super(pmInstructor);
        this.gradClassName = pmInstructor.gradClassName;
        this.favInstructor = pmInstructor.favInstructor;
    }

    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standby times!`)
    }
      debugsCode(student, subject) {
          console.log(`${this.name} debugs ${student.name}'s code on ${this.subject}`)
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



  fred.speak();