// CODE here for your Lambda Classes
class Person {
    constructor(personInfo) {
      this.name = personInfo.name;
      this.age = personInfo.age;
      this.location = personInfo.location;
      this.gender = personInfo.gender;
      
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorInfo) {
      super(instructorInfo);
      this.specialty = instructorInfo.specialty;
      this.favLanguage = instructorInfo.favLanguage;
      this.catchPhrase = instructorInfo.catchPhrase;
    }

    demo(subject) {
      console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
      console.log(`${student.name} recieves a perfect score on ${subject}`);
    }
  }

class Student extends Person {
    constructor(studentInfo) {
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.previousBackground;
        this.favSubjects = studentInfo.favSubjects;
    }

    listsSubjects() {
        console.log(this.favSubjects[0]);
        console.log(this.favSubjects[1]);
        console.log(this.favSubjects[2]);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenege(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(pmInfo) {
        super(pmInfo);
        this.gradClassName = pmInfo.gradClassName;
        this.favInstructor = pmInfo.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
    
}

const instructorBobby = new Instructor({
    name: 'Bobby',
    age: 31,
    location: 'Canada',
    gender: 'M',
    specialty: 'Redux',
    favLanguage: 'JavaScript',
    catchPhrase: 'Yeet Yeet'
})

const instructorAsh = new Instructor({
    name: 'Ash',
    age: 58,
    location: 'Canada',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'Beep Beep'
})

const instructorKeil = new Instructor({
    name: 'Keil',
    age: 36,
    location: 'Sweden',
    gender: 'M',
    specialty: 'Vue',
    favLanguage: 'Python',
    catchPhrase: 'Tweet Tweet'
})

const studentPam = new Student({
    name: 'Pam',
    age: 21,
    location: 'U.S',
    gender: 'F',
    previousBackground: 'University of Somewhere',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript']
})

const studentGee = new Student({
    name: 'Gee',
    age: 20,
    location: 'Canada',
    gender: 'F',
    previousBackground: 'University of Yeet',
    className: 'CS182',
    favSubjects: ['Python', 'React', 'JavaScript']
})

const studentLee = new Student({
    name: 'Lee',
    age: 18,
    location: 'France',
    gender: 'M',
    previousBackground: 'Cashier (No experience)',
    className: 'CS101',
    favSubjects: ['Html', 'SQL', 'C++']
})

const pmJohn = new ProjectManager({
    name: 'John',
    age: 23,
    location: 'U.S',
    gender: 'M',
    specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'Sheep sleep',
    gradClassName: 'CS13',
    favInstructor: 'Bobby'
})

const pmFino = new ProjectManager({
    name: 'Fino',
    age: 20,
    location: 'Brazil',
    gender: 'M',
    specialty: 'Redux',
    favLanguage: 'C++',
    catchPhrase: 'Meet Meet',
    gradClassName: 'CS13',
    favInstructor: 'Keil'
})

const pmEmery = new ProjectManager({
    name: 'Emery',
    age: 23,
    location: 'U.S',
    gender: 'M',
    specialty: 'node',
    favLanguage: 'Java',
    catchPhrase: 'Creep Creep',
    gradClassName: 'CS12',
    favInstructor: 'Ash'
})

//PM TESTS
pmEmery.demo('React');
pmEmery.debugsCode(studentPam, 'React');
pmEmery.grade(studentPam, 'Vue');
pmEmery.speak()
pmEmery.standUp('fsw-13');

pmFino.demo('React');
pmFino.debugsCode(studentPam, 'React');
pmFino.grade(studentPam, 'Vue');
pmFino.speak()
pmFino.standUp('fsw-13');

pmJohn.demo('React');
pmJohn.debugsCode(studentPam, 'React');
pmJohn.grade(studentPam, 'Vue');
pmJohn.speak()
pmJohn.standUp('fsw-13');

//STUDENT TESTS

studentPam.listsSubjects();
studentPam.PRAssignment('React');
studentPam.speak()
studentPam.sprintChallenege('React');

studentGee.listsSubjects();
studentGee.PRAssignment('React');
studentGee.speak()
studentGee.sprintChallenege('React');

studentLee.listsSubjects();
studentLee.PRAssignment('React');
studentLee.speak()
studentLee.sprintChallenege('React');

//INSTRUCTOR TESTS

instructorAsh.demo('React');
instructorAsh.grade(studentPam, 'Vue');
instructorAsh.speak()

instructorBobby.demo('React');
instructorBobby.grade(studentPam, 'Vue');
instructorBobby.speak()

instructorKeil.demo('React');
instructorKeil.grade(studentPam, 'Vue');
instructorKeil.speak()




