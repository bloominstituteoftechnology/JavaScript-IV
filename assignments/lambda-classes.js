// CODE here for your Lambda Classes
class People {

    constructor(traits) {
        this.name = traits.name;
        this.age = traits.age;
        this.location = traits.location;
        this.gender = traits.gender;
    }
    speak () {
        return `Hello my name is ${this.name};`
    }
}

class Instructor extends People {

    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage =  attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo (subject) {
        return `Today we are learning about ${subject}`;
    }

    grade (student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends People {

    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects
    }
    listsSubject () {
        return `${this.favSubjects}`
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge (subject) {
      return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class PM extends Instructor {

    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp (channel) {
        return `${this.name} announces to ${channel}, @channel study times!`
    }

    debugsCode (student, subject) {

        return `${this.name} debugs ${student}'s code on ${subject}.`

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

 console.log(fred.demo('Python'));

  const toua = new Student ({
    name: 'Toua',
    location: 'MN',
    age: 25,
    gender: 'M',
    favLanguage: 'Wordpress',
    previousBackground: 'Work',
    favSubjects: ['JavaScript', 'Python', 'C#', 'C++'],
    className: 'FSW 14'
  });

  const mitch = new PM ({
    name: 'Mitch',
    location: 'Space',
    age: 30,
    gender: 'M',
    favLanguage: 'C',
    specialty: 'C++',
    catchPhrase: 'Nice',
    gradClassName: 'CS11',
    favInstructor: 'John'
  })
