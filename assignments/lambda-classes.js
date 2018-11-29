// CODE here for your Lambda Classes

class Person {
    constructor(individual) {
    this.name = individual.name
    this.age = individual.age
    this.location = individual.location
    this.gender = individual.gender
    }
    
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}!`
    }
}

class Instructor extends Person {
    constructor(individual) {
        super(individual);
        this.specialty = individual.specialty;
        this.favLanguage = individual.favLanguage;
        this.catchPhrase = individual.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(stu) {
        super(stu);
        this.previousBackground = stu.previousBackground;
        this.className = stu.className;
        this.favSubjects = stu.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            return element;
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(name){
    super(name);
    this.gradClassName = name.gradClassName;
    this.favInstructor = name.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${this.name}_channel, @channel standy times!`
    }
    debugsCode(student, subject, ) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const Taylor = new Student({
    name: "Taylor",
    age: "28",
    location: "Fort Wort",
    gender: "F",
})

const Max = new Student({
    name: "Max",
    age: "22",
    location: "Los Angeles",
    gender: "M",
})

const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const Lester = new Instructor({
    name: 'Lester',
    location: 'New York',
    age: 34,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Eating food',
    catchPhrase: `Smell ya' later!`
  });

  
  const Vivian = new ProjectManager({
    name: 'Vivian',
    location: 'Mexico City',
    age: 48,
    gender: 'F',
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `Good job!`,
    gradClassName: 'CS13',
    favInstructor:'Mario',
  });

  const Liz = new ProjectManager({
    name: 'Liz',
    location: 'Spain',
    age: 29,
    gender: 'F',
    favLanguage: 'PHP',
    specialty: 'Back-end',
    catchPhrase: `Buen trabajo!`,
    gradClassName: 'CS2',
    favInstructor:'Linda',
  });

  console.log(Max.speak());
  console.log(Fred.specialty);
  console.log(Fred.demo('CSS'));
  console.log(Lester.grade(Max, 'Python'));
  console.log(Vivian.standUp('vivian_channel'));
  console.log(Vivian.debugsCode(Taylor, "JavaScript"));
  console.log(Liz.debugsCode(Max, "PHP"));
