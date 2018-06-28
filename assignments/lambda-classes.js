class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender; 
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(cprops){
        super(cprops);
        this.speciality = cprops.speciality;
        this.favLanguage = cprops.favLanguage;
        this.catchPhrase = cprops.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}`;
    }
    grade (student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`;
    }
    graduate (student) {
        if (student.grade >= 70) { 
         console.log('Congratulations you have graduated')
        } else {
          console.log(`${student.name} because your score is only at ${student.grade} you are still not ready to graduate..... ${student.name} pleads with his instructor please let me have another chance to improve`)
          this.gradingCurve(student); 
        } 
    }
    gradingCurve(student){
      let stringOut = (`${student.name} let me review your latest work`)
      let randomGrade = Math.floor(Math.random() * 5); 
      student.grade += randomGrade;
      let stringOut2 = `Well ${student.name} you have completed this assignment and your score is now a ${student.grade}. That is an improvement of ${randomGrade} points`;
      let arrayJoined = [stringOut, stringOut2];
      if (student.grade >= 70) {
        console.log(stringOut); 
        this.graduate(student);
      } else {
      console.log(arrayJoined.join(" , .........")); 
      this.graduate(student);
    }
}
}
class Student extends Person {
    constructor(cprops){
        super(cprops);
        this.previousBackground = cprops.previousBackground;
        this.className = cprops.className;
        this.favSubjects = cprops.favSubjects;
        this.grade = cprops.grade;
    }
    listSubjects () {
        return this.favSubjects.join(', '); 
    }
    PRAssignment (subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
        return `${this.name} has begun sprint challege on ${subject}`;
    }
    
}
class ProjectManager extends Instructor {
    constructor(gcprops){
        super(gcprops);
        this.gradClassName = gcprops.gradClassName;
        this.favInstructor = gcprops.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


const jonathan = new Student ({
    name: "Jonathan", 
    age: 32, 
    location: "MidWest", 
    gender: "Male", 
    previousBackground: "Quality Assurance", 
    className: "JavaScript Fundamentals",
    favSubjects: ["Programming", "Creative Writing", "Finance"],
    grade: 92
  })
const holloway = new Student ({
    name: "Holloway", 
    age: 32, 
    location: "MidWest", 
    gender: "Male", 
    previousBackground: "Currency Trader", 
    className: "CS12",
    favSubjects: ["accounting", "Math", "Python"],
    grade: 59
  })

const josh = new Instructor ({
    name: "Josh", 
    age: 32,
    location: "Somewhere", 
    gender: "Male", 
    speciality: "Full Stack",
    favLanguage: "The Language of the Coders", 
    catchPhrase: "Let's be back in 5 mins"
})
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
const jack = new Person({
    name: 'Jack',
    age: 37,
    location: 'Bedrock',
    gender: 'male'
  });
const shelia = new Person ({
    name: 'Jack',
    age: 25,
    location: 'Indiana',
    gender: 'Female'
  });
const jordan = new ProjectManager ({
    name: "Jordan", 
    age: 28,
    location: "Texas", 
    gender: "Female", 
    speciality: "Biology",
    catchPhrase: "Attributes is a parameter",
    gradClassName: "CS9", 
    favInstructor: "Josh",
    favLanguage: "NLP"
})
const nathan = new ProjectManager ({
    name: "Nathan", 
    age: 30,
    location: "Texas", 
    gender: "Male", 
    speciality: "Full-Stack",
    catchPhrase: "that's what I want",
    gradClassName: "CS9", 
    favInstructor: "Josh",
    favLanguage: "JavaScript"
})

josh.graduate(holloway);


// Person Classes 
// console.log(jack.name);
// console.log(jack.age); 
// console.log(jack.name, jack.age, jack.location, jack.gender); 
// console.log(jack.speak());

// console.log(shelia.name);
// console.log(shelia.age); 
// console.log(shelia.name, shelia.age, shelia.location, shelia.gender); 
// console.log(shelia.speak());

// //Project Manager Classes 
// console.log(jordan.name);
// console.log(jordan.age); 
// console.log(jordan.name, jordan.age, jordan.location, jordan.gender); 
// console.log(jordan.speak());
// console.log(jordan.demo("JavaScript IV")); 
// console.log(jordan.standUp("CS12"));
// console.log(jordan.debugsCode(holloway, "JavaScript"));
// console.log(jordan.grade(holloway, "JavaScript"))
// console.log(jordan.favInstructor, jordan.speciality, jordan.catchPhrase);
// console.log(jordan.favLanguage);  

// console.log(nathan.name);
// console.log(nathan.age); 
// console.log(nathan.name, nathan.age, nathan.location, nathan.gender); 
// console.log(nathan.speak());
// console.log(nathan.standUp("CS12"));
// console.log(nathan.demo("JavaScript IV")); 
// console.log(nathan.debugsCode(jonathan, "JavaScript"));
// console.log(nathan.grade(jonathan, "JavaScript"));
// console.log(nathan.favInstructor, nathan.speciality, nathan.catchPhrase);
// console.log(nathan.favLanguage);  

// // Student Classes 
// console.log(jonathan.name);
// console.log(jonathan.age); 
// console.log(jonathan.name, jonathan.age, jonathan.location, jonathan.gender); 
// console.log(jonathan.speak());
// console.log(jonathan.listSubjects());
// console.log(jonathan.PRAssignment("JavaScript"));
// console.log(jonathan.sprintChallenge("JavaScript"));


// console.log(holloway.name);
// console.log(holloway.age); 
// console.log(holloway.name, holloway.age, holloway.location, holloway.gender); 
// console.log(holloway.speak());
// console.log(holloway.listSubjects());
// console.log(holloway.PRAssignment("JavaScript"));
// console.log(holloway.sprintChallenge("JavaScript"));

// // Instructor Classes 
// console.log(fred.name);
// console.log(fred.age); 
// console.log(fred.name, fred.age, fred.location, fred.gender); 
// console.log(fred.speak());
// console.log(fred.demo("JavaScript IV"));
// console.log(fred.grade(holloway, "JavaScript"));

// console.log(josh.name);
// console.log(josh.age); 
// console.log(josh.name, josh.age, josh.location, josh.gender, josh.speciality); 
// console.log(josh.catchPhrase);
// console.log(josh.favLanguage);  
// console.log(josh.speak());
// console.log(josh.demo("JavaScript IV"));
// console.log(josh.grade(holloway, "JavaScript"));