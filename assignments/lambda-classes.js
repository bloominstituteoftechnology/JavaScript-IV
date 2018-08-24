// CODE here for your Lambda Classes
class Person {
    constructor(obj) {
        this.name = obj.name;
        this.age = obj.age;
        this.location = obj.location;
        this.gender = obj.gender;
    };

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person {
    constructor(obj) {
        super(obj);
        this.specialty = obj.specialty;
        this.favLanguage = obj.favLanguage;
        this.catchPhrase = obj.catchPhrase;
    };

    demo(subject) {
        return `Today we are learning about ${subject}`;
    };

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    };

    gradeStudent(student){
        let currentGrade = student.grade;
        console.log(`${student.name}'s current grade is ${currentGrade}.  Let's hope ${this.name} can help Him/Her get that grade up!`)
        while (currentGrade < 100) {
            let points = Math.floor((Math.random() * 10) + 1);
            if (Math.random() > 0.4) {
                currentGrade += points;
                console.log(`${this.name} has added ${points} to ${student.name}'s grade. His/Her current grade is ${currentGrade}`)
            } else {
                currentGrade -= points;
                console.log(`${this.name} has subtracted ${points} from ${student.name}'s grade. His/Her current grade is ${currentGrade}`)
            };

            if (currentGrade >= 100) {
                return `${student.name} has GRADUATED!`
            }; 
                if (currentGrade <= 0) {
                    return `${student.name} has FAILED =(`;
                };
        
            }
        }
    };

class Student extends Person {
    constructor(obj) {
        super(obj);
        this.previousBackground = obj.previousBackground;
        this.className = obj.className;
        this.favSubjects = obj.favSubjects;
        this.grade = obj.grade;
    };

    listsSubjects() {
        return this.favSubjects.toString();  
    };

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    };

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    };
}

class ProjectManager extends Instructor {
    constructor(obj) {
        super(obj);
        this.gradClassName = obj.gradClassName;
        this.favInstructor = obj.favInstructor;
    };

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    };

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    };
}


//Objects created after here

// **************Instructors
const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
  });

  const Dan = new Instructor({
    name: 'Dan',
    location: 'Salt Lake City',
    age: 62,
    gender: 'male',
    favLanguage: 'HTML',
    specialty: 'Stick death animations',
    catchPhrase: `All right everybody`,
  });

  // **************Project Managers

  const Jacob = new ProjectManager({
    name: 'Jacob',
    location: 'Germany',
    age: 30,
    gender: 'male',
    favLanguage: 'React',
    specialty: 'Group Leading',
    catchPhrase: `Did I do that?`,
    gradClassName: 'CSPT6',
    favInstructor: 'Austin',

  });

  const Moises = new ProjectManager({
    name: 'Moises',
    location: 'Canada',
    age: 21,
    gender: 'male',
    favLanguage: 'CSS',
    specialty: 'VSCode',
    catchPhrase: `All right everybody`,
    gradClassName: 'CSPT6',
    favInstructor: 'Dan',

  });


  

// **************Students

  const Brandon = new Student({
    name: 'Brandon',
    location: 'Dallas',
    age: 32,
    gender: 'male',
    favLanguage: 'JavaScript',
    className: 'CSPT2',
    favSubjects: ['JavaScript', 'HTML', 'CSS'],
    grade: Math.floor((Math.random() * 100) + 1),
  });

  const Lily = new Student({
    name: 'Lily',
    location: 'El Salvador',
    age: 22,
    gender: 'Female',
    favLanguage: 'English',
    className: 'Crossfit',
    favSubjects: ['Snatches', 'Cleans', 'Deadlifts'], 
    grade: Math.floor((Math.random() * 100) + 1),
  });



  console.log(Dan.gradeStudent(Brandon));