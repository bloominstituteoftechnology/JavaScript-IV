class Person{
    constructor(attributes){
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
    }
    speak(){
      console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`)
    }
};




class Instructors extends Person{
    constructor(iattributes){
      super(iattributes);
      this.specialty = iattributes.specialty;
      this.favLanguage = iattributes.favLanguage;
      this.catchPhrase = iattributes.catchPhrase;
    }
    demo(subject){
      console.log(`Today, we are learning about ${subject}`)
    }
    grade(student, subject){
      console.log(`${student.name} receives a perfect score on ${subject}`)
    }
    changeGrade(student){
        console.log(`This student's current grade is ${student.grade - Math.random()}`);
     }
};



class Students extends Person{
    constructor(sattributes){
      super(sattributes);
      this.previousBackground = sattributes.previousBackground;
      this.className = sattributes.className;
      this.favSubjects = sattributes.favSubjects;
      this.grade = sattributes.grade;
    }
    listsSubjects(){
        console.log(`My favorite subjects are ${this.favSubjects}`)
    }
    PRAssignment(subject){
        console.log(`${this.name}  has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    graduate(){
      if (this.grade > 95){
        console.log(`${this.name} is ready for graduation!`)
      } else {
        console.log(`${this.name} needs to increase their grade by ${95 - this.grade} in order to graduate.`)
      }
    }
};  




class PM extends Instructors{
    constructor(pmattributes){
      super(pmattributes);
      this.gradClassName = pmattributes.gradClassName;
      this.favInstructor = pmattributes.favInstructor;
    }
    standUp(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}@channel stand-up times!`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }

};

// INSTRUCTORS

const smith = new Instructors({
    name: 'Professor Smith',
    location: 'Utah',
    age: 37,
    gender: 'female',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const miss = new Instructors({
    name: 'Miss Scarlet',
    location: 'Ohio',
    age: 33,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Data Structures',
    catchPhrase: `Professor Plum did it!`
  });

  const chris = new Instructors({
    name: 'Professor Chris',
    location: 'Bedrock',
    age: 56,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'UX Design',
    catchPhrase: `Don't make it ugly`
  });

//   PM's

const emily = new PM({
    name: 'Emily',
    location: 'Cali',
    age: 22,
    gender: 'female',
    favLanguage: 'C++',
    specialty: 'Full-Stack',
    catchPhrase: `Whaaaat?!`,
    gradClassName: 'FSW15',
    favInstructor: 'Professor Chris'

  });

  const johnny = new PM({
    name: 'Johnny',
    location: 'NYC',
    age: 23,
    gender: 'male',
    favLanguage: 'Edible',
    specialty: 'Function Theory',
    catchPhrase: `Ummm....`,
    gradClassName:'DATA14',
    favInstructor: 'Miss Scarlet'
  });

  const riley = new PM({
    name: 'Riley',
    location: 'Silver City',
    age: 21,
    gender: 'female',
    favLanguage: 'Weebly',
    specialty: 'Robotics',
    catchPhrase: `I'll check for you`,
    gradClassName: 'CS14',
    favInstructor: 'Professor Smith'
  });

//   STUDENTS

const carey = new Students({
    name: 'Carey',
    location: 'California',
    age: 22,
    gender: 'female',
    previousBackground: 'Video Production',
    className: 'CS14',
    favSubjects: [`Javascript, Python, CSS`],
    grade: 89.2

  });

  const rick = new Students({
    name: 'Rick',
    location: 'Florida',
    age: 23,
    gender: 'male',
    className: 'FSW15',
    favSubjects: ['C++', 'Python', 'Javascript'],
    grade: 78.7
  });

  const milley = new Students({
    name: 'Milley',
    location: 'Denver',
    age: 21,
    gender: 'female',
    className: 'DATA14',
    favSubjects: ['HTML', 'Python', 'CSS'],
    grade: 98.9
  });


milley.speak();
smith.demo('functions');
smith.grade(milley, 'Objects Theory');
rick.listsSubjects();
carey.PRAssignment('Math');
milley.sprintChallenge('Applied Javascript');
emily.standUp('fsw15_help');
riley.debugsCode(rick, 'UX Design');
smith.changeGrade(rick);
rick.graduate();
milley.graduate();
