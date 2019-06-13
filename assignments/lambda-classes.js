// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes.




// Person parent class

class Person {
    constructor(props) {
        this.name=props.name;
        this.age=props.age;
        this.location=props.location;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`)
    };
}
// Instructor- child of Person

class Instructor extends Person {
    constructor(props) {
        super(props);
        this.specialty= props.specialty;
        this.favLanguage= props.favLanguage;
        this.catchPhrase= props.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}
// Student is a child of Person

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground= props.previousBackground;
        this.className= props.className;
        this.favSubjects= props.favSubjects;
    }
    listsSubjects(){
        console.log(`students favorite subjects: ` + this.favSubjects);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// Project Manager is a child of Instructors

class ProjectManagers extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName= props.gradClassName;
        this.favInstructor= props.favInstructor;            
    }
    standup(slackChannel){ 
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}
// 3 instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  fred.speak();

const wilma = new Instructor({
    name: 'Wilma',
    location: 'Bedrock',
    age: 29,
    favLanguage: 'C++',
    specialty: 'Functional Programming',
    catchPhrase: 'why are we here?'
});

  wilma.speak();

  const barney = new Instructor({
    name: 'Barney',
    location: 'Bedrock',
    age: 32,
    favLanguage: 'french',
    specialty: 'Stealing Fruity Pebbles',
    catchPhrase: 'GIMMI THOSE PEBBLES'
});

  fred.speak();
  fred.demo('french');
  

  //3 students

  const luis = new Student({
      name: 'Lou',
      age: 32,
      location: 'BummerTown, USA',
      previousBackground: 'Pizza slave',
      className: 'Web21',
      favSubjects: ['LESS','JS']
  });
  fred.grade(luis, 'french');

  const gunz = new Student({
      name: 'Morgan F.',
      age: 25,
      location: 'basement apartment',
      previousBackground: 'customer service rep',
      className: 'The school of life',
      favSubjects: ['sticking it to the man', 'history', 'math']
  });

  const theKid = new Student({
      name: 'Lorelei Frozman',
      age: .5,
      location: 'mom and dads house',
      previousBackground: 'embryo',
      className: 'the MEAN streets',
      favSubjects: ['formula', 'clean diapies', 'my mom', 'being thrown in the air', 'spitting up on dads favorite shirts']
  });

  // project managers

  const darren = new ProjectManagers({
      name: 'Darren R.',
      age: 'idk, 27?',
      location: 'eastern-ish seaboard',
      gradClassName: '',
      favInstructor: 'Ryan'
  });

  const anotherPm = new ProjectManagers({
      name: 'Susana Cabana',
      age: 159,
      location: 'the after place',
      gradClassName: 'web1',
      favInstructor: 'Dr. Horrible'
  })

  const lastPm = new ProjectManagers({
      name:'Future Man',
      age:27,
      location:'somewhere in the andromeda galaxy',
      gradClassName:'web2020',
      favInstructor:'Sith Lord Drakus'
  });


  //testing students

  luis.listsSubjects();
  gunz.PRAssignment('JavaScript');
  theKid.sprintChallenge('crawling');

  //testing PMs
  //standup(slackChannel) debugsCode(student, subject)

  darren.debugsCode(luis, luis.favSubjects[0]); //thank you Darren
  anotherPm.standup('Web2020');
  lastPm.debugsCode(gunz, 'sports ball');
  

