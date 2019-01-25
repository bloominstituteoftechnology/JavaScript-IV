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
    demo(a) {
        var subject = a;
        return (`Today we are learning about ${a}`);
    }
    grade() {
        console.log()
    }
}

class Student extends Person {
    constructor(stud){
        super(stud);
        this.previoudBackground = stud.previousBackground;
        this.className = stud.className;
        this.favSubjects = stud.favSubjects;
    }
}


class ProjectManager extends Instructor {
    constructor(manager) {
        super(manager);
        this.gradClassName = manager.gradClassName;
        this.favIncstructor = manager.favInstructor;
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


  console.log(demo())