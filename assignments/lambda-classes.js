// CODE here for your Lambda Classes

class PersonObject {
    constructor (personInfo) {
        this.name = personInfo.name;
        this.age = personInfo.age;
        this.location = personInfo.location;
        this.gender = personInfo.gender;
      }
  
      speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
      }
  
  }  
  
  class InstructorInfo extends PersonObject {
    constructor (instructorAttributes) {
        super(instructorAttributes)
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
  
   demo (subject) {
    return `Today we are learning about ${subject}`;
  }; 

    grade (student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    gradeStudent (student) {
        if (Math.random() <= .5){
            const x = student.grade - (Math.random()*50);
            return x;
        }
        if (Math.random() > .5){
            const x = student.grade + (Math.random()*50);
            return x;
        }
    
    }
  
  }
  
  class StudentInfo extends PersonObject {
    constructor (studentAttributes) {
        super (studentAttributes)
        this.background = studentAttributes.background;
        this.className = studentAttributes.className;
        this.favSubject = studentAttributes.favSubject;
        this.grade = studentAttributes.grade;
        
    }
    listSubjects () {
        
            return `My favorite subjects include ${this.favSubject}` 
        
    }
    PRAssiagnment (student, subject) {
        
            return `${student.name} has submitted a PR for ${subject}`;
        
    }
    sprintChallenge (student, subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
    graduation (student) {
        console.log(Jish.gradeStudent(student));
        if (Jish.gradeStudent(student) > 70){
            return `Congratulations ${student.name}, you have graduated from Lambda School!`;
       }
       else if (Jish.gradeStudent(student) < 70){
           return `Too bad ${student.name}, you don't get to graduate.`;
       }
    }
}

    

  class PMInfo extends InstructorInfo {
    constructor (pmAttributes) {
        super (pmAttributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
        
    }

    standUp (channel) {
        
            return `${this.name} announces to ${channel}, @channel standy times!`;
        
    }
    debugCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}}`;
    }


   
  }

  //PersonObject, InstructorInfo, StudentInfo, PMInfo, 'Male', 25
  
  const Rick = new PersonObject({
    name : 'Rick',
    age : 70,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
  });
  
  const Morty = new PersonObject({
    name : 'Morty',
    age : 14,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
  });
  
  const Jish = new InstructorInfo({
    name : 'Jish',
    age : 35,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
    specialty : "Action Script",
    favLanguage : "Javascript",
    catchPhrase : "Welcome FSW14",
  });

  const Danny = new InstructorInfo({
    name : 'Danny',
    age : 35,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
    specialty : "Back End",
    favLanguage : "Python",
    catchPhrase : "Damn Daniel",
  });
  
  const Arnold = new PMInfo({
    name : 'Arnold',
    age : 31,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
    specialty : 'Pumping Iron',
    favLanguage : 'CSS',
    catchPhrase : 'Get to the Choppah',
    gradClassName : 'CS7',
    favInstructor : 'Jish',
  });
  
  const Neo = new PMInfo({
    name : 'Neo',
    age : 29,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
    specialty : 'Code-Fu',
    favLanguage : 'C++',
    catchPhrase : 'Woah',
    gradClassName : 'CS1',
    favInstructor : 'Danny',
  });

  const Trizzle = new StudentInfo({
    name : 'Trizzle',
    age : 26,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
    background : 'I used to make music, go to school full time, and community organize.',
    className : 'CS14',       
    favSubject : ['Biology','Math','Philosophy'],
    grade : 50,
  });
  
  const Carl = new StudentInfo({
    name : 'Carl',
    age : 28,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
    background : "I used to play computer games.",
    className : 'CS14',       
    favSubject : ['Chemistry','Math','Political Science'],
    grade : 50,
  });
  
  const Shannon = new StudentInfo({
    name : 'Shannon',
    age : 22,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Female',
    background : 'I went to school for architecture.',
    className : 'CS14',       
    favSubject : ['History','Design','Art'],
    grade : 50,
  });

  const Logan = new StudentInfo({
    name : 'Logan',
    age : 24,
    location : 'Earth - New York (Dimension C-137)',
    gender : 'Male',
    background : "I used to beat mutants up with my claws and fists",
    className : 'CS14',       
    favSubject : ['Mutants 101','Spanish','Philosophy'],
    grade : 50,
  });

  console.log(Logan.speak());
  console.log(Jish.demo ("Javascript"));
  console.log(Neo.grade (Trizzle, 'Javascript'));
  console.log(Trizzle.listSubjects ());
  console.log(Carl.PRAssiagnment (Trizzle, 'CSS'));
  console.log(Shannon.sprintChallenge (Shannon, 'Javascript'));
  console.log(Neo.standUp ("FSW14"));
  console.log(Arnold.debugCode (Logan, "Get to The Choppaaaah"));
  console.log(Jish.gradeStudent(Trizzle));
  console.log(Arnold.gradeStudent(Shannon));
  console.log(Neo.gradeStudent(Logan));
  console.log(Danny.gradeStudent(Carl));
  console.log(Trizzle.graduation(Trizzle));

  
  
//   speak() {
//     return `Hello my name is ${this.name}, I am from ${this.location}`;
//   }
//   demo (subject) {
//     return `Today we are learning about ${subject}`;
//   }; 

//     grade (student, subject) {
//         return `${student.name} receives a perfect score on ${subject}`;
//     }
  
//   }
//   listSubjects () {
//     for (let i = 0; i < this.favSubject.length; i++){
//         return `My favorite subjects include ${this.favSubject[i]}`
//     }
// }
// PRAssiagnment (student, subject) {
    
//         return `${student.name} has submitted a PR for ${subject}`;
    
// }
// sprintChallenge (student, subject) {
//     return `${student.name} has begun sprint challenge on ${subject}}`;
// }

// }
// standUp (channel) {
        
//     return `${this.name} announces to ${channel}, @channel standy times!`;

// }
// debugCode (student, subject) {
// return `${this.name} debugs ${student.name}'s code on ${subject}}`;
// }

// }

// Stretch Problem
// Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// Now that our students have a grade build out a method on the Instructor (this will be used by BOTH instructors and PM's) that will randomly add or subtract points to a student's grade. Math.random will help.
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherswise go back to grading their assignments to increase their score.