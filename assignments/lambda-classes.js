// CODE here for your Lambda Classes
//Person Constructor

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

//Instructor Constructor
class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.catchPhrase;
    
    }

    gradeBlaster(student){
        let addOrSub = Math.random()* 3;
        let randomPoints = Math.floor(Math.random()* 20);
        let newGrade; 
        if(addOrSub > 1){
            newGrade = student.grade += randomPoints;
            if(newGrade > 100){
                newGrade = 100;
                
            }
            console.log(`${student.name}'s grade jumped to a ${newGrade}!`); 
        }
        else if(addOrSub < 1){
            newGrade = student.grade -= randomPoints;
            console.log(`${student.name}'s grade dropped to a ${newGrade}.`); 
        }

    }

    demo(subject){
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
} 

//Student Constructor
class Student extends Person {constructor(props){
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    /* Below I meant set up a conditional that would prevent the grade prop from 
    ever exceeding 100. The cap didn't work but it also didn't mess up setting the
    prop so..could it work if written differently? I'm aware I could program 
    Instructor.gradeBlaster() to return a value of 100 if it exceeds, but am curious 
    if there's a way to set a conditional within the constructor that would ensure 
    the value could never be over 100. 
    */ 
    if(props.grade > 100){    
        props.grade = 100;        
        this.grade = props.grade;
    }
    else {
        this.grade = props.grade;  
    }     
}

graduate(){
    if(this.grade > 70){
        console.log(`Congratulations, ${this.name}. You've graduated!`)
    }
    else{
        console.log(`Keep learning! You're almost there.`)
    }
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

//PM Constructor
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

//Instructor Instances

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

  //Student Instances

  const Pellby = new Student({
    name: 'Pellby',
    location: 'Washington',
    age: 30,
    gender: 'female',
    previousBackground: 'Champion Race-Walker',
    className: 'FSW19',
    favSubjects: ['Front-End', 'Back-end', 'Side-End'],
    grade: 90
  });
  const Ken = new Student({
    name: 'Ken',
    location: 'Canada',
    age: 33,
    gender: 'male',
    previousBackground: 'Anime Illustrator',
    className: 'FSW19',
    favSubjects: ['UI/UX', 'C', 'Back-End'],
    grade: 83
  });

  //Project Manager Instances

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

  //Console Logs
  
  console.log(Knellbert.grade(Pellby,'DOM CXVII'));
  console.log(Joshbert.demo('Node.js'));
  console.log(Scroopy.standUp('FSW19'));
  console.log(Doopy.debugsCode(Ken, 'DOM CXVII'));
  Pellby.listsSubjects();
  Ken.listsSubjects();
  console.log(Pellby.PRAssignment('DOM CXVII'));
  console.log(Ken.sprintChallenge('JS XXI'));
  Knellbert.gradeBlaster(Pellby); 
  console.log(Pellby.grade); 
  Ken.graduate();

  
  
  
  
  
  

