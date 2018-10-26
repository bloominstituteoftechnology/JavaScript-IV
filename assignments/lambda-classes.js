// * We have a school to build here! This project will get you used to thinking about classes
//  in JavaScript and building them from a brand new data set.
// * Lambda personnel can be broken down into three different types of `people`.
//   * **Instructors** - extensions of Person
//   * **Students** - extensions of Person
//   * **Project Managers** - extensions of Instructors
// * **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to
// their unique Attributes. For example:
//
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
//
// #### Person
//
// * First we need a Person class. This will be our `base-class`
// * Person receives `name` `age` `location` `gender` all as props
// * Person receives `speak` as a method.
// * This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location`
// are the object's own props
//
// #### Instructor
//
// * Now that we have a Person as our base class, we'll build our Instructor class.
// * Instructor uses the same attributes that have been set up by Person
// * Instructor has the following unique props:
//   * `specialty` what the Instructor is good at i.e. 'redux'
//   * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
//   * `catchPhrase` i.e. `Don't forget the homies`
// * Instructor has the following methods:
//   * `demo` receives a `subject` string as an argument and logs out the phrase
// 'Today we are learning about {subject}' where subject is the param passed in.
//   * `grade` receives a `student` object and a `subject` string as arguments and logs out
// '{student.name} receives a perfect score on {subject}'
//
// #### Student
//
// * Now we need some students!
// * Student uses the same attributes that have been set up by Person
// * Student has the following unique props:
//   * `previousBackground` i.e. what the Student used to do before Lambda School
//   * `className` i.e. CS132
//   * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// * Student has the following methods:
//   * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
//   * `PRAssignment` a method that receives a subject as an argument and logs
// out that the `student.name has submitted a PR for {subject}`
//   * `sprintChallenge` similar to PRAssignment but logs out `student.name
// has begun sprint challenge on {subject}`
//
// #### Project Mananger
//
// * Now that we have instructors and students, we'd be nowhere without our PM's
// * ProjectManagers are extensions of Instructors
// * ProjectManagers have the following uniqe props:
//   * `gradClassName`: i.e. CS1
//   * `favInstructor`: i.e. Sean
// * ProjectManangers have the following Methods:
//   * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel},
// @channel standy times!​​​​​
//   * `debugsCode` a method that takes in a student object and a subject and logs out
// `{name} debugs {student.name}'s code on {subject}`
//
// #### Stretch Problem
//
// * Extend the functionality of the Student by adding a prop called grade and setting
// it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor
// (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points
// to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're
//   ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherswise go back to
//    grading their assignments to increase their score.

// const fred = new Instructor({
// //   name: 'Fred',
// //   location: 'Bedrock',
// //   age: 37,
// //   gender: 'male',
// //   favLanguage: 'JavaScript',
// //   specialty: 'Front-end',
// //   catchPhrase: `Don't forget the homies`
// // });
// // ```
//
// //
// //
// CODE here for your Lambda Classes
class Person {

       constructor(attributes){

           this.name = attributes.name;
           this.age= attributes.age;
           this.location = attributes.location;
           this.gender=attributes.gender;

       }
       speak(){
           console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
       }

}//////////////////////person//////////////////////////////////////////////////////////////////////////////

class Instructor extends Person{
        constructor(insAttributes){
          super(insAttributes);
          this.favLanguage=insAttributes.favLanguage;
          this.specialty=insAttributes.specialty;
          this.catchPhrase=insAttributes.catchPhrase;

        }

        demo(subject){
            console.log(`Today we are learning about ${subject}`);
        }
        grade(student,subject){
          console.log(`${student.name} receives a perfect score on ${subject}`)
        }
        upgrade(student,testPass){

            let randomMarks= Math.floor(Math.random() * (10 - 5) + 5);
            if(testPass===true) {
                 student.grade=student.grade+randomMarks;
                console.log(`${student.name}'s grade has been added by ${randomMarks} ,So the final grade of ${student.name} is ${student.grade}`);
                   student.graduate();
            }else{
                student.grade=student.grade-randomMarks;
                console.log(`${student.name}'s grade has been subtracted by ${randomMarks},so the final grade of ${student.name} is ${student.grade}`);
                student.graduate();

            }
        }

}/////////////////////////////////////Instructor/////////////////////////////////////////////////////

