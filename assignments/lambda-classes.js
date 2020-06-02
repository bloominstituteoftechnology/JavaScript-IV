// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location} `
    }
    
}

class Instructor extends Person {
    constructor(people) {
    super(people);
    this.specialty = people.specialty;
    this.favLanguage = people.favLanguage;
    this.catchPhrase = people.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    };

    grade (name, subject) {
        return `${name} recieves a perfect score on the ${subject} test`
    }

}

class Student extends Person {
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

const rodger = new Instructor({
    name: 'Rodger',
    location: 'New York',
    age: 26,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Milirock`
  });

  const kevin = new Instructor({
    name: 'Kevin',
    location: 'New Jeresy',
    age: 33,
    favLanguage: 'JavaScript',
    specialty: 'back-end',
    catchPhrase: `Peace of cake`
  });

  const karen = new Student({
    name: 'Karen',
    location: 'texas',
    age: 30,
    favLanguage: 'C#',
    specialty: 'back-end',
    catchPhrase: `One at a time`,
    gradClassName: `CS1`, 
    className: `CS132`,
    favSubjects: `CSS`,
    previousBackground: `Dishwasher`,
  });

  const kristen = new Student({
    name: 'Kristen',
    location: 'Greenbay',
    age: 19,
    favLanguage: 'CSS',
    specialty: 'front-end',
    catchPhrase: `I love Jesus`,
    gradClassName: `CS7`, 
    favInstructor: `Bill`,
    className: `CS135`,
    previousBackground: `Dishwasher`,
    favSubjects: `Math`
  });

 const dani = new ProjectManagers({
    name: 'Dani',
    location: 'Charlotte',
    age: 41,
    favLanguage: 'C++',
    specialty: 'back-end',
    catchPhrase: `Just do it`,
    gradClassName: `CS9`, 
    favInstructor: `Tommy`,
    className: `CS138`,
    favSubjects: `CSS`,
    previousBackground: 'sewing'
  });

  const diane = new ProjectManagers({
    name: 'Diane',
    location: 'Vegas',
    age: 35,
    favLanguage: 'C#',
    specialty: 'back-end',
    catchPhrase: `That was easy`,
    gradClassName: `CS9`, 
    favInstructor: `Hilary`,
    className: `CS138`,
    favSubjects: `C#`,
    previousBackground: 'stripping'
  });

  console.log(diane.speak());
  console.log(kristen.listsSubjects());
  console.log(kristen.PRAssignment(`CSS`));
  console.log(karen.sprintChallenge(`Javascript`));
  console.log(kevin.demo(`math`));
  console.log(rodger.grade(`Karen`, `science`));
  console.log(diane.standUp(`Diane`, `slack`));
  console.log(dani.debugsCode(`Jonathan`, `Javascript`));  
  

