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
    changeGrade(student) {
      let randomNum = Math.floor(Math.random() * 100) - 50;
      let pronoun = '';
      if (student.gender === 'Male') {
        pronoun = 'his';
      } else {
        pronoun = 'her';
      }
      student.grade += randomNum;
      if (randomNum === 0) {
        return `${student.name}'s grade did not change`;
      } else if (randomNum > 0) {
        return `${student.name}'s grade went up by ${randomNum} points, ${pronoun} new grade is ${student.grade}`
      } else {
        return `${student.name}'s grade went down by ${randomNum} points, ${pronoun} new grade is ${student.grade}`;
      }
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
    this.grade = studentAttributes.grade;
  }
    listsSubjects() {
      return `${this.name}'s favorite subjects are ${this.favSubjects.join(", ")}`;
    }
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
      return `${this.name} has begun the sprint challenge on ${subject}`;
}
    graduate() {
      if (this.grade > 70) {
        return `${this.name} is graduating!`;
      } else {
        return `${this.name} only has a grade of ${this.grade}%, keep doing assignments!`
      }
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
  "favSubjects": ["Javascript", "Node.js", "React"],
  "grade": 85
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
  "favSubjects": ["LESS", "HTML", "CSS"],
  "grade": 60
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
  "favSubjects": ["Python", "C", "React"],
  "grade": 100
});
// //test objects
console.log(josh);
console.log(jason);
console.log(jennifer);
//
// //test instructor functions
console.log(johnathan.speak());
console.log(josh.demo("the class keyword"));
console.log(patrick.grade(jerry, "interdimensional travel"));
//
// //test project manager functions
console.log(jason.speak());
console.log(rick.grade(jennifer, "node.js"));
console.log(morty.standUp("cs11"));
console.log(rick.debugsCode(jerry, "html"));

// //test student functions
console.log(jennifer.speak());
console.log(summer.listsSubjects());
console.log(jerry.PRAssignment("Javascript-IV"));
console.log(jennifer.sprintChallenge("Data Structures and Algorithms"));

//test strech goals
console.log(josh.changeGrade(jerry));
console.log(johnathan.changeGrade(summer));

console.log(jennifer.graduate());
console.log(summer.graduate());
