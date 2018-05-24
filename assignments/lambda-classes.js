// CODE here for your Lambda Classes


class Person {
    constuctor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;
        this.gender = personAttributes.gender;
    }
    // speak() {
    //     return `Hello my name is ${this.name}, I am from ${this.location}`;
    // }
    speak() {
        return "Hello my name is " + this.name + "," + " I am from " + this.location;
    }
}

class Instructor extends Person {
    constructor(intructorAttributes) {
        super(intructorAttributes);
        this.name = intructorAttributes.name;
        this.age = intructorAttributes.age;
        this.location = intructorAttributes.location;
        this.gender = intructorAttributes.gender;
        this.specialty = intructorAttributes.specialty;
        this.favLanguage = intructorAttributes.favLanguage;
        this.catchPhrase = intructorAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
    gradeRevision(student) {
        student.grade = student.grade + Math.floor((Math.random() * 50) + -50);
        return student.grade;
    }
    
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.name = studentAttributes.name;
        this.age = studentAttributes.age;
        this.location = studentAttributes.location;
        this.gender = studentAttributes.gender;
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject, student) {
        return `${student.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject, student) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
    graduate(instructor) {
        // for (let i = 0; i<100; i++) {}
        if (this.grade > 70) {
            return "You are ready to graduate from Lambda School";
        }
        else if (this.grade <= 70) {
            // this.grade = instructor.gradeRevision(this);
            return this.graduate(instructor);
        }
               
    }


}


class ProjectManager extends Instructor {
    constructor(projectManagerAttributes) {
        super(projectManagerAttributes);
        this.name = projectManagerAttributes.name;
        this.age = projectManagerAttributes.age;
        this.location = projectManagerAttributes.location;
        this.gender = projectManagerAttributes.gender;
        this.specialty = projectManagerAttributes.specialty;
        this.favLanguage = projectManagerAttributes.favLanguage;
        this.catchPhrase = projectManagerAttributes.catchPhrase;
        this.gradClassName = projectManagerAttributes.gradClassName;
        this.favInstructor = projectManagerAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
    sprintChallenge(student, subject) {
        return `${student.name} has begun spring challenge on ${subject}`;
    }

}


const bobby = new Student({
    name: "bobby",
    age: "15",
    location: "California",
    gender: "m",
    previousBackground: "high school student",
    className: "CS11",
    favSubjects: "python",
    grade: 90
  })

  console.log(bobby.name);
  console.log(bobby.grade);

  const sam = new Student({
    name: "same",
    age: "25",
    location: "California",
    gender: "m",
    previousBackground: "glass blower",
    className: "CS11",
    favSubjects: "redux",
    grade: 90
  })



const vin = new Instructor({
    name: 'vin',
    location: 'idaho',
    age: 102,
    gender: 'male',
    favLanguage: 'C',
    specialty: 'programming microcontrollers',
    catchPhrase: `You're not a real programmer if you don't know C`
  });

  console.log(Object.entries(vin));
  console.log(vin.speak());
  console.log(vin.demo('machine code'));
  console.log(vin.grade(bobby, '?' ));
  console.log(vin.gradeRevision(bobby));
  
  console.log(bobby.graduate(vin));
  console.log(bobby.grade);

  const alfred = new Instructor({
    name: 'alfred',
    location: 'New York',
    age: 22,
    gender: 'male',
    favLanguage: 'js',
    specialty: 'bootstrap',
    catchPhrase: `bootstrap FTW!`
  });

  console.log(Object.entries(alfred));
  console.log(alfred.speak());
  console.log(alfred.demo('bootstrap'));
  console.log(alfred.grade(bobby, bobby.favSubjects ));
  console.log(alfred.gradeRevision(sam));

  console.log(sam.grade);

  const samantha = new Student({
    name: "samantha",
    age: "40",
    location: "Georgia",
    gender: "f",
    previousBackground: "journalist",
    className: "CS11",
    favSubjects: ["html/css", "js", "ruby"],
    grade: 88,
  })

  console.log(Object.entries(samantha));
  console.log(samantha.speak());
  console.log(samantha.listsSubjects());
  console.log(samantha.PRAssignment("react", samantha));
  console.log(samantha.sprintChallenge("redux", samantha));


  const tom = new Student({
    name: "tom",
    age: "55",
    location: "Vermont",
    gender: "m",
    previousBackground: "wood-working",
    className: "CS11",
    favSubjects: ["JavaScript", "PHP"],
    grade: 77,
  })

  console.log(Object.entries(tom));
  console.log(tom.speak());
  console.log(tom.listsSubjects());
  console.log(tom.PRAssignment("redux", tom));
  console.log(tom.sprintChallenge("redux", tom));


  const felix = new ProjectManager({
    name: "tom",
    age: "55",
    location: "Vermont",
    gender: "m",
    specialty: "object oriented programming",
    favLanguage: "lisp",
    catchPhrase: "swaggy",
    gradClassName: "CS1",
    favInstructor: "vin"
  })

  console.log(Object.entries(felix));
  console.log(felix.speak());
  console.log(felix.standUp("CSHelp"));
  console.log(felix.debugsCode(bobby, "react"));



  const mendel = new ProjectManager({
    name: "mendel",
    age: "35",
    location: "Florida",
    gender: "m",
    specialty: "react",
    favLanguage: "JavaScript",
    catchPhrase: "we done done it again. SMH!",
    gradClassName: "CS4",
    favInstructor: "vin"
  })


  console.log(Object.entries(mendel));
  console.log(mendel.speak());
  console.log(mendel.standUp("random"));
  console.log(mendel.debugsCode(bobby, "JS-II"));