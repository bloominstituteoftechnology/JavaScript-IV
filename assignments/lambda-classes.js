// CODE here for your Lambda Classes
class Person {
    constructor(att){
        this.name = att.name;
        this.age = att.age;
        this.location = att.location;
        this.gender = att.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instAtt) {
        super(instAtt);
        this.specialty = instAtt.specialty;
        this.favLanguage = instAtt.favLanguage;
        this.catchPhrase = instAtt.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        let gradeChange = Math.trunc((Math.random()*10));
        student.grade = student.grade-gradeChange;
        console.log(`${student.name} receives a ${student.grade} on ${subject}`);
    }
}

class Student extends Person {
    constructor(studAtt){
        super(studAtt);
        this.previousBackground = studAtt.previousBackground;
        this.className = studAtt.className;
        this.favSubjects = studAtt.favSubjects;
        this.grade = studAtt.grade;
        this.willGraduate = studAtt.willGraduate;
    }
    listsSubjects(){
        console.log(this.favSubjects);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    willGraduate(student){
        if (student.grade > 70){
            student.willGraduate = true;
            console.log(`Congrats, ${student.name}, you're ready to graduate!`);
        } else {
            student.willGraduate = false;
            console.log(`So sorry, ${student.name}, you're not ready to graduate.`);
        }
    }
}

class ProjectManager extends Instructor{
    constructor(projAtt){
        super(projAtt);
        this.gradClassName = projAtt.gradClassName;
        this.favInstructor = projAtt.favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }
    debugsCode(StudentObj, subject){
        console.log(`${this.name} debugs ${StudentObj.name}'s code on ${subject}`)
    }
}

// End of classes, begin new objects

// ========= Test Person

const mrPerson = new Person({
    name: 'Mr. Person',
    location: 'Centerville',
    age: 52,
    gender: 'male'
  });


// ========= Instructors

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const sally = new Instructor({
    name: 'Sally',
    location: 'Washington, DC',
    age: 32,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Catchphrase!`
  });

  const mike = new Instructor({
    name: 'Mike',
    location: 'NYC',
    age: 49,
    gender: 'male',
    favLanguage: 'Assembly',
    specialty: 'All of it',
    catchPhrase: `You're not a REAL programmer!`
  });


  // ========= Students

  const josh = new Student({
    name: 'Josh',
    location: 'Pennsylvania',
    age: 35,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Please be quieter`,
    previousBackground: 'Farm manager',
    className: 'FSW15',
    favSubjects: ['CSS', 'HTML'],
    grade: 95,
  });

  const jude = new Student({
    name: 'Jude',
    location: 'Pennsylvania',
    age: 7,
    gender: 'male',
    favLanguage: 'German',
    specialty: 'Being loud',
    catchPhrase: `GRRRRRRR!`,
    previousBackground: 'Baby',
    className: 'Third grade',
    favSubjects: ['Science', 'History'],
    grade: 98
  });

  const ben = new Student({
    name: 'Ben',
    location: 'Indiana',
    age: 36,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    previousBackground: 'Optometrist',
    className: 'FSW15',
    favSubjects: ['Javascript'],
    grade: 85
  });


  // ========= Project Managers

  const grant = new ProjectManager({
    name: 'Grant',
    location: 'the moon',
    age: 5,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Sneak attacks',
    catchPhrase: `I'm hungry!`,
    gradClassName: 'Kindergarten'
  });

  const tia = new ProjectManager({
    name: 'Tia',
    location: 'Disney World',
    age: 4,
    gender: 'female',
    favLanguage: 'Spanish',
    specialty: 'Reading to my dolls',
    catchPhrase: `Daddy!`,
    gradClassName: 'Kindergarten'
  });
 
