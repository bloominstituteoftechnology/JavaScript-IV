// CODE here for your Lambda Classes

class Person {
    constructor (basics) {
    this.name = basics.name;
    this.age = basics.age
    this.location = basics.location;
    this.gender = basics.gender;
}
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor (about) {
        super(about)
        this.specialty = about.specialty;
        this.favLanguage = about.favLanguage;
        this.catchPhrase = about.catchPhrase;
    }
    demo(subject) {
        
        return console.log(`Today we are learning about ${subject}`);
    }
    grade(subject){
        return  `${this.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(stud){
        super(stud);
        this.previoudBackground = stud.previousBackground;
        this.className = stud.className;
        this.favSubjects = stud.favSubjects;
    }
    // listSubjects (){ 
    //     Student.forEach(function(answers) {
    //         listSubjects.push(answers)
    //     }) 
    // }
    PRAssignment(subject) {
        return `${this.name} has submitted a pr for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}
    


class ProjectManager extends Instructor {
    constructor(manager) {
        super(manager);
        this.gradClassName = manager.gradClassName;
        this.favIncstructor = manager.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
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

  const lisa = new Instructor({
      name: 'Lisa',
      age: '25',
      location: 'california',
      gender: 'Female',
      Specialty: 'redux',
      favLanguage: 'C++',
      catchPhrase: 'Ummmmm'
  });

  const elan = new Student({
      name: 'Elan',
      age: 22,
      location: 'NYC',
      gender: 'Male',
      specialty: 'CSS',
      favSubjects: ['HTML', 'CSS'],
      catchPhrase: 'Nanya',
      previousBackground: 'med school',
      className: 'web17',
  })

  const gio = new Student({
      name: 'Gio',
      age: '21',
      location: 'Georgia',
      gender: 'Male',
      specialty: 'HTML',
      favSubject: ['HTML', 'JS'],
      previousBackground: 'Business',
      className: 'web16',
  })

  const jordan = new ProjectManager({
    name: 'Jordan',
    age: '25',
    location: 'california',
    gender: 'Male',
    Specialty: 'redux',
    favLanguage: 'C++',
    catchPhrase: 'What Up!',
    gradClassName: 'web15',
    favInstructor: 'Josh',
  })

  const mike = new ProjectManager({
    name: 'Mike',
    age: '32',
    location: 'Ohio',
    gender: 'Male',
    Specialty: 'React',
    favLanguage: 'Python',
    catchPhrase: 'Sweat, Blood, and Tears',
    gradClassName: 'Android dev 6',
    favInstructor: 'Karen',
  })


  
  console.log(fred.grade('JS'))
  
  console.log(elan.PRAssignment('CSS'))

  console.log(elan.sprintChallenge('JavaScript'))

  console.log(mike.standUp("Andriod Dev"))

  console.log(jordan.debugsCode(lisa, "React"))

