// CODE here for your Lambda Classes
class Person{
    constructor(personParams){
        this.name = personParams.name;
        this.location = personParams.location;
        this.age = personParams.age;
        this.gender = personParams.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(instructorParams){
        super(instructorParams);
        this.favLanguage = instructorParams.favLanguage;
        this.specialty = instructorParams.specialty;
        this.catchPhrase = instructorParams.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about${subject}`
    }
    grade(student, subject){
        return `${student} received a perfect score on ${subject}`
    }
    changeGrade(student){
        let randomNumber = Math.round(((Math.random() - .5) * 200));
        student.grade = student.grade+randomNumber;
        return `${student.name}'s grade was changed by ${randomNumber}. The new total grade is ${student.grade}`
    }
}

class Student extends Person{
    constructor(studentParams){
        super(studentParams);
        this.previousBackground = studentParams.previousBackground;
        this.className = studentParams.className;
        this.favSubjects = studentParams.favSubjects;
        this.grade = studentParams.grade;
    }
    listsSubjects(...favSubjects){
        return `The students favorite subjects are ${this.favSubjects}`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    changeGrade(student){
        let randomNumber = Math.round(((Math.random() - .5) * 200));
        student.grade = student.grade+randomNumber;
        return `${student.name}'s grade was changed by ${randomNumber}. The new total grade is ${student.grade}`
    }
    graduate(student){
        if(student.grade>70){
            return `You've graduated`;
        } else {
            console.log(`You can not graduate with a grade below 70`);
            return this.changeGrade(student);
        }
    }
}

class ProjectManagers extends Instructor{
    constructor(PmParams){
        super(PmParams);
        this.gradClassName = PmParams.gradClassName;
        this.favInstructor = PmParams.favInstructor;
    }
    standup(channel){
        return `${this.name} announces to ${channel}, @channel standy times`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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

  const ted = new Student({
    name: 'Ted',
    location: 'tedrock',
    age: 37,
    gender: 'male',
    previousBackground: 'Going full ted',
    gradClassName: 'CS2',
    favSubjects: ['html', 'LESS', 'Javascript'],
    grade: 100,
  });

  const dan = new ProjectManagers({
    name: 'Dan',
    location: 'Danrock',
    age: 37,
    gender: 'male',
    gradClassName: 'CS2',
    favInstructor: 'Google',
  });

  console.log(fred.catchPhrase);
  console.log(fred.demo('CSS'));
  console.log(fred.grade('Tom', 'CSS'))
  console.log(ted.previousBackground);
  console.log(ted.listsSubjects(this.favSubjects));
  console.log(dan.favInstructor);
  console.log(dan.debugsCode('Tom', 'JavaScript'));
  console.log(fred.changeGrade(ted));
  console.log(ted.graduate(ted))