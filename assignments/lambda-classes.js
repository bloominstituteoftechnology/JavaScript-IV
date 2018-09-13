// CODE here for your Lambda Classes
//lambda people

class Person {
    constructor(people){
        this.name = people.name;
        this.age = people.age;
        this.location= people.location;
        this.gender = people.gender;
    }

    //Method

    phrase() {
        return(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}//end of person


//instructor
class Instructor extends Person {
    constructor(teacher){
        super(teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
    }

    //method

    demo(subject){
        return (`Today we are learning about ${subject}`)
    }

    grade(student, subject){
        return(`${student.name} receives a perfect score on ${subject}`)
    }

}// end of Instructor

//student
class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
}

//method

    listsSubjects() {
        return (`My favorite subjects are ${this.favSubjects} `)
    }

    prAssignment(student, subject) {
        return (`${student.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(student, subject){
        return(`${student.name} has begun springt challenge on ${subject}`)
    }
}//end of Student


//PM
class ProjectManagers extends Instructor {
    constructor(pm){
        super(pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }

    //methods

    standUp(slackChannel){
        return(`${this.name} Hey ${slackChannel}, @channel standy times!`)
    }

    debugsCode(student, subject) {
        return(`${this.name} degugs ${student.name}'s code on ${subject}`)
    }
}// end of PM

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  const steve = new Student({
    name: 'Steve',
    location: 'Bedrock',
    age: 33,
    gender: 'male',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    previousBackground: 'homebuilder',
    className: 'FSW14',
  });

  const alex = new ProjectManagers({
    name: 'Alex',
    location: 'NYC',
    age: 27,
    gender: 'Female',
    favLanguage: 'html',
    specialty: 'backend',
    catchPhrase: `You say just I say how high`,
    gradClassName: 'CS1',
    favInstructor: 'Fred',
  });


  console.log(fred.age); 
  console.log(fred.demo('math'));
  console.log(steve.listsSubjects());
  console.log(steve.previousBackground);
  console.log(fred.grade(fred, 'math'));
  console.log(alex.age); 
  console.log(steve.age); 
  console.log(alex.debugsCode(steve, 'html')); 
  console.log(alex.standUp('fsw14')); 
