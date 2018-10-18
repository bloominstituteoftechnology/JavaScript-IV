// CODE here for your Lambda Classes

// base-class Person
class Person {
    constructor(properties){
        this.name = properties.name;
        this.age = properties.age;
        this.location = properties.location;
        this.gender = properties.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}
// first child: instructor
class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we will be leaning about ${subject}`);
    }
    grade(student,subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
// second child: student
class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }
    listSubjects() {
        console.log(`${this.name}'s favorite subjects are:`);
        this.favSubjects.forEach(element => {console.log(element)});
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun the sprint challenge on ${subject}`);
    }
}
// first grandchild - child of instructor - Project Manager
class ProjectManager extends Instructor {
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student,subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
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
  const barney = new Student({
    name: 'Barney',
    location: 'Bedrock',
    age: 34,
    gender: 'male',
    previousBackground: 'Bronto-Crane Operator',
    className: 'FSW15',
    favSubjects: [`HTML`,`CSS`,`JavaScript`]
  });
  const betty = new ProjectManager({
    name: 'Betty',
    location: 'Bedrock',
    age: 32,
    gender: 'female',
    gradClassName: 'CS13',
    favInstructor: 'Big Knell'  
  })

  barney.speak();
  barney.listSubjects();
  fred.grade(barney,'CSS');
  fred.demo('JavaScript Classes');
  barney.sprintChallenge('Javascript Classes');
  betty.grade(barney,'JS Classes');
  betty.standUp(`Betty's Channel`);
