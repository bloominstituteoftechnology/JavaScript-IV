// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
};


 class Instructor extends Person {
    constructor(attributes) {
        super(attributes)
        this.speciality = attributes.speciality;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrases = attributes.catchPhrases;
    }

     demo(subject) {
        return `Today we are learning ${subject}.`;
    }

     grade(studentName, subject) {
        return `${studentName} recieves a perfect score on ${subject}`;
    }
};


 class Student extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
     }

      listsSubjects() {
        return this.favSubjects;
    }

     PRAssignment(subject) { 
        return `${this.name} has submitted a PR for ${subject}`;
    }

     sprintChallenge(subject) {
        return `${this.name} has begun a sprint challenge on ${subject}`;
    }
};

 class ProjectManager extends Student {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
        standUp(channel) {
            return `${this.name} announces to ${channel}, @channel standy times!`;
        }

         debugsCode(studentName, subject) {
            return `${this.name} debugs ${studentName}'s code on ${subject}.`;
        }
    };
const Fred = new Student({
    name: 'Fred',
    location: 'Bedrock',
    age: 42,
    previousBackground: 'Tutor',
    className: 'WebPT7',
    favSubjects: ['Python', 'JavaScript', 'HTML', 'CSS']
  });

   const Jeff = new ProjectManager({
    name: 'Jeff',
    location: 'Online',
    age: 25,
    gradClassName: 'WebPT7',
    favInstructor: 'Cam Pope',

   });

   const Cam = new Instructor({
    name: 'Cam',
    location: 'Lambda School',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'teaching',
    catchPhrase: `I'll be back!!!`
  });


   console.log(Cam.demo('JavaScript'));
  console.log(Cam.grade(Fred.name,'JavaScript'));
  console.log(Fred.listsSubjects());
  console.log(Fred.PRAssignment('JavaScript IV'));
  console.log(Fred.sprintChallenge('JavaScript Fundamentals'));
  console.log(Jeff.standUp('webpt7_chance'));
  console.log(Jeff.debugsCode(Fred.name,'JavaScript'));