// CODE here for your Lambda Classes
class Person {
    constructor (attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
        this.gender = attrs.gender;
    }
    speak(){
        return (`Hello my ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor (attrs){
        super (attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        return (`Today we are learning about ${subject}.`)
    }
    grade(subject){
        return (`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Student extends Instructor {
    constructor (attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects(){
        return (`${this.favSubjects}`);
    }
    PRAssignment(subject){
        return (`${this.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(subject){
        return (`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class Project_Manager extends Person {
    constructor (attrs){
        super(attrs);
        this.gradClassName = attrs.gradClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        return (`${this.name} announces to ${channel}, @channel stand time! `)
    }
    debugsCode(subject){
        return (`${this.name} debugs ${this.name}'s code on ${subject}`)
    }
}

const fred = new Student({
  name: 'Fred',
  age: 34,
  location: 'Albuquerque',
  gender: 'Male',
  previousBackground: 'Teacher',
  className: 'fsd12',
  favSubjects: 'Python, Ruby, Elixir, JS.'
  
})

const tim = new Student({
  name: 'Tim',
  age: 18,
  location: 'Oswego',
  gender: 'Male',
  previousBackground: 'Stock Boy',
  className: 'cs13',
  favSubjects: 'Spanish, English, French, CompSci.'
})

const tina = new Student({
  name: 'Tina',
  age: 19,
  location: 'New Jersey',
  gender: 'Female',
  previousBackground: 'Cashier',
  favSubjects: 'Engineering, Shop, Physics, Python, C#'
})

const rick = new Instructor({
  name: 'Rick',
  age: 43,
  location: 'Who Knows?',
  gender: 'Male',
  specialty: 'Science',
  favLanguage: 'Drunken English',
  catchPhrase: 'IM PICKLE RICCCCCKKKKK!'
})

const jimbo = new Project_Manager({
  name: 'Jim',
  age: 21,
  location: 'Madagascar',
  gender: 'Male',
  specialty: 'Not getting eaten by wild animals.',
  favLanguage: 'PHP',
  catchPhrase: 'Well, that just happened.',
  gradClassName: 'fsw1',
  favInstructor: 'Philip'
})

const terry = new Project_Manager({
  name: 'Terry',
  age: 25,
  location: 'Philadelphia',
  gender: 'Male',
  specialty: 'Sleep',
  favLanguage: 'Swift',
  catchPhrase: 'SNORE',
  favInstructor: 'Life',
  gradClassName: 'fsw2'
})

const phil = new Instructor({
  name: 'Philip',
  age: 22,
  location: 'California',
  gender: 'Male',
  specialty: 'Waking up Terry',
  favLanguage: 'JS',
  catchPhrase: '*bullhorn* hey, you awake Terry?'
})
