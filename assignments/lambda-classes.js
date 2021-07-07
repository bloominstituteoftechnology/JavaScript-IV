//PERSON CLASS

class Person {
    constructor(things) {
        this.name = things.name;
        this.age = things.age;
        this.location = things.location;
        this.gender = things.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

const fred = new Person({
    name: 'Hank',
    location: 'somewhere',
    age: 37,
    gender: 'male',
  });

  const x = new Person({
    name: 'x',
    location: 'somewhere',
    age: 37,
    gender: 'female',
  });
console.log(fred);
console.log(x.speak());

//INSTRUCTORS

class Instructor extends Person {
    constructor(things) {
        super(things);
        this.specialty = things.specialty;
        this.favLanguage = things.favLanguage;
        this.catchPhrase = things.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score in ${subject}`;
    }
    assessment(student) {
        if (Math.floor(Math.random() * 100) + 1 > 30) {
            student.grade += 5;
            return `Your grade has gone up to ${student.grade}%`;
        }
        student.grade -= 5;
        return `You should study more next time! Your grade is now at ${student.grade}%`;
    }
}

const bob = new Instructor({
    name: 'bob',
    location: 'somewhere',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const lady = new Instructor({
    name: 'lady',
    location: 'elsewhere',
    age: 54,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'back-end',
    catchPhrase: `I hate children`
  });

  console.log(bob);
  console.log(lady.demo('math'));
  console.log(bob.grade(fred, 'math'));
  console.log(lady.speak());
  console.log(lady.gender);

//STUDENT CLASS EXTENSION

class Student extends Person {
    constructor(things) {
        super(things);
        this.previousBackground = things.previousBackground;
        this.className = things.className;
        this.favSubjects = things.favSubjects;
        this.grade = Math.floor(Math.random() * 100) + 1  
    }

    listsSubjects() {
        for (let i=0; i<this.favSubjects.length; i++) {
            console.log(`${this.favSubjects[i]}`);
        }
        return 'Those are my favorite subjects.';
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
    graduate(instructor) {
        if (this.grade >= 70) {return `Congratulations ${this.name}! You have graduated with a ${this.grade} from Lambda School!`}
        while (this.grade < 70) {
            instructor.assessment(this);
            console.log(`Keep your head up ${this.name}! You only need to increase your grade by ${70 - this.grade}%`);
        } return `Congratulations ${this.name}! You have graduated with a ${this.grade} from Lambda School!`;
    }
}

const gertrude = new Student({
    name: 'gertrude',
    location: 'elsewhere',
    age: 18,
    gender: 'female',
    previousBackground: 'juvenile detention',
    className: 'your mother',
    favSubjects: ['class', 'other class', 'one other class']
  });

  const cleetus = new Student({
    name: 'cleetus',
    location: 'country',
    age: 24,
    gender: 'male',
    previousBackground: 'coal miner',
    className: 'Class of 2041',
    favSubjects: ['mining', 'chewing tobacco', 'drinking hhhwhiskey']
  });

  console.log(gertrude);
  console.log(gertrude.graduate(bob));
  console.log(cleetus.graduate(lady));
  console.log(gertrude.listsSubjects());
  console.log(cleetus.PRAssignment('football'));
  console.log(cleetus.sprintChallenge('drinking'));

  //PM CLASS EXTENSION


class ProjectManager extends Instructor {
    constructor(stuff) {
        super(stuff);
        this.gradClassName = stuff.gradClassName;
        this.favInstructor = stuff.favInstructor;
    }

    standUp(channel) {
        return `${this.name} annouces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const jon = new ProjectManager({
    name: 'jon',
    location: 'library',
    age: 30,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'both-ends',
    catchPhrase: `I like to code!`,
    gradClassName: `we're smarter than you!`,
    favInstructor: `yo mama`,
  });

  const lauren = new ProjectManager({
    name: 'lauren',
    location: 'the west coast',
    age: 28,
    gender: 'female',
    favLanguage: 'english',
    specialty: 'all of the things',
    catchPhrase: `I'm missing ${Math.floor(Math.random() * 100) + 1} AirTables!`,
    gradClassName: `Lambda squad!`,
    favInstructor: `Josh Knell`,
  });

  console.log(lauren);
  console.log(jon.favInstructor);
  console.log(lauren.gradClassName);
  console.log(jon.debugsCode(gertrude, 'HTML'));
  console.log(lauren.speak());
  console.log(lauren.standUp('FSW15'));

  console.log(bob.assessment(gertrude));
  console.log(bob.assessment(gertrude));
  console.log(bob.assessment(gertrude));
  console.log(bob.assessment(gertrude));
  console.log(bob.assessment(gertrude));