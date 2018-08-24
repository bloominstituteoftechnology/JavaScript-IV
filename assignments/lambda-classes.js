class Person {
    constructor (personProps) {
        this.name = personProps.name;
        this.age = personProps.age;
        this.location = personProps.location;
        this.gender = personProps.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(professorProperties) {
        super(professorProperties);
        this.specialty = professorProperties.specialty;
        this.favLanguage = professorProperties.favLanguage;
        this.catchPhrase = professorProperties.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

    reviewSprint(student) {
      if (student.grade < 70) {
        let addOrSubtract = Math.random();
        if (addOrSubtract < 0.5) {
          student.grade = Math.round(student.grade - (addOrSubtract * 10));
        }
        else {
          student.grade = Math.round(student.grade + (addOrSubtract * 10));
        }
        console.log(`The results are in...and ${student.name}'s current grade is ${student.grade}!`);
        student.graduate(this);
      }
      else {
          console.log(`No more Sprints! ${student.name} is ready to leave Lambda!`)
          student.graduate(this);
      }
    }
}

class Student extends Person {
    constructor(pupilProperties) {
        super(pupilProperties);
        this.previousBackground = pupilProperties.previousBackground;
        this.className = pupilProperties.className;
        this.favSubjects = pupilProperties.favSubjects;
        this.grade = pupilProperties.grade;
    }

    listsSubjects() {
      console.log(this.favSubjects.toString())
    }

    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
      console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }

    graduate(instructor) {
        if (this.grade > 70) {
            console.log(`${this.name} is officially a graduate of Lambda School!!`)
        }
        else {
            console.log(`${this.name} is not quite ready to leave Lambda yet...${instructor.name} has to grade another Sprint!`);
            instructor.reviewSprint(this);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMProperties) {
        super(PMProperties);
        this.gradClassName = PMProperties.gradClassName;
        this.favInstructor = PMProperties.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new ProjectManager({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
})

const bruce = new Student({
    name: 'Bruce',
    location: 'Arizona',
    age: 28,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'back-end',
    catchPhrase: `Don't forget the bro-mies`,
    favSubjects: ['HTML','CSS', 'JavaScript'],
    grade: 50
})

bruce.graduate(fred);