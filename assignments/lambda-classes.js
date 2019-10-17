// CODE here for your Lambda Classes
class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
    }
    speak () {
        return `Hello, my name is ${this.name}, I am from ${this.location} `
    }
    
}

class Instructor extends Person {
    constructor(info) {
    super(info);
    this.specialty = info.specialty;
    this.favLanguage = info.favLanguage;
    this.catchPhrase = info.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    };

    grade (name, subject) {
        return `${name} recieves a perfect score on the ${subject} test`
    }

}

class Student extends Person {
    constructor(info)  {
    super(info);
    this.previousBackground = info.previousBackground;
    this.classname = info.classname;
    this.favSubjects = info.favSubjects;
    }
    listsSubjects () {
      this.favSubjects.forEach(function(subject){
      return console.log(subject);
     });
    }
  
    PRAssignment (subject2) {
        return `${this.name} has submitted a PR for ${subject2}.`;
  }
  
     sprintChallenge(subject3) {
         return `${this.name} has begun sprint challenge on ${subject3}.`;
     }
     
     grade(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return `${this.name}'s grade ` + Math.round(Math.random() * (max - min) + min);
    }
}

class ProjectManagers extends Instructor {
    constructor(info) {
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
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
    gradClassName: `CS1`, 
    className: `CS132`,
    favSubjects: ['math ','science ', 'history '],
    previousBackground: `Dishwasher`,
  });

  const kristen = new Student({
    name: 'Kristen',
    location: 'Greenbay',
    age: 19,
    favLanguage: 'CSS',
    specialty: 'front-end',
    gradClassName: `CS7`, 
    favInstructor: `Bill`,
    className: `CS135`,
    previousBackground: `Dishwasher`,
    favSubjects: ['science ', 'social studies ', 'computer science ']
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
  kristen.listsSubjects();
  console.log(kristen.PRAssignment(`CSS`));
  console.log(karen.sprintChallenge(`Javascript`));
  console.log(kevin.demo(`math`));
  console.log(rodger.grade(`Karen`, `science`));
  console.log(diane.standUp(`Diane`, `WEB25`));
  console.log(dani.debugsCode(`Jonathan`, `Javascript`)); 
  console.log(karen.grade(1, 100)) 