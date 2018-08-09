// CODE here for your Lambda Classes

class Person {
  constructor(props){
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  speak(){
    return `Hello, my name is ${this.name}. I am from ${this.location}.`
  }
}

class Instructor extends Person {
  constructor(props){
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject){
    student.grade += 100;
    student.assignmentCount += 1;
    return `${student.name} receives a perfect score on ${subject}`;
  }
  gradeUp(student){
    const grade = Math.round(Math.random(100) * 100);
    student.grade += grade;
    student.assignmentCount += 1;
    return `${student.name}'s new grade is ${student.grade} after scoring a grade of ${grade}`;
  }
  gradeDown(student){
    const grade = Math.round(Math.random(100) * 100);
    student.grade -= Math.round(Math.random(100) * 100);
    student.assignmentCount += 1;
    return `${student.name}'s new grade is ${student.grade} after scoring a grade of ${grade}`;
  }
}



class Student extends Person {
  constructor(props){
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = 100;
    this.assignmentCount = 0;
    this.alumni = false;
  }
  
  listSubjects(){
    if (typeof this.favSubjects !== typeof []){
      return `Subjects needs to be an array. Please enter them in array format. Array is currently a data type of ${typeof this.favSubjects}`
    } else {
      return this.favSubjects.map((subject, index) => {
        return `Subject ${index + 1}: ${subject}`;
      })
    }
  }
  
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate(){
    const gradeAvg = Math.round((this.grade / this.assignmentCount));
    if (gradeAvg >= 70){
      this.alumni = true;
      return `${this.name} has a grade percentage of ${gradeAvg}%, and thus meet the requirements to graduate from Lambda School and go on to make lots of money IRL.`;
    } else {
      return `${this.name} has a grade percentage of ${gradeAvg}%, and does NOT meet the requirements for graduating from Lambda school. Please repeat the process and stay motivated so you can complete Lambda School and makes lots of money!`
    }
  }
}

class ProjectManager extends Instructor {
  constructor(props){
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }
  standUp(slackChannel){
    return `${this.name} announces to ${slackChannel}, @channel standy times!`;
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const brian = new Student({name: 'Brian', age: 29, location: 'North Carolina', gender: 'M', specialty: 'FED', favLanguage: 'JavaScript', catchPhrase: 'It does make sense.', previousBackground: 'Medical Lab Tech', className: 'CS13', favSubjects: ['HTML', 'CSS', 'JavaScript']});

const josh = new Instructor({name: 'Josh', age: 40, location: 'Utah', gender: 'M', specialty: 'FED', favLanguage: ['HTML', 'CSS', 'JS'], catchPhrase: 'Does that make sense?'});

const jeremyJones = new ProjectManager({name: 'Jeremy', age: 38, location: 'California', gender: 'M', specialty: 'FED', favLanguage: ['HTML', 'CSS', 'JS'], catchPhrase: 'Does that make sense?', gradClassName: 'CS8', favInstructor: 'Josh'});


console.log("Start Grade: " + brian.grade);
console.log(jeremyJones.gradeUp(brian));
console.log(jeremyJones.grade(brian));
console.log(jeremyJones.grade(brian));
console.log(jeremyJones.grade(brian));
console.log(jeremyJones.gradeUp(brian));
console.log(jeremyJones.gradeDown(brian));
console.log("End Grade: " + brian.grade);
console.log(brian.graduate());