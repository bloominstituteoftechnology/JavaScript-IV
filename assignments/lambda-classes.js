// CODE here for your Lambda Classes
class Person {
    constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
}

speak(){
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
}
}

class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    
    }

    demo(subject){
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
} 

class Student extends Person {constructor(props){
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;   
}


listsSubjects(){
    let favSubs = this.favSubjects;
    for(var i = 0; i < favSubs.length; i++) {
        console.log(favSubs[i]) 
    };
}
PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`
}
sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}.`
}

}


class ProjectManager extends Instructor {
    constructor(props){
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;


    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @${channel} standUp times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}. `
    }


}

//Instructor Instance

const Knellbert = new Instructor({
    name: 'Knellbert',
    location: 'Yoopah',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const Joshbert = new Instructor({
    name: 'Joshbert',
    location: 'Pyewtah',
    age: 36,
    gender: 'male',
    favLanguage: 'HappyScript',
    specialty: 'Middle-end',
    catchPhrase: `Don't remember, think I blacked out.`
  });

  //Student Instance

  const Pellby = new Student({
    name: 'Pellby',
    location: 'Washington',
    age: 30,
    gender: 'female',
    previousBackground: 'Champion Race-Walker',
    className: 'FSW19',
    favSubjects: ['Front-End', 'Back-end', 'Side-End']
  });
  const Ken = new Student({
    name: 'Ken',
    location: 'Canada',
    age: 33,
    gender: 'male',
    previousBackground: 'Anime Illustrator',
    className: 'FSW19',
    favSubjects: ['UI/UX', 'C', 'Back-End']
  });

  //Project Manager Instance

  const Scroopy = new ProjectManager({
    name: 'Scroopy',
    location: 'Indiana',
    age: 26,
    gender: 'male',
    favLanguage: 'HappierScript',
    specialty: 'Side-end',
    catchPhrase: `An elephant never forgets.`,
    gradClassName: 'FSW18',
    favInstructor: 'Joshbert'
  });

  const Doopy = new ProjectManager({
    name: 'Doopy',
    location: 'India',
    age: 24,
    gender: 'female',
    favLanguage: 'HappiestScript',
    specialty: 'Python',
    catchPhrase: `Push and pop until you drop.`,
    gradClassName: 'FSW18',
    favInstructor: 'Knellbert'
  });
  
  console.log(Knellbert.grade(Pellby,'DOM CXVII'));
  console.log(Joshbert.demo('Node.js'));
  console.log(Scroopy.standUp('FSW19'));
  console.log(Doopy.debugsCode(Ken, 'DOM CXVII'));
  Pellby.listsSubjects();
  Ken.listsSubjects();
  console.log(Pellby.PRAssignment('DOM CXVII'));
  console.log(Ken.sprintChallenge('JS XXI'));

  
  
  
  
  
  

