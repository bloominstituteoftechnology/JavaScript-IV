// CODE here for your Lambda Classes

// Person base-class
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}


class Instructor extends Person {
    constructor(uniqueProps){
        super(uniqueProps);
        this.specialty = uniqueProps.specialty;
        this.favLanguage = uniqueProps.favLanguage;
        this.catchPhrase = uniqueProps.catchPhrase;
    }
    demo (subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade (student, subject) {
        console.log(`${this.name} says ${student.name} receives a perfect score on ${subject}.`);
    }
}


class Student extends Person {
    constructor(moreUniqueProps){
        super(moreUniqueProps);
        this.previousBackground = moreUniqueProps.previousBackground;
        this.className = moreUniqueProps.className;
        this.favSubjects = moreUniqueProps.favSubjects;
    }
    listsSubjects () {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)

    }
}


class ProjectManager extends Instructor {
    constructor(evenMoreUnique){
        super(evenMoreUnique);
        this.gradClassName = evenMoreUnique.gradClassName;
        this.favInstructor = evenMoreUnique.favInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup times!​​​​​`)
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

const josh = new Instructor({
    name: 'Josh',
    location: 'Somewhere',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });


  const beej = new Instructor({
    name: 'Beej',
    location: 'New Mexico',
    age: 38,
    gender: 'male',
    favLanguage: 'All of them',
    specialty: 'Full-Stack',
    catchPhrase: `Don't forget the neighborhood`,
  });


  const eric = new ProjectManager({
    name: 'Eric',
    location: 'Alaska',
    age: 39,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `Gone, but never forgotten`
  });

  const dixie = new ProjectManager({
    name: 'Dixie',
    location: 'Everywhere',
    age: 40,
    gender: 'female',
    favLanguage: 'Angular',
    specialty: 'Front-end',
    catchPhrase: `Forgive and Forget`
  });

  const me = new Student({
    name: 'Erica',
    location: 'California',
    age: 41,
    gender: 'female',
    favLanguage: 'Love',
    specialty: 'Full-stack',
    catchPhrase: `Pressing forward, forgetting the past`,
    favSubjects: "Science, Math, Lit",
  });

  const joseph = new Student({
    name: 'Joseph',
    location: 'Greensboro',
    age: 42,
    gender: 'male',
    favLanguage: 'Braille',
    specialty: 'Full-stack',
    catchPhrase: `Forget me not`,
  });

josh.speak();
beej.demo("Computer Science");
josh.grade(joseph, "Geometry");
me.listsSubjects();
joseph.PRAssignment("Science");
me.sprintChallenge("Quilting");
eric.standUp("#cs12_hech");
dixie.debugsCode(me, "Art");
