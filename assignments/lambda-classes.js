//Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
      console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
      console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
    standUp(channel) {
      console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject) {
      console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
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
      console.log(favSubjects.join(", "));
    }
    PRAssignment(subject) {
      console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
      console.log(`${this.name} has begun the sprint challenge on ${subject}`);
}
}

//Objects

//Instructors
const josh = new Instructor ({
  "name": "Josh";
  "location": ;
  "gender": ;
  "specialty": "Front End",
  "favLanguage": "Javascript",
  "catchPhrase": "Yabba Dabba Doo!"
});

const patrick = new Instructor ({
  "specialty": "Back End",
  "favLanguage": "C",
  "catchPhrase": "In the name of the moon, I'll punish you"
});

const johnathan = new Instructor ({
  "specialty": "Full Stack",
  "favLanguage": "Python",
  "catchPhrase": "Here is your guided-demo..."
});

//Project Managers
const jason = new ProjectManager ({
  "specialty": "Back End",
  "favLanguage": "Javascript",
  "catchPhrase": "Wubba lubba dub dub!",
  "gradClassName": "cs6",
  "favInstructor": "Josh"
});

const rick = new ProjectManager ({
  "specialty": "Back End",
  "favLanguage": "Rust",
  "catchPhrase": "And that's the wayyyyyy the news goes!",
  "gradClassName": "cs8",
  "favInstructor": "Himself"
});

const morty = new ProjectManager ({
  "specialty": "None",
  "favLanguage": "Java",
  "catchPhrase": "Ohhh Morty, I dunno",
  "gradClassName": "cs9",
  "favInstructor": "Rick"
});

//Students
const jennifer = new Student ({
  "specialty": "Unsure",
  "favLanguage": "Javascript",
  "catchPhrase": "I have no idea what I'm doing",
  "previousBackground": "Cosmetology",
  "className": "Axolotls",
  "favSubjects": ["Javascript", "Node.js", "React"]
});

console.log(jennifer)
