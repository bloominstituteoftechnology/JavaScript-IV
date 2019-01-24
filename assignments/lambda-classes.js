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
const justin = new Student({
    name: 'Justin',
    location: 'New Bedford',
    age: 26,
    gender: 'male',
    previousBackground: 'Customer Service',
    className: 'WebPT4',
    favSubjects: ['Math', 'JavaScript', 'HTML', 'CSS']
  });

  const kyran = new ProjectManager({
    name: 'Kyran',
    location: 'California',
    age: 30,
    gender: 'female',
    gradClassName: 'CS14',
    favInstructor: 'Josh Knell',

  });

  const cam = new Instructor({
    name: 'Cam',
    location: 'Utah',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'teaching',
    catchPhrase: `When in doubt, search it out!`
  });

  
  console.log(cam.demo('JavaScript'));
  console.log(cam.grade(justin.name,'JavaScript'));
  console.log(justin.listsSubjects());
  console.log(justin.PRAssignment('JavaScript IV'));
  console.log(justin.sprintChallenge('JavaScript Fundamentals'));
  console.log(kyran.standUp('webpt4_kyran'));
  console.log(kyran.debugsCode(justin.name,'JavaScript'));