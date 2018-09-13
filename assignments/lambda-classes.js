// CODE here for your Lambda Classes
 
//Example Of Base Class 
    //class GameObject {
    //     constructor(options){
    //       this.createdAt = options.createdAt;
    //       this.dimensions = options.dimensions;
    //     }
    //     destroy () {
    //       return `${this.name} was removed from the game.`;
    //     }
    //   }
  

//Person Base Class
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak () {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`)
    }
}

//Example of a child that takes attributes from ^^^
    // class CharacterStats extends GameObject {
    //     constructor (characterStatsOptions) {
    //       super(characterStatsOptions);
    //       this.hp = characterStatsOptions.hp;
    //       this.name = characterStatsOptions.name;
    //     }
    //     takeDamage() {
    //       return `${this.name} took damage.`;
    //     }
    //   }


//Instructor Class
class Instructor extends Person {
    constructor (instructorAttributes) {
        super (instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo (subject) {
       console.log(`Today we are learning about ${subject}`)
    };
    grade (student,subject) {
    console.log(`${student.name} recieves a perfect score on ${subject}`)

    }
}

//Student Class

class Student extends Person {
    constructor (studentAttributes) {
        super (studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects () {
        this.favSubjects.forEach(function(subject) {
            console.log(`${subject}`);
        });
    }
    PRAssignment (subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge (subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }

}


//PM Class 
class ProjectManagers extends Instructor {
    constructor(projectManagersAttributes) {
        super (projectManagersAttributes);
        this.gradClassName = projectManagersAttributes.gradClassName;
        this.favInstructor = projectManagersAttributes.favInstructor;
    }
    standUp (channel) {
        console.log(`${this.name} announces to ${channel},@ ${channel} standy times!`)
    }
    debugsCode (student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}


//Test Subjects
const wacodude = new Instructor ({
    name: 'waco dude',
    location: 'Alexia New Mexico',
    age: 44,
    gender: 'female',
    favLanguage: 'C++',
    specialty: 'everything',
    catchPrase: 'everything is going to be great',
  });
   const cooldude = new Instructor ({
    name: 'Cool Dude',
    location: 'in my backyard',
    age: 77,
    gender: 'male',
    favLanguage: 'Java',
    specialty: 'Running',
    catchPrase: 'Take the special sauce',
  });
   const wellILikeCode = new ProjectManagers({
    name: 'Code Boss',
    location: 'Underground.',
    age: 35,
    gender: 'female',
    favLanguage: 'Spanish',
    specialty: 'petting my cat',
    catchPhrase: 'Is everything on earth actually on earth',
    favInstructor: 'cool dude',
    gradClassName: 'FSW14',
  });
   const iGenious= new ProjectManagers({
    name: 'Code Genious',
    location: 'St. Paul',
    age: 19,
    gender: 'female',
    favLanguage: 'German',
    specialty: 'I Go to the grocery store and spend all my money',
    catchPhrase: 'I like to be rich, but i spend all my money',
    favInstructor: 'The Whale Man',
    gradClassName: 'Black List',
  });
   
  

  
  const Savannah = new Student({
    name: 'Savannah Greuel',
    location: 'way down south',
    age: 26,
    gender: 'female',
    favSubjects: [
      'music',
      'working out'
      
  ],
    className: 'i Dont know Code',
    previousBackground: 'Lifeguarding',
  });
   const Tennis = new Student({
    name: 'Sarah Tennis',
    location: 'Utah',
    age: 27,
    gender: 'female',
    favSubjects: [
      'youtube',
      'reading',
      'watching my boyfriend code',
  ],
    className: 'FSW1',
    previousBackground: 'I dould code in my mothers womb',
  });


  //Tests

  wacodude.demo ('death by javascript');
  cooldude.demo ('How to react to React')
  wacodude.grade( Savannah, 'HTML')
  cooldude.grade (Tennis, 'How to play tennis')
  wellILikeCode.standUp ('code')
  iGenious.standUp('Its Time')
  wellILikeCode.debugsCode(Savannah, 'How to become bill gates')
  iGenious.debugsCode (Tennis, 'How not to be shy when peer coding')
  Savannah.listsSubjects()
  Tennis.listsSubjects()
  Savannah.PRAssignment('How to code fast')
  Tennis.PRAssignment('How to get a gig on NCIS as the hacking genious')
  Savannah.sprintChallenge('I Will Be Code Boss')
  Tennis.sprintChallenge ('this.isAwesome')