class Student extends Person{
    constructor(stuAttributes){
        super(stuAttributes);
        this.favLanguage=stuAttributes.favLanguage;
        this.specialty=stuAttributes.specialty;
        this.catchPhrase=stuAttributes.catchPhrase;
        this.previousBackground=stuAttributes.previousBackground;
        this.className =stuAttributes.className;
        this.favSubjects =stuAttributes.favSubjects;
        this.grade=stuAttributes.grade;

    }

    listsSubjects() {
        console.log(`${this.name}'s favorite Subjects are:${this.favSubjects[0]},${this.favSubjects[1]},${this.favSubjects[2]},${this.favSubjects[3]}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(){
        console.log(`${this.name} has begun sprint challenge on ${this.favSubjects}`);
    }

    graduate(grade){
        if(this.grade<70){
            console.log(`Go back to your assignments`)
        }else {
            console.log(`Congratulations!You have successfully Graduated.`)
        }
    }
}/////////////////////////Student///////////////////////////////////////////////////////////////////

class ProjectMananger extends Instructor{
      constructor(pmAttributes){
          super(pmAttributes);
          this.gradClassName=pmAttributes.gradClassName;
          this.favInstructor=pmAttributes.favInstructor;

      }

    standUp(slackChannel){
      console.log(`${this.name} announces to ${slackChannel}, @channel standy times!​​​​​`);

    }
    debugsCode(student,subject){
     console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }

}

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
   favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
fred.speak();
console.log(fred.favLanguage);
fred.demo("java");


const amy = new Student({
    name: 'Amy',
    location: 'CA',
    age: 25,
    gender: 'female',
    favLanguage: 'C',
    specialty: 'Back-end',
    catchPhrase: 'Love Your Work!',
    previousBackground:'SAP',
    className:'FSWPT3',
    favSubjects:["Computing","Data Structure","CSS","Javascript"],
    grade:70

});

fred.grade(amy, "Maths");
console.log(amy.specialty);
amy.listsSubjects();
amy.PRAssignment("Javascript-IV");
amy.sprintChallenge();
fred.upgrade(amy,false);


const arpita = new Student({
    name: 'Arpita',
    location: 'CA',
    age: 30,
    gender: 'female',
    favLanguage: 'React',
    specialty: 'Web Development',
    catchPhrase: 'Do Smart Work!!',
    previousBackground:'Finance',
    className:'FSWPT3',
    favSubjects:["Maths","C-Sharp","C++","Javascript"],
    grade:65

});

fred.grade(arpita, "Maths");
console.log(arpita.previousBackground);
arpita.listsSubjects();
arpita.PRAssignment("Python");
arpita.sprintChallenge();
arpita.speak();

const miranda = new ProjectMananger({
    name: 'Miranda',
    location: 'Texas',
    age: 32,
    gender: 'female',
    favLanguage: 'Python',
    specialty: 'Java',
    catchPhrase: 'Success is the Key!',
    previousBackground:'Nurse',
    className:'cst1',
    favSubjects:["Python","Java","HTML","Javascript"],
    gradClassName:'cs11',
    favInstructor:'Josh'
});

miranda.standUp("Channel");
miranda.debugsCode(amy, "CSS");

const robert = new ProjectMananger({
    name: 'Robert',
    location: 'Fresno',
    age: 37,
    gender: 'Male',
    favLanguage: 'Python',
    specialty: 'Java',
    catchPhrase: 'ROCK ON!',
    previousBackground:'Musician',
    className:'csp12',
    favSubjects:["C++","Ruby","Maths","React"],
    gradClassName:'cjy19',
    favInstructor:'Knell'
});

robert.standUp("What'sApp");
robert.debugsCode(arpita, "Java");
robert.speak();
robert.demo("JavaScript");
robert.grade(arpita,"Maths")
console.log(robert.age);
console.log(robert.catchPhrase);
console.log(robert.favInstructor);

fred.upgrade(arpita,true);
arpita.graduate(65);
