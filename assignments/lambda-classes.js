//Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructAttributes) {
    super(instructAttributes);
    this.specialty = instructAttributes.specialty;
    this.favLanguage = instructAttributes.favLanguage;
    this.catchPhrase = instructAttributes.catchPhrase;
  }
    demo(subject) {
      return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
      //console.log(`${student.name} receives a perfect score on ${subject}`);
      return `${student.name} receives a perfect score on ${subject}`;
    }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
    standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

class Student extends Person {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
  }
    listsSubjects() {
      return favSubjects.join(", ");
    }
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
      return `${this.name} has begun the sprint challenge on ${subject}`;
}
}

//Objects

//Instructors
const josh = new Instructor ({
  "name": "Josh",
  "location": "Kansas",
  "gender": "Male",
  "specialty": "Front End",
  "favLanguage": "Javascript",
  "catchPhrase": "Yabba Dabba Doo!"
});

const patrick = new Instructor ({
  "name": "Patrick",
  "location": "North Dakota",
  "gender": "Male",
  "specialty": "Back End",
  "favLanguage": "C",
  "catchPhrase": "In the name of the moon, I'll punish you"
});

const johnathan = new Instructor ({
  "name": "Johnathan",
  "location": "California",
  "gender": "Male",
  "specialty": "Full Stack",
  "favLanguage": "Python",
  "catchPhrase": "Here is your guided-demo..."
});

//Project Managers
const jason = new ProjectManager ({
  "name": "Jason",
  "location": "Iowa",
  "gender": "Male",
  "specialty": "Back End",
  "favLanguage": "Javascript",
  "catchPhrase": "Wubba lubba dub dub!",
  "gradClassName": "cs6",
  "favInstructor": "Josh"
});

const rick = new ProjectManager ({
  "name": "Rick",
  "location": "Dimension C-137",
  "gender": "Male",
  "specialty": "Back End",
  "favLanguage": "Rust",
  "catchPhrase": "And that's the wayyyyyy the news goes!",
  "gradClassName": "cs8",
  "favInstructor": "Himself"
});

const morty = new ProjectManager ({
  "name": "Morty",
  "location": "Dimension C-137",
  "gender": "Male",
  "specialty": "None",
  "favLanguage": "Java",
  "catchPhrase": "Ohhh Morty, I dunno",
  "gradClassName": "cs9",
  "favInstructor": "Rick"
});

//Students
const jennifer = new Student ({
  "name": "Jennifer",
  "location": "Hotlanta",
  "gender": "Female",
  "specialty": "Unsure",
  "favLanguage": "Javascript",
  "catchPhrase": "I have no idea what I'm doing",
  "previousBackground": "Cosmetology",
  "className": "Axolotls",
  "favSubjects": ["Javascript", "Node.js", "React"]
});

const summer = new Student ({
  "name": "Summer",
  "location": "Dimension C-137",
  "gender": "Female",
  "specialty": "Complaining",
  "favLanguage": "Ruby on Rails",
  "catchPhrase": "Go home and drink, grandpa",
  "previousBackground": "High School",
  "className": "Axolotls",
  "favSubjects": ["LESS", "HTML", "CSS"]
});

const jerry = new Student ({
  "name": "Jerry",
  "location": "Dimension C-137",
  "gender": "Male",
  "specialty": "Everything",
  "favLanguage": "Python",
  "catchPhrase": "Hmmm... human music",
  "previousBackground": "Stay at home dad",
  "className": "Meeseeks",
  "favSubjects": ["Python", "C", "React"]
});

// console.log(josh);
// console.log(jason);
// console.log(jennifer);

console.log(johnathan.speak());
console.log(josh.demo("the class keyword"));
console.log(patrick.grade(jerry, "interdimensional travel"));
