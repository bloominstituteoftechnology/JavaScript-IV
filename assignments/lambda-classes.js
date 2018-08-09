// CODE here for your Lambda Classes

class Person {
    constructor(yeet) {
        this.name = yeet.name;
        this.age = yeet.age;
        this.location = yeet.location;
        this.gender = yeet.gender;

    }
    speak() {
        return `Hello my name is ${this.name} , I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instruct) {
        super(instruct)
        this.specialty = instruct.specialty;
        this.favLanguage = instruct.favLanguage;
        this.catchPhrase = instruct.catchPhrase;

    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person{
constructor(studentAttr){
    super(studentAttr)
    this.previousBackground = studentAttr.previousBackground;
    this.classname = studentAttr.classname;
    this.favSubjects = studentAttr.favSubjects;
}
    listsSubjects() {
        return  `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

}


class ProjectManager extends Instructor {
    constructor(pmOptions) {
        super(pmOptions);
        this.gradClassName = pmOptions.gradClassName;
        this.favInstructor = pmOptions.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
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

  const bill = new Student({
    'name': 'bill',
    'age': '1000000',
    'location': 'Currently on the Sun',
    'gender': 'Unknown',
    'previousBackground': 'Unknown',
    'className': 'CS1000000000000000',
    'favSubjects': ['Python', 'Javascript', 'HTML/CSS']
});


  console.log(fred);
  console.log(bill);
  console.log(bill);
