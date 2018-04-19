// CODE here for your Lambda Classes
class Person {
    constructor(option){
        this.name = option.name;
        this.location = option.location;
        this.age = option.age;
        this.gender = option.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

class Instructors extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, topic) {
        return `​​​${student} receives a perfect score on ${topic}​​​.`
    }
 }

class Students extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
        // const list = favSubjects.map(data) => {

        // }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;    
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
 }

class ProjectManagers extends Instructors {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    // standUp(name, channel) {
    //     return `${name} announces to ${channel}, @${channel} standy times!​​​​​`
    // }
    debugsCode(nameOne, student, subject) {
        return `​​​${​​​​​nameOne} debugs ${student}\'s code on ${subject}.`
    }
 }

//************* instructors ****************
const fred = new Instructors({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
//   console.log(fred);
//   console.log(fred.speak());
// console.log(fred.demo("Python"));
// console.log(fred.grade('Sam', 'React'));

  const greg = new Instructors({
    name: 'Greg',
    location: 'LA',
    age: 35,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Front-end',
    catchPhrase: `Do it Yourself`
  });
//   console.log(greg);
// console.log(greg.demo("JS"));
// console.log(greg.grade('lea', 'Java'));


//*********** students *********************
  const lea = new Students({
    name: 'Lea',
    location: 'Orange',
    age: 28,
    gender: 'female',
    previousBackground: 'Lambda School',
    className: 'CS10',
    favSubjects: ['Html', 'CSS', 'JavaScript']
  });

  const dan = new Students({
    name: 'Dan',
    location: 'Greenfield',
    age: 20,
    gender: 'male',
    previousBackground: 'Lambda School',
    className: 'CS09',
    favSubjects: ['MySQL', 'Python', 'JavaScript']
  });

//*********** PMs ***************************
  const mark= new ProjectManagers ({
    name: 'Mark',
    location: 'Balonia',
    age: 25,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Triple Bla-bla`,
    gradClassName: 'CS10',
    favInstructor: 'Sean'
  });

//   console.log(mark);
//   console.log(mark.standUp('Jeff', 'CS10'));
  console.log(mark.debugsCode('Ken', 'lea', 'JS-I'))

  const poly = new ProjectManagers ({
    name: 'Poly',
    location: 'Slack',
    age: 1,
    gender: 'fe/male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Zero Bla-bla`
  });
//   console.log(poly);
//   console.log(poly.standUp('Dan', 'CS13'));
//   console.log(poly.debugsCode('Wean', 'Bob', 'JS-IV'))

//********** students *************************
// console.log(lea);
// console.log(lea.listsSubjects());
// console.log(lea.PRAssignment('JS'));
// console.log(lea.sprintChallenge('JS'));

// console.log(dan);
// console.log(dan.listsSubjects());
// console.log(dan.PRAssignment('JS-IV'));
// console.log(dan.sprintChallenge('Sprint-JS-IV'));