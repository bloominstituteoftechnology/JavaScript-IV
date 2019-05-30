// CODE here for your Lambda Classes


class Person {
    constructor (props) {
    this.name = props.name;
    this.age = props.age; 
    this.location = props.location; 
  }
  speak() {
      return `Hello, my name is ${this.name}, I am from ${this.location}.`
  }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage; 
        this.catchPhrase = attr.catchPhrase; 
  }

  demo (subject) {
      return `Today we are learning about ${subject}.`;
  }

  grade(student, subj) {
      return `${student} receives a perfect score on ${subj}.`;
  }
}


class Student extends Person {
    constructor(stud) {
        super(stud);
        this.previousBackground = stud.previousBackground;
        this.className = stud.className; 
        this.favSubjects = stud.favSubjects; 
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
    constructor(project) {
        super(project);
        this.gradClassName = project.gradClassName;
        this.favInstructor = project.favInstructor;
  }

  standUp(name, channel) {
    return `${name} announces to ${channel}, @channel standy times!`;
  }

  debugsCode (name, studobj) { 
      return `${name} debugs ${this.name}'s code on ${studobj}.`;
  }
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const carmen = new Instructor({
    name: 'Carmen',
    location: 'Anderson',
    age: 34,
    favLanguage: 'JavaScri',
    specialty: 'back-end',
    catchPhrase: `Yolo`,
    gradClassName: `CS1`, 
    favInstructor: `Sean`,
    className: `CS132`,
    favSubjects: `CSS`,
    previousBackground: 'telecom'
  });

  const kristie = new Student({
    name: 'Kristie',
    location: 'Greenville',
    age: 38,
    favLanguage: 'Java',
    specialty: 'front-end',
    catchPhrase: `I love Jesus`,
    gradClassName: `CS7`, 
    favInstructor: `Bill`,
    className: `CS135`,
    favSubjects: `HTML`,
    previousBackground: 'construction'
  });

 const diane = new ProjectManagers({
    name: 'Diane',
    location: 'Charlotte',
    age: 61,
    favLanguage: 'C++',
    specialty: 'back-end',
    catchPhrase: `Just do it`,
    gradClassName: `CS9`, 
    favInstructor: `Tommy`,
    className: `CS138`,
    favSubjects: `CSS`,
    previousBackground: 'sewing'
  });


  console.log(fred.name); //Fred
  console.log(carmen.age); //34
  console.log(carmen.specialty); //back-end

  console.log(carmen.speak()); //Hello, my name is Carmen, I am from Anderson.
  console.log(carmen.demo(`math`)); // Today we are learning about math. 
  console.log(carmen.grade(`Elliot`, `science`)); //Elliot receives a perfect score on science.

  console.log(kristie.listsSubjects()); //HTML
  console.log(kristie.PRAssignment(`reading`)); //Kristie has submitted a PR for reading.
  console.log(kristie.sprintChallenge(`science`)); // Kristie has begun sprint challenge on science.

  console.log(diane.standUp(`Diane`, `slack`)); //Diane announces to slack, @channel standy times!
  console.log(diane.debugsCode(`Jonathan`, `Javascript`)); //Jonathan debugs Diane's code on Javascript. 