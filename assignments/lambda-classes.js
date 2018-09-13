// CODE here for your Lambda Classes
const subjectsArr = ['HTML', 'CSS', 'JavaScript'];

const healthArr = ['CPR', 'First-aid', 'Surgery'];

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
        this.gender = attributes.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person{
    constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }

    giveGrade(student) {
        student.grade += Math.floor((Math.random() * 40));
    }
}

class Student extends Person{
    constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
    }

    listsSubjects(subject) {
        for (let i = 0; i < subject.length; i++) {
            console.log(subject[i]);
        }        
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }

    graduate() {
        if (this.grade >= 70) {
            console.log(`Your Grade is: ${this.grade} you Graduate Lambda!!!`)
        } else {
            console.log(`Your Grade is: ${this.grade} Please study some more.`)
            return;
        }
    }
}

class ProjectManager extends Instructor{
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const josh = new Instructor({
    name: 'Josh',
    location: 'Utah',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Remember we could always just use Bannana's`
  });

  const joe = new Instructor({
    name: 'Joe',
    location: 'Somewhere',
    age: 50,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Study Study Study`
  });

  const shawn = new Student({
    name: 'Shawn',
    location: 'Los Angeles',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end & Back-end',
    catchPhrase: `Learn, rinse, repeat`,
    previousBackground: 'Unity',
    className: "FSW-14",
    favSubjects: subjectsArr,
    grade: 60
  });

  const jill = new Student({
    name: 'Jill',
    location: 'New York',
    age: 31,
    gender: 'female',
    favLanguage: 'English',
    specialty: 'Nurse',
    catchPhrase: `I'll fix you up!`,
    previousBackground: 'janitor',
    className: "Nursing-101",
    favSubjects: healthArr,
    grade: 60
  });

  const kam = new ProjectManager({
    name: 'Kam',
    location: 'San Fransico',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Let's see that code!`,
    gradClassName: 'CS13'
  });

  const darren = new ProjectManager({
    name: 'Darren',
    location: 'Maine',
    age: 37,
    gender: 'male',
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: 'CS12'
  });

// ---Speak logs

// josh.speak();
// joe.speak();
// shawn.speak();
// jill.speak();
// kam.speak();
// darren.speak();

// ---Instructor logs

// josh.demo('Closure');
// josh.grade('Shawn', 'Javascript IV');

// ---Student logs

// shawn.listsSubjects(subjectsArr);
// shawn.PRAssignment('Javascript IV');
// shawn.sprintChallenge('Javascript IV');

// jill.listsSubjects(healthArr);
// jill.PRAssignment('Javascript IV');
// jill.sprintChallenge('Javascript IV');

// ---Project Managers logs

// kam.standUp('#fsw14-kam');
// darren.standUp('#cs11');
// kam.debugsCode(shawn, 'JavaScript-IV');
// kam.debugsCode(jill, 'HTML-I');

// ---Stretch

kam.giveGrade(shawn);
shawn.graduate();