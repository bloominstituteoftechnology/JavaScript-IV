// CODE here for your Lambda Classes


class Person {
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.location = info.location;
    this.gender = info.gender;
  }

  speak(){
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  }
}


class Instructor extends Person {
  constructor(teachInfo) {
    super(teachInfo);
    this.specialty = teachInfo.specialty;
    this.favLanguage = teachInfo.favLanguage;
    this.catchPhrase = teachInfo.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(studentIn, subject) {
    console.log(`${studentIn.name} receives a perfect score on ${subject}`);
  }

  changeGrade(student) {
    let positive = true;
    if(Math.floor((Math.random() >= 0.5))){
      student.grade += Math.floor((Math.random() * 100) + 1);
      if(student.grade > 100)
      { student.grade = 100;  }
    }
    else {
      positive = false;
      student.grade -= Math.floor((Math.random() * 50) + 1);
      if(student.grade < 0)
      { student.grade = 0;  }
    }
    console.log(`${student.name}'s grade was ${positive ? "raised" : "lowered"} to ${student.grade} by ${this.name}`);
  }
}

class Student extends Person {
  constructor(studentInfo) {
    super(studentInfo);
    this.previousBackground = studentInfo.previousBackground;
    this.className = studentInfo.className;
    this.favSubjects = studentInfo.favSubjects;
    this.grade = studentInfo.grade;
  }

  listsSubjects() {
    console.log(`${this.name}'s favorite subjects are....`);
    for (var subject of this.favSubjects) {
      console.log(`Subject: ${subject}`);
    }
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if(this.grade >= 70)
    { console.log(`${this.name} graduated!`); }
    else {
    { console.log(`${this.name} is not yet ready to graduate!`)}
    }
  }

}

class ProjectManager extends Instructor {
  constructor(pMInfo) {
    super(pMInfo);
    this.gradClassName = pMInfo.gradClassName;
    this.favInstructor = pMInfo.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

let me = new Student ({
  name :"Alex",
  age  : 33,
  location : "Seattle",
  gender : "M",
  previousBackground : "Perpetual Student",
  className : "CS11",
  favSubjects : ["Python", "Back-End Development", "Javascript", "Cyber-Security"],
  grade : Math.floor((Math.random() * 60) + 1)
});

let paul = new Student ({
  name :"Paul McCartney",
  age  : 65,
  location : "Liverpool",
  gender : "M",
  previousBackground : "Bass Player",
  className : "CS11",
  favSubjects : ["Rockin-out", "Bootstrap", "Javascript", "Kickin-ass", "Taking names"],
  grade : Math.floor((Math.random() * 60) + 1)
});

let jimmy = new Student ({
  name :"Jimmy Page",
  age  : 72,
  location : "Manchester",
  gender : "M",
  previousBackground : "Guitar Player",
  className : "CS11",
  favSubjects : ["Bootstrap", "Back-End Development", "React", "AngularJS"],
  grade : Math.floor((Math.random() * 60) + 1)
});

let john = new Instructor ({
  name :"John Lennon",
  age  : 67,
  location : "Phoenix",
  gender : "M",
  specialty : "Trippy Ballads",
  favLanguage : "Python",
  catchPhrase : "Wubba Lubba Dub Dub!"
});


let george = new Instructor ({
  name :"George Harrison",
  age  : 67,
  location : "Liverpool",
  gender : "M",
  specialty : "Blues Rock",
  favLanguage : "Javascript",
  catchPhrase : "Winter is Coming!"
});

let ringo = new ProjectManager ({
  name :"Ringo Starr",
  age  : 69,
  location : "London",
  gender : "M",
  specialty : "Just getting really lucky",
  favLanguage : "Pascal",
  catchPhrase : "Alright alright alright...",
  gradClassName : "CS2",
  favInstructor : "Buddy Rich"
});

me.speak();
me.listsSubjects();
paul.speak();
paul.PRAssignment("Hey Jude");
paul.sprintChallenge("CSS");
george.speak();
george.demo("shredding wicked guitar solos");
john.speak();
john.grade(paul, "being my wingman");
ringo.speak();
ringo.standUp("Announcements");
ringo.debugsCode(paul, "piano ballads");
ringo.changeGrade(me);
john.changeGrade(paul);
jimmy.speak();


students = [me,paul, jimmy];
graders = [john, george, ringo];


let keepGoing = true;
while(keepGoing)
{
  // Check to see if students have graduated, and remove them if so
  students.forEach((student) => { student.graduate();  });
  students = students.filter(student => student.grade < 70);

  //Get random grader from array
  graderIndex = Math.floor(Math.random() * graders.length);

  // get random student from array
  studentIndex = Math.floor(Math.random() * students.length);

  if(students.length <= 0){
    keepGoing = false;
  }
  else {
    // Grade our random student with our random grader
    graders[graderIndex].changeGrade(students[studentIndex])
  }
}
