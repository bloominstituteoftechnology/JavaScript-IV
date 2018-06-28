class Person {
    constructor (attributes) { 
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I'm from ${this.location}.`;
    } 
}

class Instructor extends Person {
    constructor (instAttributes) { 
        super(instAttributes);
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
      }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    } 
    grade (studentObj, subject) {
        return `${studentObj.name} receives a perfect score on ${subject}`;
    } 
    scoring (studentObj) {
        const randomNum = Math.random();
        const startingGrade = studentObj.grade;
        const scoreAmount = Math.floor(Math.floor(Math.random()*10));
        if (randomNum < 0.5) {
            studentObj.grade -= scoreAmount;
            return `${studentObj.name}'s grade has changed from a ${startingGrade} to a ${studentObj.grade}`;
        } else {
            studentObj.grade += scoreAmount;
            return `${studentObj.name}'s grade has changed from a ${startingGrade} to a ${studentObj.grade}`;
        }
    }
}

class Student extends Person {
    constructor (studentAttributes) { 
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
      }
    listsSubjects () {
        return this.favSubjects;
    } 
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    } 
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    } 
    graduate () {
        if (this.grade > 70) {
            return `${this.name} has above a 70% and is ready to graduate from Lambda School!`;
        }
        return `${this.name} has below a 70% and needs to complete more assignments`;
    }
}

class ProjectManager extends Instructor {
    constructor (pmAttributes) { 
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
      }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    } 
    debugsCode (studentObj, subject) {
        return `${this.name} debugs ${studentObj.name}'s code on ${subject}`;
    } 
}

const terrance = new Instructor({
    name: 'Terrance',
    location: 'Canada',
    age: 32,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Back-end',
    catchPhrase: `I'm not your buddy friend.`
  });

  const terrance = new Instructor({
    name: 'Phillip',
    location: 'Canada',
    age: 32,
    gender: 'male',
    favLanguage: 'Perl',
    specialty: 'Back-end',
    catchPhrase: `I'm not your friend guy.`
  });

  const eric = new Student({
    name: 'Eric',
    location: 'South Park',
    age: 8,
    gender: 'male',
    previousBackground: 'Just graduated 3rd grade',
    className: 'End User',
    favSubjects: ['Recess', 'Video Games', 'A-hole 101'],
    grade: 70
  });

  const kyle = new Student({
    name: 'Kyle',
    location: 'South Park',
    age: 8,
    gender: 'male',
    previousBackground: 'Just graduated 3rd grade',
    className: 'Full-Stack Web Dev',
    favSubjects: ['Math', 'English', 'Science'],
    grade: 95
  });

  const al = new ProjectManager({
    name: 'Al Gore',
    location: 'Washington DC',
    age: 70,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'Web Pages',
    catchPhrase: `ManBearPig is half man, half bear, and half pig.`,
    gradClassName: 'CS12',
    favInstructor: 'Josh (of course)'
  });

  const garrison = new ProjectManager({
    name: 'Mr Garrison',
    location: 'South Park',
    age: 55,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Front-end',
    catchPhrase: `You can say that again, Mr. Hat`,
    gradClassName: 'CS9',
    favInstructor: 'Mr Hat'
  });