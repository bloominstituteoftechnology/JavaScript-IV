// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}


class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(student) {
        student.favSubjects.forEach(function(element) {
            console.log(element);
        });
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}


class PManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standUp times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


const Joe = new Person({
    name: 'Joe',
    age: 35,
    location: 'Mission, TX'
  });

const Rick = new Person({
    name: 'Rick',
    age: 33,
    location: 'Houston, TX'
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const Homer = new Instructor({
    name: 'Homer',
    location: 'Springfield',
    age: 40,
    gender: 'male',
    favLanguage: 'English',
    specialty: 'Assembly',
    catchPhrase: `Doh!`
  });

  const John = new Student({
    name: 'John',
    age: 35,
    location: 'Austin, TX',
    previousBackground: "none",
    className: "CS10",
    favSubjects: ["HTML", "CSS", "Javascript", "React"]
  });

  const Mary = new Student({
    name: 'Mary',
    age: 26,
    location: 'San Antonio, TX',
    previousBackground: "BS in Math",
    className: "CS10",
    favSubjects: ["Python", "Machine Learning", "Deep-Learning", "Tensorflow"]
  });

  const Marge = new PManager({
    name: 'Marge',
    location: 'Springfield',
    age: 40,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Machine Learning',
    catchPhrase: 'Good Job!',
    gradClassName: 'CS50',
    favInstructor: 'google.com'
  });

  const Larry = new PManager({
    name: 'Larry',
    location: 'Springfield',
    age: 50,
    gender: 'male',
    favLanguage: 'Ruby',
    specialty: 'REST API',
    catchPhrase: 'And thats how you do it my friends.',
    gradClassName: 'CS5K',
    favInstructor: 'cortana'
  });


  console.log(Joe.speak());
  console.log(Rick.speak());
  console.log(fred.demo('HTML and CSS'));
  console.log(fred.grade(John, 'Python'));
  console.log(Homer.demo('nuclear reactors'));
  console.log(Homer.grade(Mary, 'Assembly'));
  console.log(John.listsSubjects(John));
  console.log(John.PRAssignment('Flex-Box'));
  console.log(John.sprintChallenge('Javascript-Fundamentals'));
  console.log(Mary.listsSubjects(Mary));
  console.log(Mary.PRAssignment('Bootstrap-4.0'));
  console.log(Mary.sprintChallenge('Responsive-Web-Design'));
  console.log(Marge.standUp('CS12345'));
  console.log(Marge.debugsCode(John, 'Javascript III'));
  console.log(Larry.standUp('CS01'));
  console.log(Larry.debugsCode(Mary, 'Javascript I'));