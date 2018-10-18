// CODE here for your Lambda Classes
class Person{
    constructor(info){
        this.name = info.name;
        this.age = info.age;
        this.location = info.location;
        this.gender = info.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person{
    constructor(info){
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
}

class Student extends Person{
    constructor(info){
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects
    }
    listsSubjects(){
        console.log(...this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor{
    constructor(info){
        super(info);
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
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
  const josh = new Instructor({
    name: 'josh',
    location: 'Newrock',
    age: 57,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Banjo`
  });

  const nick = new Student({
    name: 'Nick',
    location: 'sanctuary',
    age: 19,
    gender: 'male',
    favSubjects: ['css', 'javascript', 'html'],
    previousBackground: 'college',
    className: 'FSW15',
  });
  const joe = new Student({
    name: 'joe',
    location: 'Badlands',
    age: 37,
    gender: 'female',
    favSubjects: ['css', 'javascript', 'html'],
    previousBackground: 'none',
    className: 'FSW14',
  });
  const shoe = new Student({
    name: 'shoe',
    location: 'cubbard',
    age: 26,
    gender: 'male',
    favSubjects: ['css', 'javascript', 'html'],
    previousBackground: 'workshops',
    className: 'CS10',
  });

  const bilbo = new ProjectManagers({
    name: 'baggins',
    location: 'a hole',
    age: 17,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Closures',
    catchPhrase: `Mine`,
    gradClassName: 'CS1',
    favInstructor: 'josh',
  });
  const sam = new ProjectManagers({
    name: 'samwise',
    location: 'The shire',
    age: 27,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Back-end',
    catchPhrase: `thanks`,
    gradClassName: 'CS1',
    favInstructor: 'josh',
  });

  console.log(fred);
  console.log(nick);
  console.log(bilbo);
  fred.demo('javascript');
  fred.grade(nick,'javascript');
  josh.grade(joe,'javascript');
  nick.listsSubjects();
  joe.PRAssignment('javascript');
  nick.sprintChallenge('javacript');
  bilbo.debugsCode(joe, 'javascript');
  sam.standUp('after hours');
  bilbo.speak();
  shoe.speak();
  josh.speak();
  sam.grade(shoe, 'javacript');
 
  
