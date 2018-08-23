// CODE here for your Lambda Classes
class person {
    constructor(personObj){
      this.name = personObj.name;
      this.age = personObj.age;
      this.location = personObj.location;
      this.gender = personObj.gender;
    }
    speak() {
      return `Hello my name is ${this.name} , i am from ${this.location}`
    }
  }
  class Instructor extends person {
    constructor(inst){
      super(inst);
      this.specialty = inst.specialty;
      this.favLanguage = inst.favLanguage;
      this.catchPhrase = inst.catchPhrase;
    }
    demo(subject){
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject){
      return `'${student.name} receives a perfect score on ${subject}'`
    };
  }
  class Student extends Instructor{
    constructor(stdnt){
      super(stdnt);
      this.previousBackground = stdnt.previousBackground;
      this.className = stdnt.className;
      this.favSubjects = stdnt.favSubjects;
    }
    listsSubjects(){
      return `${this.name}'s subjects are ${this.favSubjects.join(', ')}`;
    }
    PRAssignment (subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject){
      return `${this.name} has begun sprint challenge on ${subject}`;
    }
  }
  class projectManager extends Student{
    constructor(pm){
      super(pm);
      this.gradClassName = pm.gradClassName;
      this.favInstructor = pm.favInstructor;
    }
    standUp(channel){
     return `${this.name} announces to {channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
  }
  //Instructors
  const Dan = new Instructor({
  name: 'Dan',
  location:'Salt Lake City',
  age: 33,
  gender: 'male',
  favLanguage: 'javaScript',
  specialty: 'web design',
  catchPhrase: 'Stay Classy!',
  });
  
  const Joe = new Instructor({
    name: 'Joe',
    location: 'Herriman',
    age: 27,
    gender: 'male',
    favLanguage: 'Swift',
    specialty: 'App Development',
    catchPhrase: 'You are over thinking it',
  });
  //students
    const Griffin = new Student({
      name: 'Griffin',
      location: 'Tooele',
      age: 27,
      gender: 'male',
      previousBackground: 'sales',
      className: 'CSPT2',
      favSubjects: ['javaScript', 'IOS', 'HTML'],
    });
  
    const Austin = new Student({
      name:'Austin',
      location: 'Kaysville',
      age: 28,
      gender: 'male',
      previousBackground: 'stock boy',
      className: 'CSPT2',
      favSubjects: ['CSS', 'HTML', 'javaScript'],
    });
  
  // Project Managers
    
  const Raymond = new projectManager({
      name: 'Raymond',
      location: 'Houston',
      age: 26,
      gender: 'Male',
      favLanguage: 'Python',
      specialty: 'web design',
      catchPhrase: 'lets do this!',
      gradClassName: 'CS16',
      favInstructor: 'Dan'
  });
  
  const Moises = new projectManager({
      name: 'Moises',
      location: 'Orlando',
      age: 26,
      gender: 'Male',
      favLanguage: 'Javascript',
      specialty: 'Design',
      catchPhrase: 'You can do it!',
      gradClassName: 'CS7',
      favInstructor: 'Joe'
  });
  
  
  console.log(Griffin.demo('IOS'));
  console.log(Joe.grade(Griffin, 'javaScript'));
  console.log(Griffin.listsSubjects());
  console.log(Austin.PRAssignment('HTMl'));
  console.log(Austin.sprintChallenge('CSS'));
  console.log(Raymond.standUp('cs16'));
  console.log(Moises.debugsCode(Austin, 'IOS'));
  