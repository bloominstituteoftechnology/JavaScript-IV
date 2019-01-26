// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name
        this.age = attributes.age
        this.location = attributes.location
        this.gender = attributes.gender
    }
};


class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.speciality = attributes.speciality
        this.favLanguage = attributes.favLanguage
        this.catchPhrases = attributes.catchPhrases
    }

    demo(subject) {
        return `Today we are learning ${subject}.`
    }

    grade(studentName, subject) {
        return `${studentName} recieves a perfect score on ${subject}`
    }
};


class Student extends Instructor {
    constructor(attributes) {
        super(attributes)
        this.previousBackground = attributes.previousBackground
        this.className = attributes.className
        this.favSubjects = attributes.favSubjects
     }

     listsSubjects() {
        return this.favSubjects
    }

    PRAssignment(subject) { 
        return `${this.name} has submitted a PR for ${subject}`
    }

    sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`
    }
};

class ProjectManager extends Student {
    constructor(attributes) {
        super(attributes)
        this.gradClassName = attributes.gradClassName
        this.favInstructor = attributes.favInstructor
    }
        standUp(channel) {
            return `${this.name} announces to ${channel}, @channel standy times!`
        }

        debugsCode(studentName, subject) {
            return `${this.name} debugs ${studentName}'s code on ${subject}.`
        }
    };
const Tony = new Student({
    name: 'Tony',
    location: 'Atlanta',
    age: 24,
    gender: 'male',
    previousBackground: 'retail',
    className: 'WebPT4',
    favSubjects: ['Python', 'JavaScript', 'HTML', 'CSS']
  });

  const chance = new ProjectManager({
    name: 'chance',
    location: 'i dont know lol',
    age: 25,
    gender: 'male',
    gradClassName: 'CS14',
    favInstructor: 'Cam Pope',

  });

  const Cam = new Instructor({
    name: 'Cam',
    location: 'Unknown',
    age: 28,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'teaching',
    catchPhrase: `keep going!`
  });


  console.log(Cam.demo('JavaScript'));
  console.log(Cam.grade(Tony.name,'JavaScript'));
  console.log(Tony.listsSubjects());
  console.log(Tony.PRAssignment('JavaScript IV'));
  console.log(Tony.sprintChallenge('JavaScript Fundamentals'));
  console.log(chance.standUp('webpt4_chance'));
  console.log(chance.debugsCode(Tony.name,'JavaScript'));