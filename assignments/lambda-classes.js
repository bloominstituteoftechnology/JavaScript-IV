// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    };
}

class Instructor extends Person{
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
    giveGrade(student, grade) {
        return `${student.name}s current grade is ${grade - (Math.random * 100)}.`;
    }
    randomlyGrade(student) {
        const randomNum = Math.floor(Math.random() * 21) - 10;
        if (student.grade + randomNum >= 100) {
            return student.grade = 100;
        } else {
            return student.grade = student.grade + randomNum;
        }
    }

}

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
    }
    listsSubjects() {
        return student.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    };
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
    graduate() {
        if(this.grade > 70) {
            return `You are ready to graduate from Lambda School.`;
        } else {
        return `You aren't quite ready to graduate.`;
        }
    }
}

class ProjectManager  extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode({student}, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}



const lulu = new Instructor({
    name: 'Lulu',
    location: 'Chicago',
    age: 21,
    gender: 'Non-binary',
    favLanguage: 'Ruby',
    specialty: 'Front-end',
    catchPhrase: `A real bobby-dazzler`,
  });

const delphine = new Student ({
    name: 'Delphine',
    location: 'Perpignan',
    age: 34,
    gender: 'Female',
    previousBackground: 'Barista',
    className: 'CSPT3',
    favSubjects: 'Math',
    grade: 78,
  });

  const joey = new ProjectManager ({
      name: 'Joey',
      location: 'Honolulu',
      age: 41,
      gender: 'Female',
      favLanguage: 'C++',
      specialty: 'Back-End',
      catchPhrase: 'Cheap as Chips',
      gradClassName: 'CS3',
      favInstructor: 'Dan',
 });

console.log(joey.name);
console.log(delphine.location);
console.log(joey.favLanguage);
console.log(lulu.gender);
console.log(lulu.catchPhrase);
console.log(lulu.specialty);
console.log(joey.catchPhrase);
console.log(delphine.grade)
console.log(lulu.randomlyGrade(delphine));
console.log(delphine.graduate());
console.log(delphine.speak());
console.log(delphine.PRAssignment());
console.log(joey.standUp());



