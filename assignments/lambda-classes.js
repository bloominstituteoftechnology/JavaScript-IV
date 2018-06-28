// CODE here for your Lambda Classes
// * We have a school to build here! This project will get you used to thinking about classes in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

// ```js
// const fred = new Instructor({
//   name: 'Fred',
//   location: 'Bedrock',
//   age: 37,
//   gender: 'male',
//   favLanguage: 'JavaScript',
//   specialty: 'Front-end',
//   catchPhrase: `Don't forget the homies`
// });
// ```

// #### Person

// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props

class Person {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }
    speak () {
        console.log (`Hello, my name is ${this.name}, and I am from ${this.location}.`);
    }
  }


  class Instructor extends Person {
    constructor(instAttributes) {
      super(instAttributes);
      this.specialty = instAttributes.specialty;
      this.favLanguage = instAttributes.favLanguage;
      this.catchPhrase = instAttributes.catchPhrase;
    }
    demo (subject) {
        console.log ('Today we are learning about {subject}');
    }
    grade (student, subject) {
        console.log ( '${student.name} receives a perfect score on {subject}.');
    }
  }

  class Student extends Person {
    constructor(stuAttributes) {
      super(stuAttributes);
      this.previousBackground = stuAttributes.previousBackground;
      this.className = stuAttributes.className;
      this.favSubjects = stuAttributes.favSubjects;
      this.studentGrade = stuAttributes.studentGrade;
    }
    listsSubjects() {
        this.favSubjects.forEach('subject' => {
          console.log('subject')});
      }
    PRAssignment (subject) {
        console.log ('${student.name} has submitted a PR for {subject}');
    }
    sprintChallenge (subject) {
        console.log ('${student.name} has begun sprint challenge on {subject}');
    } 
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
      super(pmAttributes);
      this.gradClassName = pmAttributes.gradClassName;
      this.favInstructor = pmAttributes.favInstructor;
    }
    standup (channel){ 
      console.log (`${this.name} announces to {channel}, @channel standy times!​​​​​`);
    }
    debugsCode (){
    console.log (`{name} debugs {student.name}'s code on {subject}`);
    }
}
// -----OBJECTS-----

const sam = new Instructor({
    name: 'Sam',
    location: 'Boston',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `What IPA's do you have?`
  });

  const karen = new Instructor({
    name: 'Karen',
    location: 'Los Angeles',
    age: 48,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `It's easier than doing stand-up comedy!`
  });
//  ___________
const jocatherine = new Student({
    name: 'JoCatherine',
    age: 25,
    location: 'Greenville',
    gender: 'female',
    previousBackground: 'Mortgages and light marketing' ,
    className: 'CS12',
    favSubjects: ['History', 'music', 'art', 'design']
})
  
const georgia = new Student({
    name: 'Georgia',
    age: 20,
    location: 'Irvine',
    gender: 'female',
    previousBackground: 'Baking and podcasting' ,
    className: 'CS12',
    favSubjects: ['Writing', 'Cinemetography']
})  
  
  
  
  
  
  console.log(sam.catchPhrase)
  console.log(karen.specialty)
jocatherine.listsSubjects()
  georgia.sprintChallenge()