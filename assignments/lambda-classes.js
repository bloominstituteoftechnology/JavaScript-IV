// CODE here for your Lambda Classes

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` 
// where `name` and `location` are the object's own props

class Person {
    constructor (personThings) {
        this.name = personThings.name;
        this.age = personThings.age;
        this.location = personThings.location;
        this.gender = personThings.gender;
    }
    speak () {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// #### Instructor

// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase 
//   * 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` 
//   * string as arguments and logs out '{student.name} receives a perfect score on {subject}'


class Instructor extends Person {
    constructor (instructorThings) {
        super (instructorThings);
        this.specialty = instructorThings;
        this.favLanguage = instructorThings;
        this.catchPhrase = instructorThings;
    }
    demo (subject) {
        return `Today we are learning about ${subject}.`;
    }
    
    grade (student, subject) {
        return `${student.name} recieves a perfect score on ${subject}.`;
    }

}

// #### Student

// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs out that the 
//   * `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out 
//   * `student.name has begun sprint challenge on {subject}`

class Student extends Person {
    constructor (studentThings) {
        super (studentThings);
        this.previousBackground = studentThings.previousBackground;
        this.className = studentThings.className;
        this.favSubjects = studentThings.favSubjects;
    }

    listSubjects () {
        return `${this.favSubjects}`;
    }

    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge (subject) {
        return `${this.name} has begun the sprint challenge on ${subject}.`;
    }

}

// #### Project Mananger

// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs 
//   * `{name} announces to {channel}, @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out 
//   * `{name} debugs {student.name}'s code on {subject}`

class ProjectManager extends Instructor {
    constructor (pmThings) {
        super (pmThings);
        this.gradeClassName = pmThings.gradeClassName;
        this.favInstructor = pmThings.favInstructor;
        this.channel = pmAttributes.channel;
    }

    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }

}

// * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class 
// and test them according to their unique Attributes. For example:

  
  const elliott = new Person({
    name: 'Elliott',
    age: 34,
    location: 'Portland',
    gender: 'Male'
  });

  const marissa = new Person({
      name: 'Marissa',
      age: 32,
      location: 'New York',
      gender: 'Female'
  });


  const elon = new Instructor({
    name: 'Elon',
    location: 'Mars',
    age: 47,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: 'I could either watch it happen or be part of it.'
  });

  const sam = new Instructor({
    name: 'Sam',
    location: 'New York',
    age: 51,
    gender: 'Male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'A puppet is free as long as he loves his strings.'
  });

  const kelli = new Student({
      name: 'Kelli',
      age: 30,
      location: 'Nashville',
      gender: 'Female',
      previousBackground: 'Modeling',
      className: 'FSW16',
      favSubjects: ['HTML', 'CSS']
  });

  const cj = new Student({
    name: 'CJ',
    age: 27,
    location: 'Duluth',
    gender: 'Male',
    previousBackground: 'Music Teacher',
    className: 'FSW16',
    favSubjects: ['JavaScript']
});

const anne = new ProjectManager({
    name: 'Anne',
    age: 22,
    gender: 'Female',
    specialty: 'Coding',
    favLanguage: 'JavaScript',
    catchPhrase: 'Reality leaves a lot to the imagination.',
    gradClassName: 'FSW14',
    favInstructor: 'Josh',
});

const zack = new ProjectManager({
    name: 'Zack',
    age: 32,
    gender: 'Male',
    specialty: 'Writing',
    favLanguage: 'JavaScript',
    catchPhrase: 'Happiness for you and me.',
    gradClassName: 'FSW15',
    favInstructor: 'Josh',
});

//Person
console.log(elliott.speak());
console.log(marissa.speak());

//Instructor
console.log(elon.demo('Javascript'));
console.log(sam.catchPhrase);
console.log(sam.grade(kelli, 'HTML'));

//Student
console.log(kelli);
console.log(cj);
console.log(kelli.sprintChallenge());
console.log(cj.listsSubjects());

//Project Manager 
console.log(anne.debugsCode());
console.log(zack.standUp('kelli, FSW16'));